import React, { useState, useCallback } from "react";
import { useCard } from "../CardContext";
import "./styleCoffeeSelection.css";
import more from "../../assets/mais.svg";
import less from "../../assets/menos.svg";
import dump from "../../assets/lixeira.svg";

const CoffeeSelection: React.FC = () => {
  const { cardItems, removeFromCart } = useCard();

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cardItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const calculation = useCallback((quantity: number): number => {
    const Unitprice = 9.9;
    return quantity * Unitprice;
  }, []);

  const calculationTotal = useCallback((): number => {
    let total = 0;
    cardItems.forEach((item) => {
      const itemTotal = calculation(quantities[item.id]);
      total += itemTotal;
    });
    return total;
  }, [quantities, cardItems, calculation]);

  const handleAdd = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleSubtract = (id: number) => {
    if (quantities[id] && quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    } else {
      removeFromCart(id);
    }
  };

  const remove = (id: number) => {
    removeFromCart(id);
  }; 

  return (
    <>
      <h2 className="title-selection">Cafés selecionados</h2>
      <div className="card-coffee">
        {cardItems.map((item) => {
          const totalItem = calculation(quantities[item.id]);
          return (
            <div key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="coffee-selection"
              />
              <p className="item-name">{item.name}</p>
              <p className="calculation">R$ {totalItem.toFixed(2)}</p>
              <div className="button-value-container2">
                <div className="button-group2">
                  <button
                    onClick={() => handleSubtract(item.id)}
                    className="control-button2"
                  >
                    <img src={less} alt="menos" />
                  </button>
                  <p className="quantity2">{quantities[item.id]}</p>
                  <button
                    onClick={() => handleAdd(item.id)}
                    className="control-button2"
                  >
                    <img src={more} alt="mais" />
                  </button>
                </div>
                <button onClick={() => remove(item.id)} className="remove">
                  <img src={dump} alt="Lixeira" /> Remover
                </button>
              </div>
              <div className="line"></div>
            </div> 
          );
        })}
        <div className="total-section">
          <p className="section1">Total de itens</p>
          <p className="section5">R$ {calculationTotal().toFixed(2)}</p>
          <p className="section2">Entrega</p>
          <p className="section3">R$3,50</p>
          <p className="section4">Total</p>
          <p className="section6">R$ {(calculationTotal() + 3.5).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default CoffeeSelection;

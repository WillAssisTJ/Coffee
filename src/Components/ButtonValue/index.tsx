import { FC, useState } from "react";
import "./style.css";
import buyImg from "../../assets/buy.svg";
import { useCard } from "../CardContext";
import less from "../../assets/menos.svg";
import more from "../../assets/mais.svg";

interface ButtonValueProps {
  id: number;
  name: string;
  img: string;
}

const ButtonValue: FC<ButtonValueProps> = ({ id, name, img }) => {
  const { addToCard } = useCard();
  const [buy, setBuy] = useState(0);

  function add() {
    const newValue = buy + 1;
    setBuy(newValue);
  } 

  function subtract() {
    if (buy > 0) {
      const newValue = buy - 1;
      setBuy(newValue);
    }
  }

  return (
    <div className="button-value-container">
      <div className="button-group">
        <button onClick={subtract} className="control-button">
          <img src={less} alt="botão subtração" />
        </button>
        <div className="quantity">{buy}</div>
        <button onClick={add} className="control-button">
          <img src={more} alt="botão soma" />
        </button>
      </div>
      <button
        className="image-button"
        onClick={() => addToCard({ id, name, img, quantity: buy })}
      >
        <img src={buyImg} alt="Carrinho de compra" />
      </button>
    </div>
  );
};

export default ButtonValue;

import React from "react";
import "./SelectableButtonStyle.css"
import credit from "../../assets/crédito.svg";
import debit from "../../assets/débito.svg";
import money from "../../assets/dinheiro.svg";
import money2 from "../../assets/money2.svg";
import { usePaymentContext } from "../PaymentContext/PaymentContext";


const SelectableButton: React.FC = () => {
  const { isSelected1, isSelected2, isSelected3, handleButtonClick } = usePaymentContext();

  return (
    <div className="container-pay">
      <div className="flex-pay">
        <p className="pay2">
          <img src={money2} alt="Cifrão" className="pay-img2" />
          Pagamento
        </p> 
        <div className="flex-button">
          <p className="delivery3">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <button
        className={`selectable-button1 ${isSelected1 ? "selected1" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        <img src={credit} alt="Cartão de crédito" className="pay-img" />
        <span>Cartão de Crédito</span>
      </button> 
      <button
        className={`selectable-button2 ${isSelected2 ? "selected2" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        <img src={debit} alt="Cartão de débito" className="pay-img" />
        <span>Cartão de Débito</span>
      </button>
      <button
        className={`selectable-button3 ${isSelected3 ? "selected3" : ""}`}
        onClick={() => handleButtonClick(3)}
      >
        <img src={money} alt="Dinheiro" className="pay-img" />
       <span>Dinheiro</span> 
      </button>
    </div> 
  );
};

export default SelectableButton;

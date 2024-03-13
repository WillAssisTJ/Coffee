import { useAddressContext } from "../../Components/AddressContext/AddressContext";
import { usePaymentContext } from "../../Components/PaymentContext/PaymentContext";
import "./successStyle.css";
import location3 from "../../assets/location3.svg";
import time from "../../assets/time.svg";
import money3 from "../../assets/money3.svg";
import moto from "../../assets/moto.svg";
import { useNumeroContext } from "../../Components/NumberContext/NumeroContext";

const Success = () => {
  const { isSelected1, isSelected2, isSelected3 } = usePaymentContext();
  const { address } = useAddressContext();
  const { numero } = useNumeroContext(); 

  let selectedOption = "";

  if (isSelected1) {
    selectedOption = "Cartão de Crédito";
  } else if (isSelected2) {
    selectedOption = "Cartão de Débito";
  } else if (isSelected3) {
    selectedOption = "Dinheiro";
  }

  return (
    <div className="flex-total">
      <div className="flex-one">
        <h2 className="titule-address">Uhu! Pedido confirmado</h2>
        <p className="address-one">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="flex-address">
          <p className="address-two">
            <img src={location3} alt="icone de localização" /> Entrega em
            <span> {address.logradouro}, {numero} </span> 
          </p>
          <p className="address-three">
            {address.bairro} - {address.localidade}, {address.uf}
          </p>
          <p className="address-four"> 
            {" "}
            <img src={time} alt="icone de relógio" />
            Previsão de entrega
          </p>
          <p className="address-five">20 min - 30 min</p>
          <p className="address-six">
            {" "}
            <img src={money3} alt="icone de dinheiro" />
            Pagamento na entrega
          </p>
          <p className="address-seven">{selectedOption}</p>
        </div>
      </div>
      <div className="flex-two">
        <img src={moto} alt="Entrega de moto"/>
      </div>
    </div>
  );
}; 

export default Success;
import icon1 from "../../assets/Icon.svg";
import icon2 from "../../assets/Icon (1).svg";
import icon3 from "../../assets/Icon (2).svg";
import icon4 from "../../assets/Icon 4.svg";
import banner from "../../assets/Banner.svg"
import './style.css'

export default function Banner() {
  return (
    <div className="flex-wrapper">
      <div className="flex-container1">
        <div className="flex-banner">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a  qualquer hora</h3>
        </div>
        <div className="flex-itens">
          <div className="flex-item1">
            <img src={icon1} alt="icone de carrinho" />
            <p>Compra simples e segura</p>
          </div>
          <div className="flex-item3">
            <img src={icon2} alt="icone de embalagem" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className="flex-item2">
            <img src={icon3} alt="icone de relógio" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className="flex-item4">
            <img src={icon4} alt="icone de café" />
            <p>O café chega fresquinho até você</p>
          </div>
          <p className="coffee">Nossos cafés</p>
        </div>
      </div>
      <div className="flex-container2">
        <img src={banner} alt="banner" className="banner" />
      </div>
     
      </div>
  );
}

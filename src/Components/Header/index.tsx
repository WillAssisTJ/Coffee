import './style.css'
import logo from '../../assets/Logo.svg'
import card from '../../assets/Cart.svg'
import { Link } from 'react-router-dom'
import Location from '../Location'
import location from '../../assets/location.svg'
import { useCard } from '../CardContext'

export default function Header(){
  const {cardItems} = useCard();

const totalQuantity = cardItems.reduce((total, item) => total + item.quantity, 0);
 

  return ( 
    <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo Coffee" />
        </div>
            <div className="container-location">
              <div className='content-image'>
                <img src={location} alt="Localização" />
              </div>
              <div className='content-location'>
                <Location />
              </div> 
            </div>
            <div className='card-link'>
                <Link to="checkout">
                  <img src={card} alt="Carrinho de compra" />
                  {totalQuantity >0 && (
                    <div className='sum'>
                        {totalQuantity}
                    </div>
                  )}
                  
                </Link> 
            </div>
          </div>
  );
}
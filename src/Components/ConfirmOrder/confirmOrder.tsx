import { Link } from "react-router-dom";
import './confirmStyle.css'

interface ConfirmOrderProps {
  isFormFilled: boolean;
}

const ConfirmOrder: React.FC<ConfirmOrderProps> = ({isFormFilled}) => {
  
  return (
    <Link to="/success">
      <button className="confirm" disabled={isFormFilled}>
        CONFIRMAR PEDIDO
      </button>
    </Link> 
  );
};

export default ConfirmOrder;

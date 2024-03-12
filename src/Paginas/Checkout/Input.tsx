import "./StyleInput.css";
import api from "../../services/api";
import location from "../../assets/localização2.svg";
import { useEffect, useState } from "react";
import { useAddressContext } from "../../Components/AddressContext/AddressContext";
import SelectableButton from "../../Components/SelectableButton/SelectableButton";
import { Link } from "react-router-dom";
import CoffeeSelection from "../../Components/CoffeeSelection";

interface CepData {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  numero?: string;
  uf?: string;
}

const Input = () => {
  const { setAddress } = useAddressContext();
  const [input, setInput] = useState<number | undefined>();
  const [cep, setCep] = useState<CepData>({});
  const [numero, setNumero] = useState<string>("");
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  useEffect(() => {
    const formFields = [
      cep.logradouro,
      cep.bairro,
      cep.localidade,
      cep.uf,
      numero,
    ];
    const formFilled = formFields.every(
      (field) => field && field.trim() !== ""
    );
    setIsFormFilled(formFilled);
  }, [cep, numero]);

  const handleSearch = async () => {
    if (input && input.toString().length === 8) {
      try {
        const response = await api.get(`${input}/json`);
        const updatedCep = { ...response.data, numero: numero };
        setCep(updatedCep);
        setAddress(updatedCep, numero);
      } catch (error) {
        setCep({});
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(parseInt(value));
    if (!isNaN(parseInt(value))) {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%' }} className="primary">
      <div className="delivery1">
        <p className="complete">Complete seu pedido</p>
        <div className="delivery">
          <p className="deliver">
            <img src={location} alt="" />
            Endereço de Entrega
          </p>
          <p className="address">
            Informe o Endereço onde deseja receber seu pedido
          </p>
          <input
            type="text"
            placeholder="CEP"
            value={input ?? ""}
            onChange={handleChange}
            className="cep"
          />
          <label htmlFor="street"></label>
          <input
            type="text"
            placeholder="Rua"
            value={cep.logradouro || ""}
            onChange={(e) => setCep({ ...cep, logradouro: e.target.value })}
            className="street"
            id="street"
          />
          <label htmlFor="number"></label>
          <input
            type="text"
            placeholder="Número"
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
            className="number-street"
            id="number"
          />
          <div className="complement-container">
            <label htmlFor="complement"></label>
            <input
              type="text"
              placeholder="Complemento"
              value={cep.complemento || ""}
              onChange={(e) => setCep({ ...cep, complemento: e.target.value })}
              className="complement"
              id="complement"
            />
            <div className="complement-placeholder">Opcional</div>
          </div>
          <label htmlFor="neighborhood"></label>
          <input
            type="text"
            placeholder="Bairro"
            value={cep.bairro || ""}
            onChange={(e) => setCep({ ...cep, bairro: e.target.value })}
            className="neighborhood"
            id="neighborhood"
          />
          <label htmlFor="city"></label>
          <input
            type="text"
            placeholder="Cidade"
            value={cep.localidade || ""}
            onChange={(e) => setCep({ ...cep, localidade: e.target.value })}
            className="city2"
            id="city"
          />
          <label htmlFor="uf"></label>
          <input
            type="text"
            placeholder="UF"
            value={cep.uf || ""}
            onChange={(e) => setCep({ ...cep, uf: e.target.value })}
            className="uf"
            id="uf"
          />
        </div>
        
      </div>
      <SelectableButton />
      <div className="delivery2">
        <CoffeeSelection />
        <Link to="/success">
          <button className="confirm" disabled={!isFormFilled}>
            CONFIRMAR PEDIDO
          </button> 
        </Link>
      </div>
    </div> 
  );
};

export default Input;

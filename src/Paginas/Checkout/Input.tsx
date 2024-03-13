import React, { useEffect, useRef, useState } from "react";
import { useAddressContext } from "../../Components/AddressContext/AddressContext";
import api from "../../services/api";
import location from "../../assets/localização2.svg";
import SelectableButton from "../../Components/SelectableButton/SelectableButton";
import { Link } from "react-router-dom";
import CoffeeSelection from "../../Components/CoffeeSelection";
import { useNumeroContext } from "../../Components/NumberContext/NumeroContext";
import "./StyleInput.css";

interface CepData {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

const Input = () => {
  const { setAddress } = useAddressContext();
  const { numero, setNumero } = useNumeroContext();
  const [input, setInput] = useState<string>("");
  const [cep, setCep] = useState<CepData>({});
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  const numeroInputRef = useRef<HTMLInputElement>(null);

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
    if (input.length === 9 && input.includes("-")) {
      try {
        const response = await api.get(`${input.replace("-", "")}/json`);
        const updatedCep = { ...response.data };
        setCep(updatedCep);
        setAddress(updatedCep, numero);
        if (numeroInputRef.current) {
          numeroInputRef.current.focus();
        }
      } catch (error) {
        setCep({});
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value
      .replace(/\D/g, "")
      .slice(0, 9)
      .replace(/(\d{5})(\d{3})/, "$1-$2");
    setInput(formattedValue);
  };

  const handleBlur = () => {
    handleSearch();
  };

  const handleNumeroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNumero(value);
  };

  return (
    <div style={{ display: "flex", width: "100%" }} className="primary">
      <div className="delivery1">
        <p className="complete">Complete seu pedido</p>
        <div className="delivery">
          <p className="deliver">
            <img src={location} alt="localização" />
            Endereço de Entrega
          </p> 
          <p className="address">
            Informe o Endereço onde deseja receber seu pedido
          </p>
          <input
            type="text"
            placeholder="CEP"
            value={input}
            onChange={handleChange}
            onBlur={handleBlur}
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
            ref={numeroInputRef}
            type="text"
            placeholder="Número"
            onChange={handleNumeroChange}
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

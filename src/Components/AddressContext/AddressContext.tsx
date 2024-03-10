import React, { createContext, useContext, useState, ReactNode } from "react";

interface CepData {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  numero?: string;
  uf?: string;
}

interface AddressContextType {
  address: CepData;
  setAddress: (address: CepData, numeroRua: string) => void; 
}

const AddressContext = createContext<AddressContextType | undefined>(
  undefined
);

interface AddressProviderProps {
  children: ReactNode; 
}

export const AddressProvider: React.FC<AddressProviderProps> = ({ children }) => {
  const [address, setAddressState] = useState<CepData>({});

  const setAddress = (newAddress: CepData, numeroRua: string) => {
    setAddressState(newAddress);
    setAddressState(prevAddress => ({ ...prevAddress, numero: numeroRua })); 
  };

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within an AddressProvider");
  }
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NumeroContextType {
  numero: string;
  setNumero: (numero: string) => void;
}

const NumeroContext = createContext<NumeroContextType | undefined>(undefined);

export const useNumeroContext = () => {
  const context = useContext(NumeroContext);
  if (!context) {
    throw new Error("useNumeroContext must be used within a NumeroProvider");
  }
  return context;
};

interface NumeroProviderProps {
  children: ReactNode;
}

export const NumeroProvider: React.FC<NumeroProviderProps> = ({ children }) => {
  const [numero, setNumero] = useState<string>('');

  return (
    <NumeroContext.Provider value={{ numero, setNumero }}>
      {children}
    </NumeroContext.Provider>
  );
};

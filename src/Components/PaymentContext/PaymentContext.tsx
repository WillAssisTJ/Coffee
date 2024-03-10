import React, { createContext, useContext, useState, ReactNode } from "react";

type PaymentContextType = {
  isSelected1: boolean;
  isSelected2: boolean;
  isSelected3: boolean;
  handleButtonClick: (buttonNumber: number) => void;
};

const PaymentContext = createContext<PaymentContextType>({
  isSelected1: false,
  isSelected2: false,
  isSelected3: false,
  handleButtonClick: () => {},
});

type PaymentProviderProps = {
  children: ReactNode;
};

export const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  const handleButtonClick = (buttonNumber: number) => {
    setIsSelected1(buttonNumber === 1);
    setIsSelected2(buttonNumber === 2);
    setIsSelected3(buttonNumber === 3);
  };

  return (
    <PaymentContext.Provider
      value={{ isSelected1, isSelected2, isSelected3, handleButtonClick }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => useContext(PaymentContext);

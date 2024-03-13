import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Paginas/Home/home";
import Header from "./Components/Header";
import { CardProvider } from "./Components/CardContext";
import { PaymentProvider } from "./Components/PaymentContext/PaymentContext.tsx";
import Success from "./Paginas/Success/Success.tsx";
import Input from "./Paginas/Checkout/Input.tsx";
import { AddressProvider } from "./Components/AddressContext/AddressContext.tsx";
import { NumeroProvider } from "./Components/NumberContext/NumeroContext.tsx";

function AppRoutes() {
  return (
    <CardProvider>
      <PaymentProvider>
        <AddressProvider>
          <NumeroProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="checkout" element={<Input />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </BrowserRouter>
          </NumeroProvider>
        </AddressProvider>
      </PaymentProvider>
    </CardProvider>
  );
}

export default AppRoutes;

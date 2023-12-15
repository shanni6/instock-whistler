import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";

import Header from "./components/Header/Header";

// Pages
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/warehouses" element={<Warehouses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

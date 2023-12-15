import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
}

export default App;

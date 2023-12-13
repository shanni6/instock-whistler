import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import WarehousesPage from "./pages/Warehouse/Warehouse";
import InventoryPage from "./pages/Inventory/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

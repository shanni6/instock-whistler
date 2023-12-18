import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";

// import Footer from "./components/Footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation";

import Warehouses from "./pages/Warehouses/Warehouses.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/warehouses" />} />
            {/* <Route path="/warehouses/add" element={} />
            <Route path="/warehouses/:id" element={} />
            <Route path="/warehouses/:id/edit" element={} />
            <Route path="/warehouses/:id/delete" element={} />

            <Route path="/inventories/add" element={} />
            <Route path="/inventories/:id" element={} />
            <Route path="/inventories/:id/edit" element={} />
            <Route path="/inventories/:id/delete" element={} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

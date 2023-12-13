import { useState } from 'react'
import { Route,Routes, BrowserRouter} from "react-router-dom";

import WarehousesPage from "./pages/warehouse/warehouse";
import InventoryPage from './pages/inventory/inventory';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WarehousesPage/>}/>
      <Route path='/Inventory' element={<InventoryPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

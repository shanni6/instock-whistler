import "./Inventory.scss";
import searchIcon from "../../assets/icons/search-24px.svg"
import sortIcon from "../../assets/icons/sort-24px.svg"

import InventoryList from "../../components/inventoryList/InventoryList";

function Inventory() {
  return (
    <>
    <div className='inventory'>
      <div className='inventory__nav'>
        <h1 className='inventory__title'>Inventory</h1>
        <div className='inventory__nav-search'>
          <div className="inventory__nav-input">
            <input className="inventory__search-input" type="text" placeholder="Search..." />
            <div className="inventory__nav-icon">
              <img className="inventory__search-icon" src={searchIcon} alt="search-icon" />
            </div>
          </div>
          <button className="inventory__add-item-button">+ Add New Item</button>
        </div>
      </div>
  
      <ul className="inventory__sort">
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">inventory item</h4>
          <img className="inventory__sort-icon" src={sortIcon} alt="sortIcon" />
        </li>
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">category</h4>
          <img className="inventory__sort-icon" src={sortIcon} alt="sortIcon" />
        </li>
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">Status</h4>
          <img className="inventory__sort-icon" src={sortIcon} alt="sortIcon" />
        </li>
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">Qty</h4>
          <img className="inventory__sort-icon" src={sortIcon} alt="sortIcon" />
        </li>
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">warehouse</h4>
          <img className="inventory__sort-icon" src={sortIcon} alt="sortIcon" />
        </li>
        <li className="inventory__sort-li">
          <h4 className="inventory__sort-heading">actions</h4>
        </li>
      </ul>
  
      <InventoryList />
    </div>
  </>
  
  )
}

export default Inventory;

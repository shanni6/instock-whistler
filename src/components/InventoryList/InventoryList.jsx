import "./InventoryList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";

const InventoryList = () => {
  return (
    <section className="inventory">
      <div className="inventory__nav">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__nav-search">
          <div className="inventory__nav-input">
            <input
              className="inventory__search-input"
              type="text"
              placeholder="Search..."
            />
              <img
                className="inventory__search-icon"
                src={searchIcon}
                alt="search-icon"
              />
          </div>
          <button className="inventory__add-item-button">+ Add New Item</button>
        </div>
      </div>

      <div className="inventory__container">
        <ul className="inventory__sort">
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">inventory item</h4>
            <img
              className="inventory__sort-icon"
              src={sortIcon}
              alt="sortIcon"
            />
          </li>
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">category</h4>
            <img
              className="inventory__sort-icon"
              src={sortIcon}
              alt="sortIcon"
            />
          </li>
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">Status</h4>
            <img
              className="inventory__sort-icon"
              src={sortIcon}
              alt="sortIcon"
            />
          </li>
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">Qty</h4>
            <img
              className="inventory__sort-icon"
              src={sortIcon}
              alt="sortIcon"
            />
          </li>
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">warehouse</h4>
            <img
              className="inventory__sort-icon"
              src={sortIcon}
              alt="sortIcon"
            />
          </li>
          <li className="inventory__sort-li">
            <h4 className="inventory__sort-heading">actions</h4>
          </li>
        </ul>

        <ul className="inventory__list">
          <li className="inventory__list-li">Television &gt;</li>
          <li className="inventory__list-li">Electronics </li>
          <li className="inventory__list-li inventory__list-stock">
            in stock{" "}
          </li>
          <li className="inventory__list-li inventory__list-quantity">500 </li>
          <li className="inventory__list-li inventory__list-location">
            Manhattan
          </li>
          <li className="inventory__list-li inventory__list-actions">
            <img
              src={deleteIcon}
              className="inventory__deleteIcon"
              alt="deleteIcon"
            />
            <img
              src={editIcon}
              className="inventory__editIcon"
              alt="editIcon"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default InventoryList;

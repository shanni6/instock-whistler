import { Link } from "react-router-dom";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ChevronRight from "../../assets/icons/chevron_right-24px.svg";

const InventoryListCard = ({ inventoryList, isFromWarehouseList }) => {
  return (
    <>
      {inventoryList?.map((item) => (
        <li className="inventoryCard" key={item.id}>
          <div className="inventoryCard__container">
            <div className="inventoryCard__left">
              <div className="inventoryCard__left-item">
                <p className="inventoryCard__left-itemTitle">INVENTORY ITEM</p>
                <p className="inventoryCard__left-product">
                  <Link className="Link__item" to={`/itemDetails/id`}>
                    {item.item_name}
                    <img
                      className="inventoryCard__left-productimg"
                      src={ChevronRight}
                      alt="drop down icon"
                    />
                  </Link>
                </p>
              </div>
              <div className="inventoryCard__left-category">
                <p className="inventoryCard__left-categoryTitle">CATEGORY</p>
                <p className="inventoryCard__left-category">{item.category}</p>
              </div>
            </div>
            <div className="inventoryCard__right">
              <div className="inventoryCard__right-item">
                <p className="inventoryCard__itemTitle">STATUS</p>
                <p className={`inventoryCard__item inventory__list-stock ${item.status.toLowerCase() === 'out of stock' ? 'out-of-stock' : ''}`} >{item.status}</p>
              </div>
              <div className="inventoryCard__left-category">
                <p className="inventoryCard__categoryTitle">QTY</p>
                <p className="inventoryCard__category">{item.quantity}</p>
              </div>
              {isFromWarehouseList ? null : (
                <div className="inventoryCard__left-category">
                  <p className="inventoryCard__categoryTitle">WAREHOUSE</p>
                  <p className="inventoryCard__category">{item.warehouse_name}</p>
                </div>
              )}
            </div>
          </div>
          <div className="inventoryCard__icons">
            <img
              className="inventoryCard__left-icon"
              src={deleteIcon}
              alt="delete icon"
            ></img>
            <Link to="/editItem">
              <img
                className="inventoryCard__left-icon"
                src={editIcon}
                alt="edit icon"
              ></img>
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default InventoryListCard;

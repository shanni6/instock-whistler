import "./InventoryList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const InventoryList = () => {
  return (
    <>
      <ul className="inventory__list">
        <li className="inventory__item">Television &gt;</li>
        <li className="inventory__item">Electronics </li>
        <li className="inventory__item inventory__item--stock">in stock </li>
        <li className="inventory__item inventory__item--quantity">500 </li>
        <li className="inventory__item inventory__item--location">
          Manhattan{" "}
        </li>
        <li className="inventory__item inventory__item--actions">
          <img src={deleteIcon} className="inventory__icon" alt="deleteIcon" />
          <img src={editIcon} className="inventory__icon" alt="editIcon" />
        </li>
      </ul>
    </>
  );
};
export default InventoryList;

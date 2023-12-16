import "../InventoryList/InventoryList";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import InventoryListCard from "../InventoryListCard/InventoryListCard";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//need a click param from warehouseList to get warehouseId
const WarehouseInventoryList = () => {
  const [warehouseIL, setwarehouseIL] = useState([]);
  const warehouseId=3;//mockup

  const getList = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
      setwarehouseIL(response.data);
    } catch (error) {
      console.error("Error fetching inventory list:", error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <section className="inventory">
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
              <h4 className="inventory__sort-heading">actions</h4>
            </li>
          </ul>

          {warehouseIL?.map((item) => (
            <ul className="inventory__list" key={item.id}>
              <Link to={`../WarehouseDetails/WarehouseDetails/${warehouseId}`}>
                <li className="inventory__list-li product">
                  {item.item_name} &gt;
                </li>
              </Link>

              <li className="inventory__list-li">{item.category} </li>
              <li
                className={`inventory__list-li inventory__list-stock ${
                  item.status.toLowerCase() === "out of stock"
                    ? "out-of-stock"
                    : ""
                }`}
              >
                {item.status}
              </li>

              <li className="inventory__list-li inventory__list-quantity">
                {item.quantity}
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
          ))}
        </div>
      </section>

      <InventoryListCard inventoryList={warehouseIL} isFromWarehouseList={true} />
    </>
  );
};

export default WarehouseInventoryList;

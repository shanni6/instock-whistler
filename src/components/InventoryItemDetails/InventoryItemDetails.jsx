import "./InventoryItemDetails.scss";

import arrowBackIcon from "./../../assets/icons/arrow_back-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryItemDetails() {
  const { VITE_API_URL: apiUrl } = import.meta.env;
  const params = useParams();

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const { data } = await axios.get(`${apiUrl}/inventories/${params.id}`);
      setInventory(data);
    };

    fetchInventory();
  }, []);

  if (inventory) {
    return (
      <section className="inventory-item-details">
        <h1 className="inventory-item-details__page-header">
          <Link className="inventory-item-details__page-header-icon">
            <img src={arrowBackIcon} />
          </Link>
          Television
          <Link
            className="inventory-item-details__page-header-icon inventory-item-details__page-header-icon--edit"
            to=""
          >
            <img src={editIcon} />
          </Link>
        </h1>

        <div className="inventory-item-details__section">
          <div className="inventory-item-details__sub-section">
            <dl>
              <dt className="inventory-item-details__label">
                Item description:
              </dt>
              <dd>{inventory.description}</dd>
            </dl>

            <dl>
              <dt className="inventory-item-details__label">Category:</dt>
              <dd>{inventory.category}</dd>
            </dl>
          </div>

          <dl className="inventory-item-details__dl--half-width">
            <dt className="inventory-item-details__label">Status:</dt>
            <dd>
              <span className="inventory-item-details__label inventory-item-details__label--green">
                {inventory.status}
              </span>
            </dd>
          </dl>

          <dl className="inventory-item-details__dl--half-width">
            <dt className="inventory-item-details__label">Quantity:</dt>
            <dd>{inventory.quantity}</dd>
          </dl>

          <dl className="inventory-item-details__dl">
            <dt className="inventory-item-details__label">Warehouse:</dt>
            <dd>{inventory.warehouse_id}</dd>
          </dl>
        </div>
      </section>
    );
  }
}

export default InventoryItemDetails;

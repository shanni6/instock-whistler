import "./InventoryItemDetails.scss";

import { Link } from "react-router-dom";
import arrowBackIcon from "./../../assets/icons/arrow_back-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";

function InventoryItemDetails() {
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
                        <dd>
                            This 50&quot;, 4K LED TV provides a crystal-clear
                            picture and vivid colors.
                        </dd>
                    </dl>

                    <dl>
                        <dt className="inventory-item-details__label">
                            Category:
                        </dt>
                        <dd>Electronics</dd>
                    </dl>
                </div>

                <dl className="inventory-item-details__dl--half-width">
                    <dt className="inventory-item-details__label">Status:</dt>
                    <dd>
                        <span className="inventory-item-details__label inventory-item-details__label--green">
                            In stock
                        </span>
                    </dd>
                </dl>

                <dl className="inventory-item-details__dl--half-width">
                    <dt className="inventory-item-details__label">Quantity:</dt>
                    <dd>500</dd>
                </dl>

                <dl className="inventory-item-details__dl">
                    <dt className="inventory-item-details__label">
                        Warehouse:
                    </dt>
                    <dd>Manhattan</dd>
                </dl>
            </div>
        </section>
    );
}

export default InventoryItemDetails;

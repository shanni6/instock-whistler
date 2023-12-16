import "./Warehouses.scss";

import deleteOutline from "./../../assets/icons/delete_outline-24px.svg";
import edit from "./../../assets/icons/edit-24px.svg";

function Warehouses() {
    const warehousesData = [
        {
            warehouseDetails: {
                warehouseName: "Manhattan",
                streetAddress: "503 Broadway",
                city: "New York",
                country: "USA",
            },
            contactDetails: {
                contactName: "Parmin Aujla",
                phone: "+1(629) 555-0129",
                email: "paujla@instock.com",
            },
        },
        {
            warehouseDetails: {
                warehouseName: "Manhattan",
                streetAddress: "503 Broadway",
                city: "New York",
                country: "USA",
            },
            contactDetails: {
                contactName: "Parmin Aujla",
                phone: "+1(629) 555-0129",
                email: "paujla@instock.com",
            },
        },
    ];

    const tbodyRows = warehousesData.map(
        ({ warehouseDetails, contactDetails }) => {
            return (
                <tr
                    className="warehouses-table__tr warehouses-table__tr--tbody"
                    key=""
                >
                    <td className="warehouses-table__td warehouses-table__td--warehouse-name">
                        <div className="warehouses-table__td-container warehouses-table__td-container--warehouse-name">
                            {warehouseDetails.warehouseName}
                        </div>
                    </td>
                    <td className="warehouses-table__td  warehouses-table__td--address">
                        <div className="warehouses-table__td-container warehouses-table__td-container--address">
                            {`${warehouseDetails.streetAddress}, ${warehouseDetails.city}, ${warehouseDetails.country}`}
                        </div>
                    </td>
                    <td className="warehouses-table__td  warehouses-table__td--contact-name">
                        <div className="warehouses-table__td-container warehouses-table__td-container--contact-name">
                            {contactDetails.contactName}
                        </div>
                    </td>
                    <td className="warehouses-table__td  warehouses-table__td--contact-information">
                        <div className="warehouses-table__td-container warehouses-table__td-container--contact-information">
                            {contactDetails.phone} {contactDetails.email}
                        </div>
                    </td>
                    <td className="warehouses-table__td  warehouses-table__td--actions">
                        <img src={deleteOutline} />
                        <img src={edit} />
                    </td>
                </tr>
            );
        }
    );

    return (
        <section className="warehouses">
            <h1 className="warehouses__page-header">Warehouses</h1>
            <div className="warehouses__row">
                <input
                    className="warehouses__search"
                    placeholder="Search..."
                    type="search"
                />
                <button
                    className="warehouses__button warehouses__button--primary"
                    to=""
                >
                    + Add New Warehouse
                </button>
            </div>
            <table className="warehouses-table">
                <thead className="warehouses-table__thead">
                    <tr className="warehouses-table__tr warehouses-table__tr--thead">
                        <th className="warehouses-table__th warehouses-table__th--sort">
                            Warehouse
                        </th>
                        <th className="warehouses-table__th warehouses-table__th--sort">
                            Address
                        </th>
                        <th className="warehouses-table__th warehouses-table__th--sort">
                            Contact Name
                        </th>
                        <th className="warehouses-table__th warehouses-table__th--sort">
                            Contact Information
                        </th>
                        <th className="warehouses-table__th">Actions</th>
                    </tr>
                </thead>
                <tbody>{tbodyRows}</tbody>
            </table>
        </section>
    );
}

export default Warehouses;

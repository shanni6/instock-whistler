import "./Warehouses.scss";

import { Link } from "react-router-dom";

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
    ];

    const tbodyRows = warehousesData.map(
        ({ warehouseDetails, contactDetails }) => {
            return (
                <tr key="">
                    <td>{warehouseDetails.warehouseName}</td>
                    <td>{`${warehouseDetails.streetAddress}, ${warehouseDetails.city}, ${warehouseDetails.country}`}</td>
                    <td>{contactDetails.contactName}</td>
                    <td>
                        {contactDetails.phone} {contactDetails.email}
                    </td>
                    <td></td>
                </tr>
            );
        }
    );

    return (
        <section>
            <h1>Warehouses</h1>
            <input placeholder="Search..." type="search" />
            <Link to="">Add New Warehouse</Link>
            <table>
                <thead>
                    <tr>
                        <th>Warehouse</th>
                        <th>Address</th>
                        <th>Contact Name</th>
                        <th>Contact Information</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{tbodyRows}</tbody>
            </table>
        </section>
    );
}

export default Warehouses;

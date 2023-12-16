import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";

const mockdata = {
  id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
  name: "Manhattan",
  address: "503 Broadway",
  city: "New York",
  country: "USA",
  contact: {
    name: "Parmin Aujla",
    position: "Warehouse Manager",
    phone: "+1 (646) 123-1234",
    email: "paujla@instock.com",
  },
};

export default function WarehouseDetails({ data = mockdata }) {
  return (
    <div className="warehouses__item">
      <p>{data.name}</p>
      <div className="warehouses__text-box">
        <div className="warehouses__column">
          <div className="warehouses__content warehouses__content--long">
            <h3 className="warehouses__mobile-header">Warehouse Address</h3>
            <p>{data.address}</p>
          </div>
        </div>
        <div className="warehouses__column">
          <div className="warehouses__content warehouses__content--short">
            <h3 className="warehouses__mobile-header">Contact Name</h3>
            <p>{data.contact.name}</p>
            <p>{data.contact.position}</p>
          </div>
          <div className="warehouses__content warehouses__content--long">
            <h3 className="warehouses__mobile-header">Contact Information</h3>
            <p>{data.contact.phone}</p>
            <p>{data.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

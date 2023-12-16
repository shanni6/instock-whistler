import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit-24px.svg";
import back from "../../assets/icons/arrow_back-24px.svg";

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
    <div className="warehouses">
      <section className="warehouses__header">
        <div className="warehouses__header-container">
          <div className="warehouses__header-subcontainer">
            <Link to={``}>
              <img src={back} alt="back icon" className="warehouses__icons" />
            </Link>
            <h2 className="warehouses__header-text">{data.name}</h2>
          </div>

          <Link to={``} className="warehouses__header-bg">
            <img
              src={edit}
              alt="edit icon"
              className="warehouses__header__icons--edit"
            />
            <span className="warehouses__header-edit-text">Edit</span>
          </Link>
        </div>
      </section>
      <section className="warehouses__info">
        <div className="warehouses__info-address">
          <h4 className="warehouses__info-subheaders">WAREHOUSE ADDRESS:</h4>
          <p className="warehouses__info-text">
            {data.address}, {data.city}, {data.country}
          </p>
        </div>
        <div className="warehouses__info-contact">
          <div className="warehouses__info-col--left">
            <h4 className="warehouses__info-subheaders">CONTACT NAME:</h4>
            <p className="warehouses__info-text">
              {data.contact && data.contact.name}
            </p>
            <p className="warehouses__info-text">
              {data.contact && data.contact.position}
            </p>
          </div>
          <div className="warehouses__info-col--right">
            <h4 className="warehouses__info-subheaders">
              CONTACT INFORMATION:
            </h4>
            <p className="warehouses__info-text">
              {data.contact && data.contact.phone}
            </p>
            <p className="warehouses__info-text">
              {data.contact && data.contact.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

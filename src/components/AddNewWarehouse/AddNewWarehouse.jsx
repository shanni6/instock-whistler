import "./AddNewWarehouse.scss";

import { Link } from "react-router-dom";
import arrowBackIcon from "./../../assets/icons/arrow_back-24px.svg";

function AddNewWarehouse() {
  const getFormFields = (fields) => {
    return fields.map((field) => (
      <div className="add-new-warehouse-form__field" key={field.inputId}>
        <label
          className="add-new-warehouse-form__label"
          htmlFor={field.inputId}
        >
          {field.labelText}
        </label>
        <input
          className="add-new-warehouse-form__input"
          id={field.inputId}
          placeholder={field.labelText}
          type={field.inputType}
        />
      </div>
    ));
  };

  const warehouseDetails = [
    {
      inputId: "warehouse-name",
      inputType: "text",
      labelText: "Warehouse Name",
    },
    {
      inputId: "street-address",
      inputType: "text",
      labelText: "Sreet Address",
    },
    {
      inputId: "city",
      inputType: "text",
      labelText: "City",
    },
    {
      inputId: "country",
      inputType: "text",
      labelText: "Country",
    },
  ];

  const contactDetails = [
    {
      inputId: "contact-name",
      inputType: "text",
      labelText: "Contact Name",
    },
    {
      inputId: "position",
      inputType: "text",
      labelText: "Position",
    },
    {
      inputId: "phone",
      inputType: "tel",
      labelText: "Phone",
    },
    {
      inputId: "email",
      inputType: "email",
      labelText: "Email",
    },
  ];

  return (
    <section className="add-new-warehouse">
      <h1 className="add-new-warehouse__page-header">
        <Link className="add-new-warehouse__page-header-icon">
          <img src={arrowBackIcon} />
        </Link>
        Add New Warehouse
      </h1>

      <form className="add-new-warehouse-form">
        <div className="add-new-warehouse-form__section add-new-warehouse-form__section--warehouse-details">
          <h2 className="add-new-warehouse-form__header">Warehouse Details</h2>

          {getFormFields(warehouseDetails)}
        </div>

        <div className="add-new-warehouse-form__section add-new-warehouse-form__section--contact-details">
          <h2 className="add-new-warehouse-form__header">Contact Details</h2>

          {getFormFields(contactDetails)}
        </div>

        <div className="add-new-warehouse-form__section add-new-warehouse-form__section--buttons">
          <input
            className="add-new-warehouse-form__button add-new-warehouse-form__button--secondary"
            type="button"
            value="Cancel"
          />
          <input
            className="add-new-warehouse-form__button add-new-warehouse-form__button--primary"
            type="submit"
            value="+ Add Warehouse"
          />
        </div>
      </form>
    </section>
  );
}

export default AddNewWarehouse;

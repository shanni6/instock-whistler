import "./AddNewWarehouse.scss";

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
        <input id={field.inputId} type={field.inputType} />
      </div>
    ));
  };

  const warehouseDetails = [
    {
      inputId: "warehouse-details",
      inputType: "text",
      labelText: "Warehouse Details",
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
      <h1 className="add-new-warehouse__page-header">Add New Warehouse</h1>

      <form className="add-new-warehouse-form">
        <div className="add-new-warehouse-form__section">
          <h2 className="add-new-warehouse-form__header">Warehouse Details</h2>

          {getFormFields(warehouseDetails)}
        </div>

        <div className="add-new-warehouse-form__section">
          <h2 className="add-new-warehouse-form__header">Contact Details</h2>

          {getFormFields(contactDetails)}
        </div>

        <div className="add-new-warehouse-form__section">
          <input type="button" value="Cancel" />
          <input type="submit" value="Add Warehouse" />
        </div>
      </form>
    </section>
  );
}

export default AddNewWarehouse;

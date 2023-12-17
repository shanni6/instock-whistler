import "./EditInventory.scss";

import validator from "validator";

import { Link } from "react-router-dom";
import arrowBackIcon from "./../../assets/icons/arrow_back-24px.svg";

function EditInventory() {
    const getFormFields = (fields) => {
        return fields.map((field) => (
            <div className="edit-inventory-form__field" key={field.inputId}>
                <label
                    className="edit-inventory-form__label"
                    htmlFor={field.inputId}
                >
                    {field.labelText}
                </label>
                <input
                    className="edit-inventory-form__input edit-inventory-form__input"
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

    const handleEditInventory = (e) => {
        e.preventDefault();

        let isValidForm = true;

        for (const element of e.target.elements) {
            if (!element.value) {
                element.classList.add("edit-inventory-form__input--error");
                isValidForm = false;
            } else {
                element.classList.remove("edit-inventory-form__input--error");
            }

            if (element.type === "email") {
                if (!validator.isEmail(element.value)) {
                    element.classList.add("edit-inventory-form__input--error");
                    isValidForm = false;
                } else {
                    element.classList.remove(
                        "edit-inventory-form__input--error"
                    );
                }
            }

            if (element.type === "tel") {
                if (!validator.isMobilePhone(element.value)) {
                    element.classList.add("edit-inventory-form__input--error");
                    isValidForm = false;
                } else {
                    element.classList.remove(
                        "edit-inventory-form__input--error"
                    );
                }
            }

            if (isValidForm) {
                // Submit Form
            }
        }
    };

    return (
        <section className="edit-inventory">
            <h1 className="edit-inventory__page-header">
                <Link className="edit-inventory__page-header-icon">
                    <img src={arrowBackIcon} />
                </Link>
                Edit Inventory Item
            </h1>

            <form
                className="edit-inventory-form"
                onSubmit={handleEditInventory}
            >
                <div className="edit-inventory-form__section edit-inventory-form__section--warehouse-details">
                    <h2 className="edit-inventory-form__header">
                        Item Details
                    </h2>

                    {getFormFields(warehouseDetails)}
                </div>

                <div className="edit-inventory-form__section edit-inventory-form__section--contact-details">
                    <h2 className="edit-inventory-form__header">
                        Item Availability
                    </h2>

                    {getFormFields(contactDetails)}
                </div>

                <div className="edit-inventory-form__section edit-inventory-form__section--buttons">
                    <input
                        className="edit-inventory-form__button edit-inventory-form__button--secondary"
                        type="button"
                        value="Cancel"
                    />
                    <input
                        className="edit-inventory-form__button edit-inventory-form__button--primary"
                        type="submit"
                        value="Save"
                    />
                </div>
            </form>
        </section>
    );
}

export default EditInventory;

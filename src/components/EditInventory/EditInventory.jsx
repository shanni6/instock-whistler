import "./EditInventory.scss";

import validator from "validator";

import { Link } from "react-router-dom";
import arrowBackIcon from "./../../assets/icons/arrow_back-24px.svg";

function EditInventory() {
    const getFormField = (field) => {
        if (field.elementType === "input" && field.inputType === "text") {
            return (
                <input
                    className="edit-inventory-form__input"
                    id={field.inputId}
                    placeholder={field.labelText}
                    type={field.inputType}
                />
            );
        } else if (
            field.elementType === "input" &&
            field.inputType === "radio"
        ) {
            return (
                <div className="edit-inventory-form__radio-container">
                    {field.options.map((option) => {
                        return (
                            <div className="edit-inventory-form__radio" key="">
                                <input
                                    id={option.optionId}
                                    name={field.inputId}
                                    type="radio"
                                />
                                <label htmlFor={option.inputId}>
                                    {option.labelText}
                                </label>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (field.elementType === "select") {
            return (
                <select
                    className="edit-inventory-form__select"
                    id={field.inputId}
                    type={field.inputType}
                >
                    {field.options.map((option) => (
                        <option key="" value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
        } else if (field.elementType === "textarea") {
            return (
                <textarea
                    className="edit-inventory-form__textarea"
                    id={field.inputId}
                    placeholder={field.labelText}
                    type={field.inputType}
                ></textarea>
            );
        }
    };

    const getFormFields = (fields) => {
        return fields.map((field) => (
            <div className="edit-inventory-form__field" key={field.inputId}>
                <label
                    className="edit-inventory-form__label"
                    htmlFor={field.inputId}
                >
                    {field.labelText}
                </label>
                {getFormField(field)}
            </div>
        ));
    };

    const itemDetails = [
        {
            elementType: "input",
            inputId: "item-name",
            inputType: "text",
            labelText: "Item Name",
        },
        {
            elementType: "textarea",
            inputId: "description",
            labelText: "Description",
        },
        {
            elementType: "select",
            inputId: "category",
            labelText: "Category",
            options: ["Electronics"],
        },
    ];

    const itemAvailability = [
        {
            elementType: "input",
            inputId: "status",
            inputType: "radio",
            labelText: "Status",
            options: [
                { inputId: "in-stock", labelText: "In stock" },
                { inputId: "out-of-stock", labelText: "Out of stock" },
            ],
        },
        {
            elementType: "select",
            inputId: "warehouse",
            labelText: "Warehouse",
            options: ["Manhattan"],
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

                    {getFormFields(itemDetails)}
                </div>

                <div className="edit-inventory-form__section edit-inventory-form__section--contact-details">
                    <h2 className="edit-inventory-form__header">
                        Item Availability
                    </h2>

                    {getFormFields(itemAvailability)}
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

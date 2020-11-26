import React from 'react';
import './InventoryForm.scss'
import axios from 'axios';

import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";

class InventoryForm extends React.Component {
    state = {
        itemName: this.props.name || "",
        itemDescription: this.props.description || "",
        itemCategory: this.props.category || "",
        itemStatus: this.props.status || "In Stock",
        itemQuantity: this.props.quantity || "0",
        itemWarehouse: this.props.warehouse || "",
        // should validation error message for a given field be rendered or not
        itemNameError: false,
        itemDescriptionError: false,
        itemCategoryError: false,
        itemQuantityError: false,
        itemWarehouseError: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.name === "itemName") {
            this.setState({
                itemNameError: false
            });
        }
        if (e.target.name === "itemDescription") {
            this.setState({
                itemDescriptionError: false
            });
        }
        if (e.target.name === "itemCategory") {
            this.setState({
                itemCategoryError: false
            });
        }
        if (e.target.name === "itemQuantity") {
            this.setState({
                itemQuantityError: false
            });
        }
        if (e.target.name === "itemWarehouse") {
            this.setState({
                itemWarehouseError: false
            });
        }

    }

    handleOptionChange = (e) => {
        this.setState({
            itemStatus: e.target.value
        });
    }

    // includes checking for only spaces
    checkForEmpty = (input) => {
        let trimmedInput = input.trim();
        return !!trimmedInput;
    }

    validateAll = () => {
        const { itemName, itemDescription, itemCategory, itemStatus, itemQuantity, itemWarehouse } = this.state;

        const isValid = {
            name: true,
            description: true,
            category: true,
            quantity: true,
            warehouse: true
        };

        if (!this.checkForEmpty(itemName)) {
            // console.log("name is empty");
            isValid.name = false;
            this.setState({
                itemNameError: true
            });
        }

        if (!this.checkForEmpty(itemDescription)) {
            // console.log("description is empty");
            isValid.description = false;
            this.setState({
                itemDescriptionError: true
            });
        }

        if (!this.checkForEmpty(itemCategory)) {
            // console.log("category is empty");
            isValid.category = false;
            this.setState({
                itemCategoryError: true
            });
        }

        if (itemStatus === "In Stock" && itemQuantity === "0") {
            // console.log("if in stock add quantity");
            isValid.quantity = false;
            this.setState({
                itemQuantityError: true
            });
        }

        if (!this.checkForEmpty(itemWarehouse)) {
            // console.log("warehouse empty");
            isValid.warehouse = false;
            this.setState({
                itemWarehouseError: true
            });
        }

        if (isValid.name && isValid.description && isValid.category && isValid.quantity && isValid.warehouse) {
            return true;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { itemName, itemDescription, itemCategory, itemStatus, itemQuantity, itemWarehouse } = this.state;

        if (this.validateAll()) {
            const newItem = {
                warehouseID: "", // I think this can be found and set in the back end
                warehouseName: itemWarehouse,
                itemName: itemName,
                description: itemDescription,
                category: itemCategory,
                status: itemStatus,
                quantity: itemQuantity
            }
            console.log(newItem);
            // put this inside axios request later
            this.handleReset();
            // axios.post()
            //     .then((response) => {
            //         this.handleReset();
            //     })
            //     .catch((error) => console.log(error))

        }
    }

    handleReset = () => {
        this.setState({
            itemName: "",
            itemDescription: "",
            itemCategory: "",
            itemStatus: "In Stock",
            itemQuantity: "0",
            itemWarehouse: "",
            itemNameError: false,
            itemDescriptionError: false,
            itemCategoryError: false,
            itemQuantityError: false,
            itemWarehouseError: false
        });
    }

    renderSelectFieldOptions = (optionsArr) => {
        optionsArr = optionsArr || ["test1", "test2"];
        return optionsArr.map((option, i) => {
            return <option key={i} value={option}>{option}</option>
        });
    }

    renderQuantity = () => {
        const itemQuantityInputClass = this.state.itemQuantityError ? "inventory-form__num-input inventory-form__num-input--error" : "inventory-form__num-input";

        return (
            <>
                <label 
                    className="inventory-form__label"  
                    htmlFor="itemQuantity">
                        Quantity
                </label>
                <input 
                    className={itemQuantityInputClass}
                    onChange={this.handleChange}
                    value={this.state.itemQuantity}
                    name="itemQuantity" 
                    id="itemQuantity" 
                    type="number"
                    placeholder="0"
                />
            </>
        );
    }

    renderErrorMessage = () => {
        return (
            <>
                <img className="inventory-form__error-icon" src={errorIcon} alt="error message icon" />
                <span className="inventory-form__error-text" >This field is required</span>
            </>
        );
    }

    render() {

        const itemNameInputClass = this.state.itemNameError ? "inventory-form__text-input inventory-form__text-input--error" : "inventory-form__text-input";

        const itemDescriptionInputClass = this.state.itemDescriptionError ? "inventory-form__textarea inventory-form__textarea--error" : "inventory-form__textarea";

        const itemCategoryInputClass = this.state.itemCategoryError ? "inventory-form__select inventory-form__select--error" : "inventory-form__select";

        const inStockRadioLabelClass = this.state.itemStatus === "In Stock" ? "inventory-form__radio-label inventory-form__radio-label--checked" : "inventory-form__radio-label";

        const outOfStockRadioLabelClass = this.state.itemStatus === "Out of Stock" ? "inventory-form__radio-label inventory-form__radio-label--checked" : "inventory-form__radio-label";

        const itemWarehouseInputClass = this.state.itemWarehouseError ? "inventory-form__select inventory-form__select--error" : "inventory-form__select";

        return (
            <div className="inventory-form">
                {/* HEADING STARTS */}
                <div className="inventory-form__heading">
                    <img className="inventory-form__heading-icon" src={backArrow} alt="Go back arrow" />
                    <h1 className="inventory-form__heading-text">Add New Inventory Item</h1>
                </div>
                {/* FORM STARTS */}
                <form 
                    className="inventory-form__form" 
                    onSubmit={this.handleSubmit} 
                    onReset={this.handleReset}>
                        {/* ITEM DETAILS SECTION */}
                        <fieldset className="inventory-form__fieldset">
                            <legend className="inventory-form__legend inventory-form__legend--stretch">Item Details</legend>
                            <label 
                                className="inventory-form__label" 
                                htmlFor="itemName">
                                    Item Name
                            </label>
                            <input 
                                className={itemNameInputClass}
                                onChange={this.handleChange}
                                value={this.state.itemName}
                                name="itemName" 
                                id="itemName" 
                                type="text"
                                placeholder="Item Name"
                            />
                            <div className="inventory-form__error">
                                {this.state.itemNameError && this.renderErrorMessage()}
                            </div>
                            <label 
                                className="inventory-form__label" 
                                htmlFor="itemDescription">
                                    Description
                            </label>
                            <textarea
                                className={itemDescriptionInputClass}
                                onChange={this.handleChange}
                                value={this.state.itemDescription}
                                name="itemDescription" 
                                id="itemDescription" 
                                placeholder="Please enter a brief item description..."
                            />
                            <div className="inventory-form__error">
                                {this.state.itemDescriptionError && this.renderErrorMessage()}
                            </div>
                            <label 
                                className="inventory-form__label" 
                                htmlFor="itemCategory">
                                    Category
                            </label>
                            <select 
                                className={itemCategoryInputClass}
                                onChange={this.handleChange}
                                value={this.state.itemCategory}
                                name="itemCategory" 
                                id="itemCategory">
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.categories)}
                            </select>
                            <div className="inventory-form__error">
                                {this.state.itemCategoryError && this.renderErrorMessage()}
                            </div>
                        </fieldset>
                        {/* ITEM AVAILABILITY SECTION */}
                        <fieldset className="inventory-form__fieldset">
                            <legend className="inventory-form__legend">Item Availability</legend>
                            <fieldset className="inventory-form__radio">
                                <legend 
                                    className="inventory-form__label inventory-form__label--radio">
                                        Status
                                </legend>
                                <div className="inventory-form__radio-group">
                                    <input
                                        className="inventory-form__radio-input"
                                        onChange={this.handleOptionChange}
                                        value="In Stock"
                                        checked={this.state.itemStatus === "In Stock"}
                                        name="itemStatus"
                                        id="itemStatus"
                                        type="radio" />
                                    <label
                                        className={inStockRadioLabelClass}
                                        htmlFor="itemStatus">
                                            In stock
                                    </label>
                                </div>
                                <div className="inventory-form__radio-group">
                                    <input 
                                        className="inventory-form__radio-input" 
                                        onChange={this.handleOptionChange}
                                        value="Out of Stock"
                                        checked={this.state.itemStatus === "Out of Stock"}
                                        name="itemStatus" 
                                        id="itemStatus" 
                                        type="radio" />
                                    <label 
                                        className={outOfStockRadioLabelClass}
                                        htmlFor="itemStatus">
                                            Out of stock
                                    </label>
                                </div>
                            </fieldset>
                            {/* Only render Quantity Field if Status is "In Stock" */}
                            {this.state.itemStatus === "In Stock" && this.renderQuantity()}
                            <div className="inventory-form__error">
                                {this.state.itemQuantityError && this.renderErrorMessage()}
                            </div>
                            <label  
                                className="inventory-form__label" 
                                htmlFor="itemWarehouse">
                                    Warehouse
                            </label>
                            <select 
                                className={itemWarehouseInputClass}
                                onChange={this.handleChange}
                                value={this.state.itemWarehouse}
                                name="itemWarehouse" 
                                id="itemWarehouse"
                                >
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.warehouses)}
                            </select>
                            <div className="inventory-form__error">
                                {this.state.itemWarehouseError && this.renderErrorMessage()}
                            </div>
                        </fieldset>
                        {/* BUTTONS */}
                        <div className="inventory-form__button-group">
                            <button 
                                className="inventory-form__button inventory-form__button--secondary"
                                type="reset">
                                    Cancel
                            </button>
                            <button 
                                className="inventory-form__button"
                                type="submit">
                                    + Add Item
                            </button>
                        </div>
                </form>
            </div>
        );
    }
};

export default InventoryForm;
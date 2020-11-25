import React from 'react';
import './AddInventoryItem.scss'
import axios from 'axios';

import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";

class AddInventoryItem extends React.Component {
    state = {
        itemName: "",
        itemDescription: "",
        itemCategory: "",
        itemStatus: "In Stock",
        itemQuantity: "0",
        itemWarehouse: "",
        // should validation error be rendered or not
        itemNameError: true,
        itemDescriptionError: true,
        itemCategoryError: true,
        itemQuantityError: true,
        itemWarehouseError: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
        }

        if (!this.checkForEmpty(itemDescription)) {
            // console.log("description is empty");
            isValid.description = false;
        }

        if (!this.checkForEmpty(itemCategory)) {
            // console.log("category is empty");
            isValid.category = false;
        }

        if (itemStatus === "In Stock" && itemQuantity === "0") {
            // console.log("if in stock add quantity");
            isValid.quantity = false;
        }

        if (!this.checkForEmpty(itemWarehouse)) {
            // console.log("warehouse empty");
            isValid.warehouse = false;
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
            itemQuantity: 0,
            itemWarehouse: ""
        });
    }

    renderSelectFieldOptions = (optionsArr) => {
        optionsArr = optionsArr || ["test1", "test2"];
        return optionsArr.map((option, i) => {
            return <option key={i} value={option}>{option}</option>
        });
    }

    renderQuantity = () => {
        return (
            <>
                <label 
                    className="add-inventory-item__label"   
                    htmlFor="itemQuantity">
                        Quantity
                </label>
                <input 
                    className="add-inventory-item__text-input add-inventory-item__text-input--short"
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
                <img className="add-inventory-item__error-icon" src={errorIcon} alt="error message icon" />
                <span className="add-inventory-item__error-text" >This field is required</span>
            </>
        );
    }

    render() {

        return (
            <div className="add-inventory-item">
                {/* HEADING STARTS */}
                <div className="add-inventory-item__heading">
                    <img className="add-inventory-item__heading-icon" src={backArrow} alt="Go back arrow" />
                    <h1 className="add-inventory-item__heading-text">Add New Inventory Item</h1>
                </div>
                {/* FORM STARTS */}
                <form 
                    className="add-inventory-item__form" 
                    onSubmit={this.handleSubmit} 
                    onReset={this.handleReset}>
                        {/* ITEM DETAILS SECTION */}
                        <fieldset className="add-inventory-item__fieldset">
                            <legend className="add-inventory-item__legend add-inventory-item__legend--stretch">Item Details</legend>
                            <label 
                                className="add-inventory-item__label" 
                                htmlFor="itemName">
                                    Item Name
                            </label>
                            <input 
                                className="add-inventory-item__text-input" 
                                onChange={this.handleChange}
                                value={this.state.itemName}
                                name="itemName" 
                                id="itemName" 
                                type="text"
                                placeholder="Item Name"
                            />
                            <div className="add-inventory-item__error">
                                {this.state.itemNameError && this.renderErrorMessage()}
                            </div>
                            <label 
                                className="add-inventory-item__label" 
                                htmlFor="itemDescription">
                                    Description
                            </label>
                            <textarea
                                className="add-inventory-item__text-input add-inventory-item__text-input--textarea" 
                                onChange={this.handleChange}
                                value={this.state.itemDescription}
                                name="itemDescription" 
                                id="itemDescription" 
                                placeholder="Please enter a brief item description..."
                            />
                            <div className="add-inventory-item__error">
                                {this.state.itemDescriptionError && this.renderErrorMessage()}
                            </div>
                            <label 
                                className="add-inventory-item__label" 
                                htmlFor="itemCategory">
                                    Category
                            </label>
                            <select 
                                className="add-inventory-item__text-input add-inventory-item__text-input--select"
                                onChange={this.handleChange}
                                value={this.state.itemCategory}
                                name="itemCategory" 
                                id="itemCategory">
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.categories)}
                            </select>
                            <div className="add-inventory-item__error">
                                {this.state.itemCategoryError && this.renderErrorMessage()}
                            </div>
                        </fieldset>
                        {/* ITEM AVAILABILITY SECTION */}
                        <fieldset className="add-inventory-item__fieldset">
                            <legend className="add-inventory-item__legend">Item Availability</legend>
                            <fieldset className="add-inventory-item__radio">
                                <legend 
                                    className="add-inventory-item__label add-inventory-item__label--radio">
                                        Status
                                </legend>
                                <div className="add-inventory-item__radio-group">
                                    <input
                                        className="add-inventory-item__radio-input"
                                        onChange={this.handleOptionChange}
                                        value="In Stock"
                                        checked={this.state.itemStatus === "In Stock"}
                                        name="itemStatus"
                                        id="itemStatus"
                                        type="radio" />
                                    <label
                                        className={this.state.itemStatus === "In Stock" ? "add-inventory-item__radio-label add-inventory-item__radio-label--checked" : "add-inventory-item__radio-label"}
                                        htmlFor="itemStatus">
                                            In stock
                                    </label>
                                </div>
                                <div className="add-inventory-item__radio-group">
                                    <input 
                                        className="add-inventory-item__radio-input" 
                                        onChange={this.handleOptionChange}
                                        value="Out of Stock"
                                        checked={this.state.itemStatus === "Out of Stock"}
                                        name="itemStatus" 
                                        id="itemStatus" 
                                        type="radio" />
                                    <label 
                                        className={this.state.itemStatus === "Out of Stock" ? "add-inventory-item__radio-label add-inventory-item__radio-label--checked" : "add-inventory-item__radio-label"}
                                        htmlFor="itemStatus">
                                            Out of stock
                                    </label>
                                </div>
                            </fieldset>
                            {this.state.itemStatus === "In Stock" && this.renderQuantity()}
                            <div className="add-inventory-item__error">
                                {this.state.itemQuantityError && this.renderErrorMessage()}
                            </div>
                            <label  
                                className="add-inventory-item__label" 
                                htmlFor="itemWarehouse">
                                    Warehouse
                            </label>
                            <select 
                                className="add-inventory-item__text-input add-inventory-item__text-input--select"
                                onChange={this.handleChange}
                                value={this.state.itemWarehouse}
                                name="itemWarehouse" 
                                id="itemWarehouse"
                                >
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.warehouses)}
                            </select>
                            <div className="add-inventory-item__error">
                                {this.state.itemWarehouseError && this.renderErrorMessage()}
                            </div>
                        </fieldset>
                        {/* BUTTONS */}
                        <div className="add-inventory-item__button-group">
                            <button 
                                className="add-inventory-item__button add-inventory-item__button--secondary"
                                type="reset">
                                    Cancel
                            </button>
                            <button 
                                className="add-inventory-item__button"
                                type="submit">
                                    + Add Item
                            </button>
                        </div>
                </form>
            </div>
        );
    }
};

export default AddInventoryItem;
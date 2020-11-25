import React from 'react';
import './AddInventoryItem.scss'
import axios from 'axios';

import backArrow from "../../assets/icons/arrow_back-24px.svg";

class AddInventoryItem extends React.Component {
    state = {
        itemName: "",
        itemDescription: "",
        itemCategory: "",
        itemStatus: "In Stock",
        itemQuantity: "",
        itemWarehouse: ""
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

    validate = (input) => {
        let trimmedInput = input.trim();
        return !!trimmedInput;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            warehouseID: "", // I think this can be found and set in the back end
            warehouseName: this.state.itemWarehouse,
            itemName: this.state.itemName,
            description: this.state.itemDescription,
            category: this.state.itemCategory,
            status: this.state.itemStatus,
            quantity: this.state.itemQuantity
        }
        axios.post()
            .then((response) => {
                this.handleReset();
            })
            .catch((error) => console.log(error))

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
        return optionsArr.map((option) => {
            return <option value={option}>{option}</option>
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
                    className="add-inventory-item__text-input"
                    onChange={this.handleChange}
                    value={this.state.itemQuantity}
                    name="itemQuantity" 
                    id="itemQuantity" 
                    type="number"
                    placeholder="0"
                    required/>
            </>
        );
    }

    render() {
        const selectCategoryClass = this.state.itemCategory !== "" ? "add-inventory-item__text-input add-inventory-item__text-input--select-checked" : "add-inventory-item__text-input add-inventory-item__text-input--select";

        const selectWarehouseClass = this.state.itemWarehouse !== "" ? "add-inventory-item__text-input add-inventory-item__text-input--select-checked" : "add-inventory-item__text-input add-inventory-item__text-input--select";

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
                                required/>
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
                                required/>
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
                                id="itemCategory"
                                required>
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.categories)}
                            </select>
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
                                required>
                                    <option value="">Please select</option>
                                    {this.renderSelectFieldOptions(this.props.warehouses)}
                            </select>
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
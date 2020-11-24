import React from 'react';
import './AddInventoryItem.scss'

import backArrow from "../../assets/icons/arrow-back-24px.svg";

class AddInventoryItem extends React.Component {
    render() {
        return (
            <div className="add-inventory-item">
                {/* HEADING STARTS */}
                <div className="add-inventory-item__heading">
                    <img className="add-inventory-item__heading-icon" src={backArrow} alt="Go back arrow" />
                    <h1 className="add-inventory-item__heading-text">Add New Inventory Item</h1>
                </div>
                {/* FORM STARTS */}
                <form className="add-inventory-item__form">
                    {/* ITEM DETAILS SECTION */}
                    <fieldset className="add-inventory-item__fieldset">
                        <legend className="add-inventory-item__legend">Item Details</legend>
                        <label 
                            className="add-inventory-item__label" 
                            for="itemName">
                                Item Name
                        </label>
                        <input 
                            className="add-inventory-item__text-input" 
                            name="itemName" id="itemName" 
                            type="text"
                            placeholder="Item Name"
                            required/>
                        <label 
                            className="add-inventory-item__label" 
                            for="itemDescription">
                                Description
                        </label>
                        <textarea
                            className="add-inventory-item__text-input add-inventory-item__text-input--textarea" 
                            name="itemDescription" 
                            id="itemDescription" 
                            placeholder="Please enter a brief item description..."
                            required/>
                        <label 
                            className="add-inventory-item__label" 
                            for="itemCategory">
                                Category
                        </label>
                        <select 
                            className="add-inventory-item__text-input add-inventory-item__text-input--select" 
                            name="itemCategory" 
                            id="itemCategory"
                            required>
                                <option value="">Please select</option>
                                <option value="test1">test1</option>
                                <option value="test2">test2</option>
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
                                    name="itemStatus"
                                    id="itemStatus"
                                    type="radio" 
                                    checked />
                                <label
                                    className="add-inventory-item__radio-label"
                                    for="itemStatus">
                                        In stock
                                </label>
                            </div>
                            <div className="add-inventory-item__radio-group">
                                <input 
                                    className="add-inventory-item__radio-input" 
                                    name="itemStatus" 
                                    id="itemStatus" 
                                    type="radio" />
                                <label 
                                    className="add-inventory-item__radio-label" 
                                    for="itemStatus">
                                        Out of stock
                                </label>
                            </div>
                        </fieldset>
                        <label 
                            className="add-inventory-item__label"   
                            for="itemQuantity">
                                Quantity
                        </label>
                        <input 
                            className="add-inventory-item__text-input"
                            name="itemQuantity" 
                            id="itemQuantity" 
                            type="number"
                            placeholder="0"
                            required/>
                        <label  className="add-inventory-item__label" for="itemWarehouse">Warehouse</label>
                        <select 
                            className="add-inventory-item__text-input add-inventory-item__text-input--select"
                            name="itemWarehouse" 
                            id="itemWarehouse"
                            required>
                                <option value="">Please select</option>
                                <option value="test1">test1</option>
                                <option value="test2">test2</option>
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
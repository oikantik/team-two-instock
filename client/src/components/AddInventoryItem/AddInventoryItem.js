import React from 'react';
import './AddInventoryItem.scss'

import backArrow from "../../assets/icons/arrow-back-24px.svg";

const AddInventoryItem = () => {
    return (
        <div className="add-inventory-item">
            <div className="add-inventory-item__heading">
                <img className="add-inventory-item__heading-icon" src={backArrow} alt="Go back arrow" />
                <h1 className="add-inventory-item__heading-text">Add New Inventory Item</h1>
            </div>
            <form className="add-inventory-item__form">
                <fieldset className="add-inventory-item__fieldset">
                    <legend className="add-inventory-item__legend">Item Details</legend>
                    <label for="itemName">Item Name</label>
                    <input name="itemName" id="itemName" type="text"/>
                    <label for="itemDescription">Description</label>
                    <input name="itemDescription" id="itemDescription" type="text"/>
                    <label for="itemCategory">Category</label>
                    <select name="itemCategory" id="itemCategory">
                        <option value="">Please select</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                    </select>
                </fieldset>
                <fieldset className="add-inventory-item__fieldset">
                    <legend className="add-inventory-item__legend">Item Availability</legend>
                    <fieldset className="add-inventory-item__radio">
                        <legend className="add-inventory-item__radio-legend">Status</legend>
                        <input name="itemStatus" id="itemStatus" type="radio" />
                        <label for="itemStatus">In stock</label>
                        <input name="itemStatus" id="itemStatus" type="radio" />
                        <label for="itemStatus">Out of status</label>
                    </fieldset>
                    <label for="itemQuantity">Quantity</label>
                    <input name="itemQuantity" id="itemQuantity" type="text"/>
                    <label for="itemWarehouse">Warehouse</label>
                    <select name="itemWarehouse" id="itemWarehouse">
                        <option value="">Please select</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                    </select>
                </fieldset>
                <div>
                    <button type="reset">Cancel</button>
                    <button type="submit">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddInventoryItem;
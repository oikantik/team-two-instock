import React, { Component } from 'react';
import 'WarehouseForm.scss';



class WarehouseForm extends Component {
  
  
  render() {
    return (
      <div className="add-warehouse">
        <div className="add-warehouse__header">
          <div className="add-warehouse__div-title">
            <img className="add-warehouse__arrow-icon"></img>
            <h1 className="add-warehouse__title">Add New Warehouse</h1>
          </div>
        </div>
        <div className="add-warehouse__main">
          <div className="add-warehouse__warehouse-details">
            <h2 className="add-warehouse__warehouse-details-title">Warehouse Details</h2>
            <label className="add-wareouse__warehouse-name-label" htmlFor="warehouseNameInput"></label>
            <input className="add-wareouse__warehouse-name-input" id="warehouseNameInput"type="text"/>
            <label className="add-wareouse__warehouse-address-label" htmlFor="addressInput"></label>
            <input className="add-wareouse__warehouse-address-input" id="addressInput" type="text"/>
            <label className="add-wareouse__warehouse-city-label" htmlFor="cityInput"></label>
            <input className="add-wareouse__warehouse-city-input" id="cityInput" type="text"/>
            <label className="add-wareouse__warehouse-country-label" htmlFor="countryInput"></label>
            <input className="add-wareouse__warehouse-country-input" id="countryInput" type="text"/>
          </div>
          <div className="add-warehouse__contact-details">
            <h2 className="add-warehouse__contact-details-title">Contact Details</h2>
            <label className="add-warehouse__contact-name-label" htmlFor="contactNameInput"></label>
            <input className="add-warehouse__contact-name-input" id="contactNameInput" type="text"/>
            <label className="add-warehouse__contact-position-label" htmlFor="positionInput"></label>
            <input className="add-warehouse__contact-position-input" id="positionInput" type="text"/>
            <label className="add-warehouse__contact-phone-label" htmlFor="phoneInput"></label>            
            <input className="add-warehouse__contact-phone-input" id="phoneInput" type="text"/>
            <label className="add-warehouse__contact-email-label" htmlFor="emailInput"></label>
            <input className="add-warehouse__contact-email-input" id="emailInput" type="text"/>
          </div>
        </div>
        <div className="add-warehouse__footer">

        </div>
        
      </div>
    );
  }
}

export default WarehouseForm;
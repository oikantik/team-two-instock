import React, { Component } from 'react';
import './WarehouseForm.scss';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';




class WarehouseForm extends Component {
  
  state = {

  }
  
  render() {
    return (
      <div className="add-warehouse">
        <div className="add-warehouse__header">
          <div className="add-warehouse__div-title">
            <Link to={"/warehouse"} className="add-warehouse__header-link">
              <img src={arrowBackIcon} className="add-warehouse__arrow-icon" alt="Back Arrow Icon"></img>
            </Link>
            <h1 className="add-warehouse__title">Add New Warehouse</h1>
          </div>
        </div>
        <div className="add-warehouse__border"></div>
        <form className="add-warehouse__main">
          <div className="add-warehouse__sub-main">
            <div className="add-warehouse__sub-main-div1">
              <div className="add-warehouse__warehouse-details">
                <h2 className="add-warehouse__warehouse-details-title">Warehouse Details</h2>
                <div className="add-warehouse__warehouse-name-div">
                  <label className="add-warehouse__warehouse-name-label" htmlFor="warehouseNameInput">Warehouse Name</label>
                  <input className="add-warehouse__warehouse-name-input" placeholder="Warehouse Name" id="warehouseNameInput"type="text"/>
                </div>
                <div className="add-warehouse__warehouse-address-div">
                  <label className="add-warehouse__warehouse-address-label" htmlFor="addressInput">Street Address</label>
                  <input className="add-warehouse__warehouse-address-input" placeholder="Street Address" id="addressInput" type="text"/>
                </div>
                <div className="add-warehouse__warehouse-city-div">
                  <label className="add-warehouse__warehouse-city-label" htmlFor="cityInput">City</label>
                  <input className="add-warehouse__warehouse-city-input" placeholder="City" id="cityInput" type="text"/>
                </div>
                <div className="add-warehouse__warehouse-country-div">
                  <label className="add-warehouse__warehouse-country-label" htmlFor="countryInput">Country</label>
                  <input className="add-warehouse__warehouse-country-input" placeholder="Country" id="countryInput" type="text"/>
                </div>
              </div>
            </div>
            <div className="add-warehouse__borderTwo"></div>
            <div className="add-warehouse__sub-main-div2">
              <div className="add-warehouse__contact-details">
                <h2 className="add-warehouse__contact-details-title">Contact Details</h2>
                <div className="add-warehouse__contact-name-div">
                  <label className="add-warehouse__contact-name-label" htmlFor="contactNameInput">Contact Name</label>
                  <input className="add-warehouse__contact-name-input" placeholder="Contact Name" id="contactNameInput" type="text"/>
                </div>
                <div className="add-warehouse__contact-position-div">
                  <label className="add-warehouse__contact-position-label" htmlFor="positionInput">Position</label>
                  <input className="add-warehouse__contact-position-input" placeholder="Position" id="positionInput" type="text"/>
                </div>
                <div className="add-warehouse__contact-phone-div">
                  <label className="add-warehouse__contact-phone-label" htmlFor="phoneInput">Phone Number</label>            
                  <input className="add-warehouse__contact-phone-input" placeholder="Phone Number" id="phoneInput" type="text"/>
                </div>
                <div className="add-warehouse__contact-email-div">
                  <label className="add-warehouse__contact-email-label" htmlFor="emailInput">Email</label>
                  <input className="add-warehouse__contact-email-input" placeholder="Email" id="emailInput" type="text"/>
                </div>
              </div>
            </div>
          </div>
        
      
          <div className="add-warehouse__footer">
            <div class="add-warehouse__footer-container">
              <button className="add-warehouse__cancel-button">Cancel</button>
              <button className="add-warehouse__add-warehouse-button">+ Add Warehouse</button>
            </div>
          </div>
        
        </form>
      </div>
    );
  }
}

export default WarehouseForm;
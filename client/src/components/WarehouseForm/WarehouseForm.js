import React, { Component } from 'react';
import './WarehouseForm.scss';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import RequireInput from '../RequireInput/RequireInput';
import { axiosInstance } from "../../utils/axios";

class WarehouseForm extends Component {
  
  state = {
    warehouseName: "",
    warehouseAddress: "",
    warehouseCity: "",
    warehouseCountry: "",
    contactName: "",
    contactPosition: "",
    contactPhone: "",
    contactEmail: "",
    // should validation error message for a given field be rendered or not
    warehouseNameError: false,
    warehouseAddressError: false,
    warehouseCityError: false,
    warehouseCountryError: false,
    contactNameError: false,
    contactPositionError: false,
    contactPhoneError: false,
    contactEmailError: false,
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone = (phone) => {
    const parsedPhone = phone.replace(/\D/g, "");
    return parsedPhone.length === 11;
  }

  componentDidMount(){
    this.baseState = this.state;
  }

  componentDidUpdate(prevProps, prevState) {
      if ((this.props.warehouseObj && this.props.warehouseObj.id) !== (prevProps.warehouseObj && prevProps.warehouseObj.id)) {
        this.setState({
          warehouseName: this.props.warehouseObj.name,
          warehouseAddress: this.props.warehouseObj.address,
          warehouseCity: this.props.warehouseObj.city,
          warehouseCountry: this.props.warehouseObj.country,
          contactName: this.props.warehouseObj.contact.name,
          contactPosition: this.props.warehouseObj.contact.position,
          contactPhone: this.props.warehouseObj.contact.phone,
          contactEmail: this.props.warehouseObj.contact.email,
        })
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    if (event.target.name === "warehouseName") {
      this.setState({
        warehouseNameError: false
      });
    }
    if (event.target.name === "warehouseAddress") {
        this.setState({
            warehouseAddressError: false
        });
    }
    if (event.target.name === "warehouseCity") {
        this.setState({
          warehouseCityError: false
        });
    }
    if (event.target.name === "warehouseCountry") {
        this.setState({
          warehouseCountryError: false
        });
    }
    if (event.target.name === "contactName") {
        this.setState({
          contactNameError: false
        });
    }

    if (event.target.name === "contactPosition") {
      this.setState({
        contactPositionError: false
      });
    }

    if (event.target.name === "contactPhone") {
      this.setState({
        contactPhoneError: false
      });
    }

    if (event.target.name === "contactEmail") {
      this.setState({
        contactEmailError: false
      });
    }
  }

  updatePhone = (event) => {
    // custom format: +1 (123) 456-7890
    const phoneVal = event.target.value.replace(/\D/g, "").substr(0, 11);
    let formattedPhone = '';

    for (let i = 0; i < phoneVal.length; i++) {
      if (isNaN(phoneVal[i])) {
        continue;
      }
      if (i === 0) {
        formattedPhone += "+";
      }
      if (i === 1) {
        formattedPhone += " (";
      }
      if (i === 4) {
        formattedPhone += ") ";
      }
      if (i === 7) {
        formattedPhone += "-";
      }
      formattedPhone += phoneVal[i];
    }
    this.setState({
      contactPhone: formattedPhone
    });
  }

  // includes checking for only spaces
  checkForEmpty = (input) => {
    let trimmedInput = input.trim();
    return !!trimmedInput;
  }

  validateAll = () => {
    const { warehouseName, warehouseAddress, warehouseCity, warehouseCountry, contactName, contactPosition, contactPhone, contactEmail } = this.state;

    const isValid = {
        warehouseName: true,
        warehouseAddress: true,
        warehouseCity: true,
        warehouseCountry: true,
        contactName: true,
        contactEmail: true,
        contactPosition: true,
        contactPhone: true
    };

    if (!this.checkForEmpty(warehouseName)) {
        // console.log("name is empty");
        isValid.warehouseName = false;
        this.setState({
          warehouseNameError: true
        });
    }

    if (!this.checkForEmpty(warehouseAddress)) {
        // console.log("description is empty");
        isValid.warehouseAddress = false;
        this.setState({
          warehouseAddressError: true
        });
    }

    if (!this.checkForEmpty(warehouseCity)) {
        // console.log("category is empty");
        isValid.warehouseCity = false;
        this.setState({
          warehouseCityError: true
        });
    }

    if (!this.checkForEmpty(warehouseCountry)) {
      // console.log("category is empty");
      isValid.warehouseCountry = false;
      this.setState({
        warehouseCountryError: true
      });
    }

    if (!this.checkForEmpty(contactName)) {
        // console.log("warehouse empty");
        isValid.contactName = false;
        this.setState({
          contactNameError: true
        });
    }

    if (!this.checkForEmpty(contactPosition)) {
      // console.log("warehouse empty");
      isValid.contactPosition = false;
      this.setState({
        contactPositionError: true
      });
    }

    if (!this.checkForEmpty(contactPhone)) {
      // console.log("warehouse empty");
      isValid.contactPhone = false;
      this.setState({
        contactPhoneError: true
      });
    }

    if(!this.validatePhone(contactPhone)){
      isValid.contactPhone = false;
      this.setState({
        contactPhoneError: true
      });
    }

    if (!this.checkForEmpty(contactEmail)) {
      // console.log("warehouse empty");
      isValid.contactEmail = false;
      this.setState({
        contactEmailError: true
      });
    }

    if(!this.validateEmail(contactEmail)){
      isValid.contactEmail = false;
      this.setState({
        contactEmailError: true
      });
    }

    if (isValid.warehouseName && isValid.warehouseAddress && isValid.warehouseCity && isValid.warehouseCountry && isValid.contactName && isValid.contactPosition && isValid.contactPhone && isValid.contactEmail) {
      return true;
    }
  }

  createRequestObject = () => {
    const { warehouseName, warehouseAddress, warehouseCity, warehouseCountry, contactName, contactPosition, contactPhone, contactEmail } = this.state;

    const newItem = {
      warehouseName: warehouseName,
      address: warehouseAddress,
      city:warehouseCity,
      country: warehouseCountry,
      contactName: contactName,
      position: contactPosition,
      phone: contactPhone,
      email: contactEmail
    }
    return newItem;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.validateAll())
    if (this.validateAll()) {
        const newItem = this.createRequestObject();
        axiosInstance.post("/warehouses/", {
          ...newItem
        })
            .then((response) => {
              this.handleReset();
              this.goBack();
            })
            .catch((error) => console.log(error))

    }
  }

  handleReset = () => {
      this.setState({...this.baseState});
  }

  handleSave = (e) => {
    e.preventDefault();
    if (this.validateAll()) {
      const newItem = this.createRequestObject();
      axiosInstance.put("/warehouses/" + this.props.warehouseObj.id, newItem)
        .then((response) => {
            this.goBack();
        })
        .catch((error) => console.log(error))
    };
  }

  goBack = () => {
    this.props.goBack();
  }

  renderCancelAddButton = () => {
    return (
      <button type="reset" onClick={this.handleReset} className="add-warehouse__cancel-button">Cancel</button>
    );
  }

  renderCancelEditButton = () => {
    return (
        <button className="add-warehouse__cancel-button" onClick={this.goBack}>Cancel</button>
    );
  }

  render() {

    const warehouseNameErrorClass = this.state.warehouseNameError ? "add-warehouse__warehouse-name-input add-warehouse__warehouse-error" : "add-warehouse__warehouse-name-input";
    const warehouseAddressErrorClass  =  this.state.warehouseAddressError ? "add-warehouse__warehouse-address-input add-warehouse__warehouse-error" : "add-warehouse__warehouse-address-input";
    const warehouseCityErrorClass =  this.state.warehouseCityError ? "add-warehouse__warehouse-city-input add-warehouse__warehouse-error" : "add-warehouse__warehouse-city-input";
    const warehouseCountryErrorClass  =  this.state.warehouseCountryError ? "add-warehouse__warehouse-country-input add-warehouse__warehouse-error" : "add-warehouse__warehouse-country-input";
    const contactNameErrorClass  =  this.state.contactNameError ? "add-warehouse__contact-name-input add-warehouse__warehouse-error" : "add-warehouse__contact-name-input";
    const  contactPositionErrorClass =  this.state.contactPositionError ? "add-warehouse__contact-position-input add-warehouse__warehouse-error" : "add-warehouse__contact-position-input";
    const contactPhoneErrorClass =  this.state.contactPhoneError ? "add-warehouse__contact-phone-input add-warehouse__warehouse-error" : "add-warehouse__contact-phone-input";
    const contactEmailErrorClass =  this.state.contactEmailError ? "add-warehouse__contact-email-input add-warehouse__warehouse-error" : "add-warehouse__contact-email-input";

    const headerText = this.props.edit ? "Edit Warehouse" : "Add New Warehouse";
    const formSubmitHandler = this.props.edit ? this.handleSave : this.handleSubmit;
    const blueButtonTxt = this.props.edit ? "Save" : "+ Add Warehouse";

    return (
      <div className="add-warehouse">
        <div className="add-warehouse__header">
          <div className="add-warehouse__div-title">
            <Link to={"/warehouse"} className="add-warehouse__header-link">
              <img src={arrowBackIcon} className="add-warehouse__arrow-icon" alt="Back Arrow Icon"></img>
            </Link>
            <h1 className="add-warehouse__title">{headerText}</h1>
          </div>
        </div>
        <div className="add-warehouse__border"></div>
        <form className="add-warehouse__main" onSubmit={formSubmitHandler} 
                    onReset={this.handleReset}>
          <div className="add-warehouse__sub-main">
            <div className="add-warehouse__sub-main-div1">
              <div className="add-warehouse__warehouse-details">
                <h2 className="add-warehouse__warehouse-details-title">Warehouse Details</h2>
                <div className="add-warehouse__warehouse-name-div">
                  <label className="add-warehouse__warehouse-name-label" htmlFor="warehouseNameInput">Warehouse Name</label>
                  <input  onChange={this.handleChange}
                                value={this.state.warehouseName} name="warehouseName" className={warehouseNameErrorClass}placeholder="Warehouse Name" id="warehouseNameInput" type="text"/>
                 {this.state.warehouseNameError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__warehouse-address-div">
                  <label className="add-warehouse__warehouse-address-label" htmlFor="addressInput">Street Address</label>
                  <input  onChange={this.handleChange}
                                value={this.state.warehouseAddress} name="warehouseAddress"  className={warehouseAddressErrorClass} placeholder="Street Address" id="addressInput" type="text"/>
                  {this.state.warehouseAddressError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__warehouse-city-div">
                  <label className="add-warehouse__warehouse-city-label" htmlFor="cityInput">City</label>
                  <input  onChange={this.handleChange}
                                value={this.state.warehouseCity} name="warehouseCity"  className={warehouseCityErrorClass}placeholder="City" id="cityInput" type="text"/>
                  {this.state.warehouseCityError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__warehouse-country-div">
                  <label className="add-warehouse__warehouse-country-label" htmlFor="countryInput">Country</label>
                  <input  onChange={this.handleChange}
                                value={this.state.warehouseCountry} name="warehouseCountry"  className={warehouseCountryErrorClass} placeholder="Country" id="countryInput" type="text"/>
                  {this.state.warehouseCountryError &&  <RequireInput/>}
                </div>
              </div>
            </div>
            <div className="add-warehouse__borderTwo"></div>
            <div className="add-warehouse__sub-main-div2">
              <div className="add-warehouse__contact-details">
                <h2 className="add-warehouse__contact-details-title">Contact Details</h2>
                <div className="add-warehouse__contact-name-div">
                  <label className="add-warehouse__contact-name-label" htmlFor="contactNameInput">Contact Name</label>
                  <input  onChange={this.handleChange}
                                value={this.state.contactName} name="contactName"  className={contactNameErrorClass} placeholder="Contact Name" id="contactNameInput" type="text"/>
                  {this.state.contactNameError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__contact-position-div">
                  <label className="add-warehouse__contact-position-label" htmlFor="positionInput">Position</label>
                  <input  onChange={this.handleChange}
                                value={this.state.contactPosition} name="contactPosition"  className={contactPositionErrorClass} placeholder="Position" id="positionInput" type="text"/>
                  {this.state.contactPositionError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__contact-phone-div">
                  <label className="add-warehouse__contact-phone-label" htmlFor="phoneInput">Phone Number</label>            
                  <input  onChange={this.updatePhone}
                                value={this.state.contactPhone} name="contactPhone"  className={contactPhoneErrorClass} placeholder="Phone Number" id="phoneInput" type="text"/>
                  {this.state.contactPhoneError &&  <RequireInput/>}
                </div>
                <div className="add-warehouse__contact-email-div">
                  <label className="add-warehouse__contact-email-label" htmlFor="emailInput">Email</label>
                  <input  onChange={this.handleChange}
                                value={this.state.contactEmail} name="contactEmail"  className={contactEmailErrorClass} placeholder="Email" id="emailInput" type="text"/>
                  {this.state.contactEmailError &&  <RequireInput/>}
                </div>
              </div>
            </div>
          </div>
          <div className="add-warehouse__footer">
            <div className="add-warehouse__footer-container">
              {this.props.edit ? this.renderCancelEditButton() : this.renderCancelAddButton()}
              <button type="submit" className="add-warehouse__add-warehouse-button">{blueButtonTxt}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WarehouseForm;
import React from 'react';
import arrowBackIcon from '../../assets/Icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import './InventoryItem.scss';

const InventoryItem = (props) => {
  return (
    <div className="inv-item-details">
      <div className="inv-item-details__header">
        <div className="inv-item-details__title-div">
          <Link to={'/inventory'} className="inv-item-details__arrow-link">
            <img src={arrowBackIcon} alt="Arrow Icon" className="inv-item-details__arrow-icon" />
          </Link>
          <h1 className="inv-item-details__title">Television</h1>
        </div>
        {/* We can add the inventory ID through the props once we patch everything together */}
        <Link to={`/editInventory/:inventoryId`} className="inv-item-details__edit-link">
          <button className="inv-item-details__edit-button">
            <svg className="inv-item-details__edit-icon"width="24" height="24" viewBox="0 0 24 24" fill="FFFFFF" xmlns="http://www.w3.org/2000/svg">
              <path className="inv-item-details__edit-icon-path" d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>   
            </svg>
            <p className="inv-item-details__edit">Edit</p>
          </button>
        </Link>    
      </div>
      <div className="inv-item-details__border"></div>
      <div className="inv-item-details__main">
        <div className="inv-item-details__main-top">
          <p className="inv-item-details__descr-label">ITEM DESCRIPTION:</p>
          <p className="inv-item-details__descr">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
          <p className="inv-item-details__category-label">CATEGORY:</p>
          <p className="inv-item-details__category">Electronics</p>
        </div>
        <div className="inv-item-details__main-bottom">
          <div className="inv-item-details__div-row">
            <div className="inv-item-details__div-column">
              <p className="inv-item-details__status-label">STATUS:</p>
              <div className="inv-item-details__div-status">
                <p className="inv-item-details__status">IN STOCK</p>
              </div>
            </div>
            <div className="inv-item-details__div-column">
              <p className="inv-item-details__quantity-label">QUANTITY:</p>
              <p className="inv-item-details__quantity">500</p>
            </div>
          </div>
          <p className="inv-item-details__warehouse-label">WAREHOUSE:</p>
          <p className="inv-item-details__warehouse">Manhattan</p>
        </div>
      </div> 
      
    </div>
  );
};

export default InventoryItem;
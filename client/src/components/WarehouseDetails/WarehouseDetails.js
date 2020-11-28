import React, { Component } from 'react';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './WarehouseDetails.scss';



class WarehouseDetails extends Component {
  render() {
    return (
      <div className="warehouse-details">
        <div className="warehouse-details__header">
          <div className="warehouse-details__title-div">
            <Link to={'/'} className="warehouse-details__arrow-link">
              <img src={arrowBackIcon} alt="Arrow Icon" className="warehouse-details__arrow-icon" />
            </Link>
            <h1 className="warehouse-details__title">King West</h1>
          </div> 
          {/* We can add the inventory ID through the props once we patch everything together */}
          <Link to={`/warehouse/:warehouseId/edit`} className="warehouse-detailss__edit-link">
            <button className="warehouse-details__edit-button">
              <svg className="warehouse-details__edit-icon"width="24" height="24" viewBox="0 0 24 24" fill="FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path className="warehouse-details__edit-icon-path" d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>   
              </svg>
              <p className="warehouse-details__edit">Edit</p>
            </button>
          </Link>    
        </div>
        <div className="inv-item-details__border"></div>
        <div className="warehouse-details__warehouse-detail">
          
        </div>

        <div className="warehouse-details__inventory-div">
          <div className="warehouse-details__inventory-data">
            <div className="warehouse-details__flex-row">
              <div className="warehouse-details__item-category">
                <div className="warehouse-details__item-div">
                  <p className="warehouse-details__item-label">INVENTORY ITEM</p>
                  <Link to={'/inventory/:inventoryId'} className="warehouse-details__item-link">
                    <div className="warehouse-details__item">
                      <p className="warehouse-details__item-text">Television</p>
                      <img className="warehouse-details__item-chevron-right" src={chevronRight} alt="Chevron Right"></img>
                    </div>
                  </Link>
                </div>
                <div className="warehouse-details__category-div">
                  <p className="warehouse-details__category-label">CATEGORY</p>
                  <p className="warehouse-details__category">Electronics</p>
                </div>  
              </div>
              <div className="warehouse-details__status-quantity">
                <div className="warehouse-details__status-div">
                  <p className="warehouse-details__status-label">STATUS</p>
                  <div className="warehouse-details__status-container">
                    <p className="warehouse-details__status">IN STOCK</p>
                  </div>
                </div>
                <div className="warehouse-details__quantity-div">
                  <p className="warehouse-details__quantity-label">QTY</p>
                  <p className="warehouse-details__quantity">500</p>
                </div>
              </div>
            </div>
            <div className="warehouse-details__delete-edit">
              <button className="warehouse-details__button">
                <img className="warehouse-details__delete" src={deleteIcon}></img>
              </button>
              <Link to={"/inventory/:inventoryId/edit"}>
                <button className="warehouse-details__button">
                  <img className="warehouse-details__edit-two" src={editIcon}></img>
                </button>
              </Link>
            </div>

          </div>

        </div>


      </div>
    );
  }
}

export default WarehouseDetails;
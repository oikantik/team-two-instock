import React from "react";
import "./WarehousesList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRightIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

function WarehousesList() {
  return (
    <div className="warehouses-list">
      <div className="warehouses-items-labels">
        <div className="warehouses-items-labels__label warehouses-items-labels__label--warehouse">
          <p className="warehouses-items-labels__label-container">
            <span className="warehouses-items-labels__label-text">
              WAREHOUSE
            </span>
            <span className="warehouses-items-labels__label-icon">
              <img
                src={sortIcon}
                alt="sortIcon"
                className="warehouses-items-labels__label-icon-image"
              />
            </span>
          </p>
        </div>
        <div className="warehouses-items-labels__label warehouses-items-labels__label--address">
          <p className="warehouses-items-labels__label-container">
            <span className="warehouses-items-labels__label-text">ADDRESS</span>
            <span className="warehouses-items-labels__label-icon">
              <img
                src={sortIcon}
                alt="sortIcon"
                className="warehouses-items-labels__label-icon-image"
              />
            </span>
          </p>
        </div>
        <div className="warehouses-items-labels__label warehouses-items-labels__label--name">
          <p className="warehouses-items-labels__label-container">
            <span className="warehouses-items-labels__label-text">
              CONTACT NAME
            </span>
            <span className="warehouses-items-labels__label-icon">
              <img
                src={sortIcon}
                alt="sortIcon"
                className="warehouses-items-labels__label-icon-image"
              />
            </span>
          </p>
        </div>
        <div className="warehouses-items-labels__label warehouses-items-labels__label--contact">
          <p className="warehouses-items-labels__label-container">
            <span className="warehouses-items-labels__label-text">
              CONTACT INFORMATION
            </span>
            <span className="warehouses-items-labels__label-icon">
              <img
                src={sortIcon}
                alt="sortIcon"
                className="warehouses-items-labels__label-icon-image"
              />
            </span>
          </p>
        </div>
        <div className="warehouses-items-labels__label warehouses-items-labels__label--actions">
          <p className="warehouses-items-labels__label-container">
            <span className="warehouses-items-labels__label-text">ACTIONS</span>
          </p>
        </div>
      </div>
      <div className="warehouses-items">
        <div className="warehouses-items__item warehouses-items__item--warehouse">
          <p className="warehouses-items__label">WAREHOUSE</p>
          <p className="warehouses-items__value  warehouses-items__value--location">
            Manhattan{" "}
            <img
              src={chevronRightIcon}
              alt="chevron"
              className="warehouses-items__chevron-image"
            />
          </p>
        </div>

        <div className="warehouses-items__item warehouses-items__item--address">
          <p className="warehouses-items__label">ADDRESS</p>
          <p className="warehouses-items__value">503 Broadway, New York, USA</p>
        </div>

        <div className="warehouses-items__item warehouses-items__item--name">
          <p className="warehouses-items__label">CONTACT NAME</p>
          <p className="warehouses-items__value">Parmin Aujla</p>
        </div>

        <div className="warehouses-items__item warehouses-items__item--contact">
          <p className="warehouses-items__label">CONTACT INFORMATION</p>
          <p className="warehouses-items__value warehouses-items__value--contact">
            <span className="warehouses-items__value">+1 (646) 123-1234</span>
            <span className="warehouses-items__value">paujla@instock.com</span>
          </p>
        </div>

        <div className="warehouses-actions">
          <button className="warehouses-actions__delete">
            <img src={deleteIcon} alt="delete" />
          </button>
          <button className="warehouses-actions__edit">
            <img src={editIcon} alt="edit" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehousesList;

import React from "react";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousesLabels.scss";

function WarehousesLabels() {
  return (
    <div className="warehouses-items-labels">
      <div className="warehouses-items-labels__label warehouses-items-labels__label--warehouse">
        <p className="warehouses-items-labels__label-container">
          <span className="warehouses-items-labels__label-text">WAREHOUSE</span>
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
  );
}

export default WarehousesLabels;

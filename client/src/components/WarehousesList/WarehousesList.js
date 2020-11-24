import React from "react";
import "./WarehousesList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRightIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehousesList() {
  return (
    <div className="warehouses-list">
      <div className="warehouses-items">
        <div className="warehouses-items__item">
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

        <div className="warehouses-items__item">
          <p className="warehouses-items__label">CONTACT NAME</p>
          <p className="warehouses-items__value">Parmin Aujla</p>
        </div>

        <div className="warehouses-items__item">
          <p className="warehouses-items__label">ADDRESS</p>
          <p className="warehouses-items__value">503 Broadway, New York, USA</p>
        </div>

        <div className="warehouses-items__item">
          <p className="warehouses-items__label">CONTACT INFORMATION</p>
          <p className="warehouses-items__value warehouses-items__value--contact">
            <span className="warehouses-items__value">+1 (646) 123-1234</span>
            <span className="warehouses-items__value">paujla@instock.com</span>
          </p>
        </div>
      </div>

      <div className="warehouses-list__control">
        <button className="warehouses-list__delete">
          <img src={deleteIcon} alt="delete" />
        </button>
        <button className="warehouses-list__edit">
          <img src={editIcon} alt="edit" />
        </button>
      </div>
    </div>
  );
}

export default WarehousesList;

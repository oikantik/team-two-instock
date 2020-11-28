import React from "react";
import { Link } from "react-router-dom";
import "./WarehousesList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRightIcon from "../../assets/icons/chevron_right-24px.svg";
import WarehousesLabels from "../WarehousesLabels/WarehousesLabels";

function WarehousesList({ warehouses, onDelete }) {
  const handleDelete = (id, name) => onDelete(id, name);
  const showWarehouses = warehouses.map((warehouse) => {
    return (
      <div className="warehouses-items" key={warehouse.id}>
        <div className="warehouses-items__item warehouses-items__item--warehouse">
          <p className="warehouses-items__label">WAREHOUSE</p>
          <Link
            className="warehouses-items__value  warehouses-items__value--location"
            to={`/warehouse/${warehouse.id}`}
          >
            {warehouse.name}{" "}
            <img
              src={chevronRightIcon}
              alt="chevron"
              className="warehouses-items__chevron-image"
            />
          </Link>
        </div>

        <div className="warehouses-items__item warehouses-items__item--address">
          <p className="warehouses-items__label">ADDRESS</p>
          <p className="warehouses-items__value">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
        </div>

        <div className="warehouses-items__item warehouses-items__item--name">
          <p className="warehouses-items__label">CONTACT NAME</p>
          <p className="warehouses-items__value">{warehouse.contact.name}</p>
        </div>

        <div className="warehouses-items__item warehouses-items__item--contact">
          <p className="warehouses-items__label">CONTACT INFORMATION</p>
          <p className="warehouses-items__value warehouses-items__value--contact">
            <span className="warehouses-items__value">
              {warehouse.contact.phone}
            </span>
            <span className="warehouses-items__value">
              {warehouse.contact.email}
            </span>
          </p>
        </div>

        <div className="warehouses-actions">
          <button className="warehouses-actions__delete">
            <img
              src={deleteIcon}
              alt="delete"
              onClick={() => handleDelete(warehouse.id, warehouse.name)}
            />
          </button>
          <Link
            className="warehouses-actions__edit"
            to={`/warehouse/${warehouse.id}/edit`}
          >
            <img src={editIcon} alt="edit" />
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="warehouses-list">
      <WarehousesLabels />
      {showWarehouses}
    </div>
  );
}

export default WarehousesList;

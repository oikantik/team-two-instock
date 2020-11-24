import React from "react";
import "./WarehousesContainer.scss";

function WarehousesContainer() {
  return (
    <div className="warehouses-container">
      <h1 className="warehouses-container__title">Warehouses</h1>
      <form className="warehouses-search">
        <input
          type="text"
          placeholder="search"
          className="warehouses-search__input"
        />
        <button className="warehouses-search__button">Search</button>
      </form>
      <button className="warehouses-container__button">
        + Add New Warehouse
      </button>
    </div>
  );
}

export default WarehousesContainer;

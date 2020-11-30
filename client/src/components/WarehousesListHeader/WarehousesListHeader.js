import React from "react";
import "./WarehousesListHeader.scss";
import { Link } from 'react-router-dom'

function WarehousesContainer({onSearchSubmit, onSearchChange, search}) {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit(e);
  }

  const handleSearchChange = (e) => {
    onSearchChange(e);
  }
  return (
    <div className="warehouses-list-header">
      <h1 className="warehouses-list-header__title">Warehouses</h1>
      <form className="warehouses-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="warehouses-search__input"
          name="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="warehouses-search__icon" type="submit"></button>
      </form>
      <Link to="/warehouse/add" className="warehouses-list-header__link">
        + Add New Warehouse
      </Link>
    </div>
  );
}

export default WarehousesContainer;

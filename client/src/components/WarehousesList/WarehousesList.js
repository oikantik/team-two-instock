import React from "react";
import "./WarehousesList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehousesList() {
  return (
    <div>
      <p>WAREHOUSE</p>
      <p>Manhattan</p>
      <p>CONTACT NAME</p>
      <p>Parmin Aujla</p>
      <p>ADDRESS</p>
      <p>503 Broadway, New York, USA</p>
      <p>CONTACT INFORMATION</p>
      <p>+1 (646) 123-1234</p>
      <p>paujla@instock.com</p>
      <p>
        <img src={deleteIcon} alt="delete" />
      </p>
      <p>
        <img src={editIcon} alt="edit" />
      </p>
    </div>
  );
}

export default WarehousesList;

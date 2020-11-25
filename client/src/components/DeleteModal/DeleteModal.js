import React from "react";
import "./DeleteModal.scss";

function DeleteModal() {
  return (
    <div className="delete-modal">
      <h1 className="delete-modal__headline">
        DELETE {"warehousen_name"} warehouse?
      </h1>
      <p className="delete-modal__paragraph">
        Please confirm that you'd like to delete the King West from the list of
        warehouses. You won't be able to undo this action.
      </p>
      <div className="delete-modal__buttons">
        <button className="delete-modal__cancel">Cancel</button>
        <button className="delete-modal__delete">Delete</button>
      </div>
    </div>
  );
}

export default DeleteModal;

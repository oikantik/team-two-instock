import React from "react";
import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

function DeleteModal() {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <button className="delete-modal__close">
          <img
            src={closeIcon}
            alt="closeIcon"
            className="delete-modal__close-image"
          />
        </button>
        <h1 className="delete-modal__headline">
          Delete {"warehouse_name"} warehouse?
        </h1>
        <p className="delete-modal__paragraph">
          Please confirm that you'd like to delete the King West from the list
          of warehouses. You won't be able to undo this action.
        </p>
        <div className="delete-modal__buttons">
          <button className="delete-modal__button delete-modal__button--cancel">
            Cancel
          </button>
          <button className="delete-modal__button delete-modal__button--delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

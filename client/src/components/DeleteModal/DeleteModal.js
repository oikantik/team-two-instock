import React from "react";
import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

function DeleteModal({ id, name, onClose, onConfirm }) {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(id);
  };
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <button className="delete-modal__close" onClick={handleClose}>
          <img
            src={closeIcon}
            alt="closeIcon"
            className="delete-modal__close-image"
          />
        </button>
        <h1 className="delete-modal__headline">Delete {name} warehouse?</h1>
        <p className="delete-modal__paragraph">
          Please confirm that you'd like to delete the {name} from the list of
          warehouses. You won't be able to undo this action.
        </p>
        <div className="delete-modal__buttons">
          <button
            className="delete-modal__button delete-modal__button--cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="delete-modal__button delete-modal__button--delete"
            onClick={handleConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

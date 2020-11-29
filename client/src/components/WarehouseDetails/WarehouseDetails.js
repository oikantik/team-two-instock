import React from 'react';
import './WarehouseDetails.scss';

const WarehouseDetails = ({warehouse}) => {
  return (
    <div className="warehouse">
      <div className="warehouse__details">
        <div className="warehouse__address-div">
          <p className="warehouse__address-label">WAREHOUSE ADDRESS:</p>
          <p className="warehouse__address">{warehouse.address},</p>
          <p className="warehouse__city-country">{warehouse.city}, {warehouse.country}</p>
        </div>
        <div className="warehouse__contact-name-info">
          <div className="warehouse__contact-name">
            <p className="warehouse__contact-name-label">CONTACT NAME:</p>
  <p className="warehouse__contact">{warehouse.contact && warehouse.contact.name}</p>
            <p className="warehouse__position">{warehouse.contact && warehouse.contact.position}</p>
          </div>
          <div className="warehouse__contact-info">
            <p className="warehouse__contact-info-label">CONTACT INFORMATION:</p>
            <p className="warehouse__contact-info-number">{warehouse.contact && warehouse.contact.number}</p>
            <p className="warehouse__contact-info-email">{warehouse.contact && warehouse.contact.email}</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default WarehouseDetails;
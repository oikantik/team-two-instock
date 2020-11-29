import React from 'react';
import './WarehouseDetails.scss';

const WarehouseDetails = () => {
  return (
    <div className="warehouse">
      <div className="warehouse__details">
        <div className="warehouse__address-div">
          <p className="warehouse__address-label">WAREHOUSE ADDRESS:</p>
          <p className="warehouse__address">469 King Street West,</p>
          <p className="warehouse__city-country">Toronto, CAN</p>
        </div>
        <div className="warehouse__contact-name-info">
          <div className="warehouse__contact-name">
            <p className="warehouse__contact-name-label">CONTACT NAME:</p>
            <p className="warehouse__contact">Graeme Lyon</p>
            <p className="warehouse__position">Warehouse Mananger</p>
          </div>
          <div className="warehouse__contact-info">
            <p className="warehouse__contact-info-label">CONTACT INFORMATION:</p>
            <p className="warehouse__contact-info-number">+1 (647) 504 0911</p>
            <p className="warehouse__contact-info-email">glyon@instock.com</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default WarehouseDetails;
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import './WarehouseInventory.scss';


const WarehouseInventory = ({warehouse}) => {
  const inventories = warehouse.inventories && warehouse.inventories.map(item => {
    return (<div className="warehouse-details__inventory-div" key={item.id}>
    <div className="warehouse-details__inventory-data">
          <div className="warehouse-details__item-div">
            <p className="warehouse-details__item-label">INVENTORY ITEM</p>
            <Link to={'/inventory/'+ item.id} className="warehouse-details__item-link">
              <div className="warehouse-details__item">
                <p className="warehouse-details__item-text">{item.itemName}</p>
                <img className="warehouse-details__item-chevron-right" src={chevronRight} alt="Chevron Right"></img>
              </div>
            </Link>
          </div>
          <div className="warehouse-details__category-div">
            <p className="warehouse-details__category-label">CATEGORY</p>
            <p className="warehouse-details__category">{item.category}</p>
          </div>  
       
          <div className="warehouse-details__status-div">
            <p className="warehouse-details__status-label">STATUS</p>
            {item.status === "In Stock" ? <div className="warehouse-details__status-container">
              <p className="warehouse-details__status">{item.status}</p>
            </div> : <div className="warehouse-details__status-container warehouse-details__status-container--out-of-stock">
              <p className="warehouse-details__status warehouse-details__status--out-of-stock">{item.status}</p>
            </div>}
            
          </div>
          <div className="warehouse-details__quantity-div">
            <p className="warehouse-details__quantity-label">QTY</p>
            <p className="warehouse-details__quantity">{item.quantity}</p>
          </div>
      <div className="warehouse-details__delete-edit">
        <button className="warehouse-details__button">
          <img className="warehouse-details__delete" src={deleteIcon} alt="Delete Button"></img>
        </button>
        <Link to={"/inventory/"+ item.id + "/edit"}>
          <button className="warehouse-details__button">
            <img className="warehouse-details__edit-two" src={editIcon} alt="Edit Button"></img>
          </button>
        </Link>
      </div>

    </div>

  </div>)
  })
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__header">
        <div className="warehouse-details__title-div">
          <Link to={'/'} className="warehouse-details__arrow-link">
            <img src={arrowBackIcon} alt="Arrow Icon" className="warehouse-details__arrow-icon" />
          </Link>
          <h1 className="warehouse-details__title">{warehouse.name}</h1>
        </div> 
        {/* We can add the inventory ID through the props once we patch everything together */}
        <Link to={"/warehouse/"+warehouse.id+"/edit"} className="warehouse-detailss__edit-link">
          <button className="warehouse-details__edit-button">
            <svg className="warehouse-details__edit-icon"width="24" height="24" viewBox="0 0 24 24" fill="FFFFFF" xmlns="http://www.w3.org/2000/svg">
              <path className="warehouse-details__edit-icon-path" d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#FFFFFF"/>   
            </svg>
            <p className="warehouse-details__edit">Edit</p>
          </button>
        </Link>    
      </div>
      <div className="warehouse-details__border"></div>
      
      <WarehouseDetails warehouse={warehouse}/>

      <div className="warehouse-details__label-div">
        <div className="warehouse-details__label-div-margin">
          <div className="warehouse-details__inv-item-div">
            <p className="warehouse-details__inv-item-label">INVENTORY ITEM</p>
            <img className="warehouse-details__inv-item-sort" src={sortIcon} alt="Sort Icon"></img>
          </div>
          <div className="warehouse-details__categ-div">
            <p className="warehouse-details__categ-label">CATEGORY</p>
            <img className="warehouse-details__categ-sort" src={sortIcon} alt="Sort Icon"></img>
          </div>
          <div className="warehouse-details__stat-div">
            <p className="warehouse-details__stat-label">STATUS</p>
            <img className="warehouse-details__stat-sort" src={sortIcon } alt="Sort Icon"></img>
          </div>
          <div className="warehouse-details__quant-div">
            <p className="warehouse-details__quant-label">QUANTIY</p>
            <img className="warehouse-details__quant-sort" src={sortIcon} alt="Sort Icon"></img>
          </div>
          <div className="warehouse-details__actions-div">
            <p className="warehouse-details__actions-label">ACTIONS</p>
          </div>
        </div>
      </div>

      {inventories}


    </div>
  );
};

export default WarehouseInventory;
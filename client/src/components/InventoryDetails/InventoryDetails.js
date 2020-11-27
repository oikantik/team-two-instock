
import iconDelete from '../../assets/icons/delete_outline-24px.svg'
import iconEdit from '../../assets/icons/edit-24px.svg';
import iconChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';
import './InventoryDetails.scss';

const InventoryDetails = props => {

    return (
        <div className='inventory-details'>
            <div className='inventory-details__main'>
                <h3 className='inventory-list__head inventory-list__head--hidden'>INVENTORY ITEM</h3>
                <Link to={'/inventory/' + props.details.id} className='inventory-list__link'>{props.details.itemName}<img src={iconChevron} alt=''/></Link>
            </div>
            <div className='inventory-details__main'>
                <h3 className='inventory-details__head inventory-details__head--hidden'>STATUS</h3>
                <p className={props.details.status === 'In Stock' ? 'inventory-details__status inventory-list__status--is' : 'inventory-details__status inventory-details__status--oos'}>{props.details.status}</p>
            </div>
            <div className='inventory-details__main inventory-details__container--category'>
                <h3 className='inventory-details__head inventory-details__head--hidden'>CATEGORY</h3>
                <p className='inventory-details__paragraph'>{props.details.category}</p>
            </div>
            <div className='inventory-details__main'>
                <h3 className='inventory-details__head inventory-details__head--hidden'>QTY</h3>
                <p className='inventory-details__paragraph'>{props.details.quantity}</p>
            </div>
            <div className='inventory-details__main inventory-details__container--margin'>
                <h3 className='inventory-details__head inventory-details__head--hidden'>WAREHOUSE</h3>
                <p className='inventory-details__paragraph'>{props.details.warehouseName}</p>
            </div>
            <div className='inventory-details__main inventory-details_container--buttons'>
                <button className='inventory-details__button'><img src={iconDelete} alt='Delete'/></button>
                <button className='inventory-details__button'><img src={iconEdit} alt='Deleteicon'/></button>
            </div>
        </div>
    );
};

export default InventoryDetails;
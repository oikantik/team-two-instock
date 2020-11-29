
import iconDelete from '../../assets/icons/delete_outline-24px.svg'
import iconEdit from '../../assets/icons/edit-24px.svg';
import iconChevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';
import './InventoryDetails.scss';

const InventoryDetails = props => {
    const handleDelete = (id, name) => props.onDelete(id, name);
    return (
        <div className='inventory-details'>
            <div className='inventory-details__container'>
                <div className='inventory-details__main inventory-details__main--item'>
                    <h3 className='inventory-details__head inventory-details__none'>INVENTORY ITEM</h3>
                    <Link to={`/inventory/${props.details.id}`} className='inventory-details__link'>{props.details.itemName}<img className='inventory-details__link-img' src={iconChevron} alt=''/></Link>
                </div>
                <div className='inventory-details__main  inventory-details__main--status'>
                    <h3 className='inventory-details__head inventory-details__none'>STATUS</h3>
                    <p className={props.details.status === 'In Stock' ? 'inventory-details__status inventory-details__category--status inventory-details__in-stock' : 'inventory-details__status inventory-details__category--status inventory-details__out-of-stock'}>{props.details.status}</p>
                </div>
                <div className='inventory-details__main inventory-details__container--category  inventory-details__main--cat'>
                    <h3 className='inventory-details__head inventory-details__none'>CATEGORY</h3>
                    <p className='inventory-details__category inventory-details__category--cat'>{props.details.category}</p>
                </div>
                <div className='inventory-details__main  inventory-details__main--qty'>
                    <h3 className='inventory-details__head inventory-details__none'>QTY</h3>
                    <p className='inventory-details__category inventory-details__category--qty'>{props.details.quantity}</p>
                </div>
                <div className='inventory-details__mob'></div>
                <div className='inventory-details__main inventory-details__aside  inventory-details__main--warehouse'>
                    <h3 className='inventory-details__head inventory-details__none'>WAREHOUSE</h3>
                    <p className='inventory-details__category inventory-details__category--warehouse'>{props.details.warehouseName}</p>
                </div>
                <div className='inventory-details__button-div-tablet  inventory-details__main--actions'>
                    <button className='inventory-details__button'><img src={iconDelete} alt=''  onClick={() => handleDelete(props.details.id, props.details.itemName)}/></button>
                    <Link to={"/inventory/" + props.details.id +"/edit"}><button className='inventory-details__button'><img src={iconEdit} alt=''/></button></Link>
                </div>
            </div>
            <div className='inventory-details__button-div inventory-details__category--actions'>
                <button className='inventory-details__button'><img src={iconDelete} alt='' onClick={() => handleDelete(props.details.id, props.details.itemName)}/></button>
                <Link to="/inventory/editInventory/:inventoryId"><button className='inventory-details__button'><img src={iconEdit} alt=''/></button></Link>
            </div>
        </div>
    );
};

export default InventoryDetails;
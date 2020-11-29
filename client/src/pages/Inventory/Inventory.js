
import {Link} from 'react-router-dom';
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import iconSort from '../../assets/icons/sort-24px.svg';
import { Component } from 'react';
import './Inventory.scss';
import { axiosInstance } from '../../utils/axios';


//DECLARING THE STATE OF mainInventory-------------------------------
class MainInventory extends Component {
    state = {
        mainInventory: [],
        loading: true
    }
    
    fetchInventories = () => {
        axiosInstance.get('/inventory').then(response => {
          this.setState({
            mainInventory: response.data,
            loading: false
          })
        }).catch(error => console.log(error))
      }
    
    componentDidMount(){
        this.fetchInventories();
    }
    
    
    render() {
        return (

            // ADD ITEM FORM---------------------------------------------
            <section className='inventory'>
                <div className='inventory__div'>
                    <div className='inventory__header'>
                        <h2 className='inventory__title'>Inventory</h2>
                        <div className="inventory__flex-end">
                           
                           <form className="inventory__search-form"><input className='inventory__search' placeholder='Search...'></input>
                           <button className="inventory__search-icon"></button>
                           </form> 
                            <Link to="/inventory/addInventory"><button className='inventory__button'>+ Add New Item</button></Link>
                        </div>
                    </div>


                    {/* THIS DIV WILL BE DISPLAYED ON TABLET AND DESKTOP */}
                    <div className='inventory-tablet-head'>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--item'>inventory item<img src={iconSort} alt='' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--category'>category<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--status'>status<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--qty'>qty<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--warehouse'>warehouse<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--action'>actions</p>
                    </div>


                    {/* SETTING UP THE PROPS */}
                    <div className='total-inventory__table'>
                    {!this.state.loading && this.state.mainInventory.map(inventoryitem => 
                        <InventoryDetails
                            key={inventoryitem.id}
                            details={inventoryitem}
                        />)}
                    </div>
                </div>
            </section>
        );
    }
};
export default MainInventory;
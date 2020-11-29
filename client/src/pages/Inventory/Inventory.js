
import {Link} from 'react-router-dom';
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import iconSort from '../../assets/icons/sort-24px.svg';
import { Component, Fragment } from 'react';
import './Inventory.scss';
import { axiosInstance } from '../../utils/axios';
import DeleteModal from "../../components/DeleteModal/DeleteModal";

//DECLARING THE STATE OF mainInventory-------------------------------
class MainInventory extends Component {
    state = {
        mainInventory: [],
        loading: true,
        deleteModal: {
            show: false,
            id: "",
            name: "",
          },
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
    
    onDelete = (id, name) => {
        this.setState({
          deleteModal: {
            show: true,
            id,
            name,
          },
        });
      };
    
      onClose = () => {
        this.setState({
          deleteModal: {
            show: false,
            id: "",
            name: "",
          },
        });
      };
    
      onConfirm = (id) => {
        axiosInstance.delete(`/inventory/${id}`).then((response) => {
          this.setState({
            ...this.state,
            mainInventory: response.data
          }, () => this.onClose())
        }).catch(error => console.log(error))
    
      };
    
    render() {
        return (
<Fragment>
{this.state.deleteModal.show && (
          <DeleteModal
            id={this.state.deleteModal.id}
            name={this.state.deleteModal.name}
            onClose={this.onClose}
            onConfirm={this.onConfirm}
            type="inventory item"
            source="inventory list"
          />
        )}
            <section className='inventory'>
                <div className='inventory__div'>
                    <div className='inventory__header'>
                        <h2 className='inventory__title'>Inventory</h2>
                        <div className="inventory__flex-end">
                           
                           <form className="inventory__search-form"><input className='inventory__search' placeholder='Search...'></input>
                           <button className="inventory__search-icon"></button>
                           </form> 
                            <Link to="/inventory/add"><button className='inventory__button'>+ Add New Item</button></Link>
                        </div>
                    </div>


                    <div className='inventory-tablet-head'>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--item'>inventory item<img src={iconSort} alt='' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--category'>category<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--status'>status<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--qty'>qty<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--warehouse'>warehouse<img src={iconSort} alt='sort icon' className="inventory-tablet-head__sort"/></p>
                        <p className='inventory-tablet-head__headings inventory-tablet-head__headings--action'>actions</p>
                    </div>


                    <div className='total-inventory__table'>
                    {!this.state.loading && this.state.mainInventory.map(inventoryitem => 
                        <InventoryDetails
                            key={inventoryitem.id}
                            details={inventoryitem}
                            onDelete={this.onDelete}
                        />)}
                    </div>
                </div>
            </section></Fragment>
        );
    }
};
export default MainInventory;
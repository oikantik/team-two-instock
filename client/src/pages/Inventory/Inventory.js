
import {Link} from 'react-router-dom';
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import iconSort from '../../assets/icons/sort-24px.svg';
import { Component } from 'react';
// import { axiosInstance } from "../../utils/axios";
import './Inventory.scss';


//DECLARING THE STATE OF mainInventory-------------------------------
class MainInventory extends Component {
    state = {
        mainInventory: [{
            "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
            "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "warehouseName": "Manhattan",
            "itemName": "Television",
            "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
            "category": "Electronics",
            "status": "In Stock",
            "quantity": 500
        },
        {
            "id": "83433026-ca32-4c6d-bd86-a39ee8b7303e",
            "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "warehouseName": "Manhattan",
            "itemName": "Gym Bag",
            "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
            "category": "Gear",
            "status": "Out of Stock",
            "quantity": 0
          },
          {
            "id": "a193a6a7-42ab-4182-97dc-555ee85e7486",
            "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "warehouseName": "Manhattan",
            "itemName": "Hoodie",
            "description": "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
            "category": "Apparel",
            "status": "Out of Stock",
            "quantity": 0
          },
          {
            "id": "8f16bd30-bab5-40af-aca2-b63d5fdd1acc",
            "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "warehouseName": "Manhattan",
            "itemName": "Keychain",
            "description": "Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.",
            "category": "Accessories",
            "status": "In Stock",
            "quantity": 2000
          }
        ]
    }
    
//GETTING INVENTORY DATA THROUGH AXIOS---------------------------------
    // componentDidMount() {
    //     axiosInstance
    //         .get("/inventory")
    //             .then(result => {
    //                 this.setState({
    //                     mainInventory: result.data
    //                 });
    //             })
    //             .catch(error => {
    //                 console.log('Error: ' + error);
    //             })
    // }
    
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
                    {this.state.mainInventory && this.state.mainInventory.map(inventoryitem => 
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
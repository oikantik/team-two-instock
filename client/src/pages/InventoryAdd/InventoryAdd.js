import React, { Component, Fragment } from 'react';
import InventoryForm from '../../components/InventoryForm/InventoryForm'
import { axiosInstance } from '../../utils/axios'

class InventoryAdd extends Component {
    state = {
        loading: true
    }

    getInventories = () => {
        axiosInstance.get('/inventory/info').then(response => {
            this.setState({ ...response.data, loading: false })
        }).catch(error => console.log(error))
    }
    componentDidMount() {
        this.getInventories();
    }

    addInventory = (data) => {
        console.log("add it", data);
        // axiosInstance.put('/inventory/' + this.props.match.params.inventoryId, {
        //   ...data
        // }).then(response => {
        //   this.goBack();
        // }).catch(error => console.log(error))
    }

    render() {
        return (
            <Fragment>
                {!this.state.loading && <InventoryForm categories={this.state.categories} warehouses={this.state.warehouseNames} buttonText="+ Add Item" headingText="Add New Inventory Item" {...this.props} addInventory={this.addInventory} warehouseIds={this.state.warehouses}/>}</Fragment>
        );
    }
}

export default InventoryAdd;
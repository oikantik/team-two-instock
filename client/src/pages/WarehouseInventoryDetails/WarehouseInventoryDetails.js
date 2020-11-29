import React, { Component } from 'react';
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';
import {axiosInstance} from '../../utils/axios';
import DeleteModal from "../../components/DeleteModal/DeleteModal";

class WarehouseInventoryDetails extends Component {

  state = {
    warehouse: {},
    deleteModal: {
      show: false,
      id: "",
      name: "",
    },
  }


  fetchWarehouses = () => {
    axiosInstance.get('/warehouses/' + this.props.match.params.warehouseId).then(response => {
      this.setState({
      warehouse: response.data
    })}).catch(error=> console.log(error))
  }

  reloadWarehouses = () => {
    axiosInstance.get('/warehouses/' + this.props.match.params.warehouseId).then(response => {
      this.setState({
      warehouse: response.data
    }, () => this.onClose())}).catch(error=> console.log(error))
  }

  componentDidMount(){
    this.fetchWarehouses();
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
      this.reloadWarehouses();
    }).catch(error => console.log(error))

  };

  render () {
    return (
      <div>
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
        <WarehouseInventory onDelete={this.onDelete} {...this.state}/>
      </div>
    );
  }    
};

export default WarehouseInventoryDetails;

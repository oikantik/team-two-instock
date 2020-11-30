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
    sortBy: {
      item: {
        type: "",
        enabled: false,
      },
      category: {
        type: "",
        enabled: false,
      },
      status: {
        type: "",
        enabled: false,
      },
      qty: {
        type: "",
        enabled: false,
      },
      warehouse: {
        type: "",
        enabled: false,
      },
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

  fetchSortedInventories = (type) => {
    axiosInstance
      .get(`/warehouses/${this.props.match.params.warehouseId}/sort/by/${type}?type=${this.state.sortBy[type].type}`)
      .then((response) => {
        this.setState({
          warehouse: response.data
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount(){
    this.fetchWarehouses();
    this.baseSortState = this.state.sortBy;
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


  onSort = (type) => {
    if (this.state.sortBy[type].type === "asc") {
      this.setState(
        {
          sortBy: {
            ...this.baseSortState,
            [type]: {
              type: "desc",
              enabled: true,
            },
          },
        },
        () => this.fetchSortedInventories(type)
      );
    } else if (this.state.sortBy[type].type === "desc") {
      this.setState(
        {
          sortBy: {
            ...this.baseSortState,
            [type]: {
              type: "",
              enabled: false,
            },
          },
        },
        () => this.fetchWarehouses()
      );
    } else {
      this.setState(
        {
          sortBy: {
            ...this.baseSortState,
            [type]: {
              type: "asc",
              enabled: true,
            },
          },
        },
        () => this.fetchSortedInventories(type)
      );
    }
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
        <WarehouseInventory onDelete={this.onDelete} onSort={this.onSort}
        sortBy={this.state.sortBy} {...this.state}/>
      </div>
    );
  }    
};

export default WarehouseInventoryDetails;

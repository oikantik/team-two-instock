import React, { Component, Fragment } from 'react';
import InventoryForm from '../../components/InventoryForm/InventoryForm'
import { axiosInstance } from '../../utils/axios'

class InventoryEdit extends Component {
  state = {
    loading: true
  }

  getInventories = () => {
    axiosInstance.get('/inventory/' + this.props.match.params.inventoryId).then(response => {
      this.setState({ ...response.data, loading: false })
    }).catch(error => console.log(error))
  }
  componentDidMount() {
    this.getInventories();
  }
  render() {
    return (
      <Fragment>
        {!this.state.loading && <InventoryForm name={this.state.itemName} description={this.state.description} category={this.state.category} status={this.state.status} quantity={this.state.quantity} warehouse={this.state.warehouseName} id={this.state.id} warehouseID={this.state.warehouseID} />}
      </Fragment>
    );
  }
}

export default InventoryEdit;
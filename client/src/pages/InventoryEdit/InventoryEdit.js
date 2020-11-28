import React, { Component } from 'react';
import InventoryForm from '../../components/InventoryForm/InventoryForm'

class InventoryEdit extends Component {
  state = {
    id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
    warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    warehouseName: "Manhattan",
    itemName: "Television",
    description: 'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: "Electronics",
    status: "In Stock",
    quantity: 500
  }
  render() {
    return (
      <InventoryForm name={this.state.itemName} description={this.state.description} category={this.state.category} status={this.state.status} quantity={this.state.quantity} warehouse={this.state.warehouseName} id={this.state.id} warehouseID={this.state.warehouseID} />
    );
  }
}

export default InventoryEdit;
import React, { Component } from 'react';
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';
import {axiosInstance} from '../../utils/axios';

class WarehouseInventoryDetails extends Component {

  state = {
    warehouse: {},
  }


  componentDidMount(){
    axiosInstance.get('/warehouses/' + this.props.match.params.warehouseId).then(response => this.setState({
      warehouse: response.data
    })).catch(error=> console.log(error))
  }
  render () {
    return (
      <div>
        <WarehouseInventory {...this.state}/>
      </div>
    );
  }    
};

export default WarehouseInventoryDetails;

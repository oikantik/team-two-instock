import React, {
  Component, Fragment
} from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem'
import { axiosInstance } from '../../utils/axios';

class InventoryItemDetails extends Component {
  state = {
    inventory: {},
    loading: true
  };

  fetchInventory = () => {
    axiosInstance.get('/inventory/' + this.props.match.params.inventoryId).then(response => {
      this.setState({
        inventory: response.data,
        loading: false
      })
    }).catch(error => console.log(error))
  }

  componentDidMount(){
    this.fetchInventory();
  }

  render() {
    return (<Fragment>
    {!this.state.loading && <InventoryItem inventory={this.state.inventory}/ >}
    </Fragment>)
  }
}

export default InventoryItemDetails;
import React, { Component } from 'react';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'

class WarehouseAdd extends Component {
    
    render() {
        return (
            <WarehouseForm goBack={this.props.history.goBack}/>
        );
    }
}

export default WarehouseAdd;
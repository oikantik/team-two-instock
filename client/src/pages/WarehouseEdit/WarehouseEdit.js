import React, { Component } from 'react';
import axios from 'axios';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

const API_URL = "http://localhost:8080/warehouses/";

class WarehouseEdit extends Component {
    state = {
        warehouseObj: {}
    }

    componentDidMount() {
        axios.get(API_URL + this.props.match.params.warehouseId)
            .then((response) => {
                this.setState({
                    warehouseObj: response.data
                });
            })
            .catch((error) => console.log(error));
    }


    render() {
        return (
            <div>
               <WarehouseForm warehouseObj={this.state.warehouseObj} goBack={this.props.history.goBack} edit /> 
            </div>
        );
    }
}

export default WarehouseEdit;
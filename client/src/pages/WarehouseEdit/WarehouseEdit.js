import React, { Component } from 'react';
import { axiosInstance } from "../../utils/axios";
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

class WarehouseEdit extends Component {
    state = {
        warehouseObj: {}
    }

    getWarehouses = () => {
        axiosInstance.get("/warehouses/" + this.props.match.params.warehouseId)
            .then((response) => {
                this.setState({
                    warehouseObj: response.data
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getWarehouses();
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
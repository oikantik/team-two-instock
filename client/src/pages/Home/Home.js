import React, { Component } from "react";
import "./Home.scss";
import WarehousesContainer from "../../components/WarehousesContainer/WarehousesContainer";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import { axiosInstance } from "../../utils/axios";

class Home extends Component {
  state = {
    warehouses: [],
  };

  componentDidMount() {
    axiosInstance
      .get("/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  onDelete = () => {
    console.log("item clicked");
  };
  render() {
    return (
      <div>
        <WarehousesContainer />
        <WarehousesList
          warehouses={this.state.warehouses}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default Home;

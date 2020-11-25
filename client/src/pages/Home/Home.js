import React, { Component, Fragment } from "react";
import "./Home.scss";
import WarehousesContainer from "../../components/WarehousesContainer/WarehousesContainer";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import { axiosInstance } from "../../utils/axios";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

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
      <Fragment>
        <DeleteModal />
        <WarehousesContainer />
        <WarehousesList
          warehouses={this.state.warehouses}
          onDelete={this.onDelete}
        />
      </Fragment>
    );
  }
}

export default Home;

import React, { Component, Fragment } from "react";
import "./Home.scss";
import WarehousesContainer from "../../components/WarehousesContainer/WarehousesContainer";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import { axiosInstance } from "../../utils/axios";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

class Home extends Component {
  state = {
    warehouses: [],
    deleteModal: {
      show: false,
      id: "",
      name: "",
    },
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
    console.log(id);
    setTimeout(() => {
      this.onClose();
    }, 5000); // this will be replaced when backend axios for delete is done
  };

  render() {
    return (
      <Fragment>
        {this.state.deleteModal.show && (
          <DeleteModal
            id={this.state.deleteModal.id}
            name={this.state.deleteModal.name}
            onClose={this.onClose}
            onConfirm={this.onConfirm}
            type="warehouse"
            source="list of warehouses"
          />
        )}
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

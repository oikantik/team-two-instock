import React, { Component, Fragment } from "react";
import "./Home.scss";
import WarehousesListHeader from "../../components/WarehousesListHeader/WarehousesListHeader";
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
    axiosInstance.delete(`/warehouses/${id}`).then((response) => {
      this.setState({
        ...this.state,
        warehouses: response.data.warehouses
      }, () => this.onClose())
    }).catch(error => console.log(error))

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
        <main className="warehouse-home">
          <section className="warehouse-list-section">
            <WarehousesListHeader />
            <WarehousesList
              warehouses={this.state.warehouses}
              onDelete={this.onDelete}
            />
          </section>
        </main>


      </Fragment>
    );
  }
}

export default Home;

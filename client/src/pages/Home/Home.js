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
    sortBy: {
      warehouse: {
        type: "",
        enabled: false
      },
      address: {
        type: "",
        enabled: false
      },
      name: {
        type: "",
        enabled: false
      },
      info: {
        type: "",
        enabled: false
      },
    }
  };

  fetchWarehouses = () => {
    axiosInstance
    .get("/warehouses")
    .then((response) => {
      this.setState({
        warehouses: response.data,
      });
    })
    .catch((error) => console.log(error));
  }

  fetchSortedWarehouses = (type) => {
    axiosInstance
    .get(`/warehouses/sort/by/${type}?type=${this.state.sortBy[type].type}`)
    .then((response) => {
      this.setState({
        warehouses: response.data,
      });
    })
    .catch((error) => console.log(error));
  } 

  componentDidMount() {
    this.fetchWarehouses();
    this.baseSortState = this.state.sortBy;
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

  onSort = (type) => {

    if(this.state.sortBy[type].type === 'asc'){
      this.setState({
        sortBy: {
          ...this.baseSortState,
          [type]: {
            type: "desc",
            enabled: true
          },
        }
      }, () => this.fetchSortedWarehouses(type))
    } else if (this.state.sortBy[type].type === 'desc') {
      this.setState({
        sortBy: {
          ...this.baseSortState,
          [type]: {
            type: "",
            enabled: false
          },
        }
      }, () => this.fetchWarehouses())
    } else {
      this.setState({
        sortBy: {
          ...this.baseSortState,
          [type]: {
            type: "asc",
            enabled: true
          },
        }
      }, () => this.fetchSortedWarehouses(type))
    }
  }

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
            <WarehousesListHeader/>
            <WarehousesList
              onSort={this.onSort}
              sortBy={this.state.sortBy}
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

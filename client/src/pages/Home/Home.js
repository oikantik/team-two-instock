import React from "react";
import "./Home.scss";
import WarehousesContainer from "../../components/WarehousesContainer/WarehousesContainer";
import WarehousesList from "../../components/WarehousesList/WarehousesList";

const Home = () => {
  return (
    <div>
      <WarehousesContainer />
      <WarehousesList />
    </div>
  );
};

export default Home;

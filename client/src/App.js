import Home from "./pages/Home/Home";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Header from "./components/headerX/Header";
import Inventory from './pages/Inventory/Inventory';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/warehouse" component={Home}></Route>
          <Route path="/warehouse/:warehouseId" component={Home}></Route>
          {/* <Route path='/editWarehouse/:warehouseId' component={Home}></Route> */}
          <Route
            path="/warehouse/editWarehouse/:warehouseId"
            component={Home}
          ></Route>
          <Route path="/warehouse/addWarehouse" component={Home}></Route>
          <Route path="/inventory/addInventory" component={InventoryAdd}></Route>
          <Route
            path="/inventory/:inventoryId"
            component={InventoryItem}
          ></Route>
          
          <Route path="/inventory" component={Inventory}></Route>
          {/* <Route path='/inventory/inventoryItem' component={Home}></Route> */}
          <Route
            path="/inventory/editInventory/:inventoryId"
            component={Home}
          ></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

<<<<<<< HEAD
import Home from './pages/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import WarehouseForm from './components/WarehouseForm/WarehouseForm';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
=======
import Home from "./pages/Home/Home";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import { BrowserRouter, Switch, Route } from "react-router-dom";
>>>>>>> developer
import "./App.scss";

import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={Home}></Route>
          <Route path='/warehouse' component={Home}></Route>
          <Route path='/editWarehouse/:warehouseId' component={Home}></Route>
          <Route path='/addWarehouse' component={WarehouseForm}></Route>
          <Route path='/inventory/:inventoryId' component={InventoryItem}></Route>
          <Route path='/inventory' component={Home}></Route>
          <Route path='/inventoryItem' component={Home}></Route>
          <Route path='/editInventory/:inventoryId' component={Home}></Route>
          <Route path='/addInventory' component={Home}></Route>
          <Route path='/warehouse/:warehouseId' component={Home}></Route>
=======
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
          
          <Route path="/inventory" component={Home}></Route>
          {/* <Route path='/inventory/inventoryItem' component={Home}></Route> */}
          <Route
            path="/inventory/editInventory/:inventoryId"
            component={Home}
          ></Route>
          
>>>>>>> developer
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

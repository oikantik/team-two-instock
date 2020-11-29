import Home from "./pages/Home/Home";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseInventoryDetails from "./pages/WarehouseInventoryDetails/WarehouseInventoryDetails";

import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import Inventory from './pages/Inventory/Inventory'

import InventoryEdit from './pages/InventoryEdit/InventoryEdit'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App__absolute">
          <main className="App__main">
            <Switch>
              <Redirect path="/" exact to="/warehouse"></Redirect>
              <Route path="/warehouse/add" component={WarehouseAdd}></Route>
              <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit}></Route>
              <Route path="/warehouse/:warehouseId" component={WarehouseInventoryDetails}></Route>
              <Route path="/warehouse" component={Home}></Route>
              <Route path="/inventory/add" component={InventoryAdd}></Route>
              <Route path="/inventory/:inventoryId/edit" component={InventoryEdit}></Route>
              <Route path="/inventory/:inventoryId" component={InventoryItemDetails}></Route>
              <Route path="/inventory" component={Inventory}></Route>
            </Switch>
          </main>
          <footer className="App__footer">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

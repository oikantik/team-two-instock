import Home from "./pages/Home/Home";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';


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
              <Route path="/warehouse/:warehouseId/edit" component={Home}></Route>
              <Route path="/warehouse/:warehouseId" component={Home}></Route>
              <Route path="/warehouse" component={Home}></Route>
              <Route path="/inventory/add" component={InventoryAdd}></Route>
              <Route path="/inventory/:inventoryId/edit" component={Home}></Route>
              <Route path="/inventory/:inventoryId" component={InventoryItem}></Route>
              <Route path="/inventory" component={Home}></Route>
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

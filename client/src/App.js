import Home from "./pages/Home/Home";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect path="/" exact to="/warehouse"></Redirect>
          <Route path="/warehouse/add" component={Home}></Route>
          <Route path="/warehouse/:warehouseId/edit" component={Home}></Route>
          <Route path="/warehouse/:warehouseId" component={Home}></Route>
          <Route path="/warehouse" component={Home}></Route>
          <Route path="/inventory/add" component={InventoryAdd}></Route>
          <Route path="/inventory/:inventoryId/edit" component={Home}></Route>
          <Route path="/inventory/:inventoryId" component={InventoryItem}></Route>
          <Route path="/inventory" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

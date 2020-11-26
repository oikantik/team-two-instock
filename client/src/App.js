import Home from './pages/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import WarehouseForm from './components/WarehouseForm/WarehouseForm';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import "./App.scss";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

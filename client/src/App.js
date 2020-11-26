import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import "./App.scss";
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/warehouse' component={Home}></Route>
          <Route path='/editWarehouse/:warehouseId' component={Home}></Route>
          <Route path='/addWarehouse' component={Home}></Route>
          <Route path='/inventory' component={Home}></Route>
          <Route path='/inventoryItem' component={Home}></Route>
          <Route path='/editInventory/:inventoryId' component={Home}></Route>
          <Route path='/addInventory' component={InventoryAdd}></Route>
          <Route path='/warehouse/:warehouseId' component={Home}></Route>
          <Route path='/inventory/:inventoryId' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

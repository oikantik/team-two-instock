import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import "./App.scss";
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem';

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
          <Route path='/addInventory' component={Home}></Route>
          <Route path='/warehouse/:warehouseId' component={Home}></Route>
          <Route path='/inventory/:inventoryId' component={Home}></Route>
        </Switch>
      </BrowserRouter>
      <AddInventoryItem />
    </div>
  );
}

export default App;

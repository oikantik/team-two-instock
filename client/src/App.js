import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/warehouse' component={}></Route>
          <Route path='/editWarehouse/:warehouseId' component={}></Route>
          <Route path='/addWarehouse' component={}></Route>
          <Route path='/inventory' component={}></Route>
          <Route path='/inventoryItem' component={}></Route>
          <Route path='/editInventory/:inventoryId' component={}></Route>
          <Route path='/addInventory' component={}></Route>
          <Route path='/warehouse/:warehouseId' component={}></Route>
          <Route path='/inventory/:inventoryId' component={}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import "./App.scss";
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/warehouse' component={Home}></Route>
          {/* <Route path='/editWarehouse/:warehouseId' component={Home}></Route> */}
          <Route path='/warehouse/editWarehouse/:warehouseId' component={Home}></Route>
          <Route path='/warehouse/addWarehouse' component={Home}></Route>
          <Route path='/inventory' component={Home}></Route>
          <Route path='/inventory/inventoryItem' component={Home}></Route>
          <Route path='/inventory/editInventory/:inventoryId' component={Home}></Route>
          <Route path='/inventory/addInventory' component={Home}></Route>
          <Route path='/warehouse/:warehouseId' component={Home}></Route>
          <Route path='/inventory/:inventoryId' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

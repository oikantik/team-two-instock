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
    </div>
  );
}

export default App;

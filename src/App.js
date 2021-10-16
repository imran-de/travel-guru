import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

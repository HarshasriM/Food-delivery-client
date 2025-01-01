//import logo from './logo.svg';
import './App.css'
//import LifeCycleA from './class_component/LifeCycleA';
import {Route} from "react-router-dom";
import Home from "./component/Home/Home";
import ListingApi from "./component/listing/ListingApi"
import Details from './component/Details/Details';
import Menu from "./component/MenuItem/Menu";
import PlaceOrder from "./component/Booking/PlaceOrder";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import ViewBooking from "./component/Booking/ViewBooking";
function App() {
  return (
    <div className="App">
      {/*<LifeCycleA />*/}

      <Route exact path ="/" component={Home} />
      <Route  path ="/listing/:mealId" component={ListingApi} />
      <Route  path ="/details" component={Details} />
      <Route  path ="/menuItem/:restId" component={Menu} />
      <Route  path ="/placeOrder/:restName" component={PlaceOrder} />
      <Route  path ="/login" component={Login} />
      <Route  path ="/register" component={Register} />
      <Route  path ="/viewBooking" component= {ViewBooking} />
    </div>
  );
}

export default App;

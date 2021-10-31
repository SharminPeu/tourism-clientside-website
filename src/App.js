import './App.css';
import React from "react";

  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// import MenuBar from '
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MenuBar from './components/Shared/MenuBar/MenuBar';
import AuthProvider from './context/AuthProvider';
import MyOders from './components/MyOders/MyOders';
import ManageAllOders from './components/ManageAllOders/ManageAllOders';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';



  
  // set routing
  function App() {
    return (
      <div className="App">
       <AuthProvider>
       <Router>
          <MenuBar></MenuBar>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
              </Route>
              <Route path="/myOders">
                <MyOders></MyOders>
                </Route>
                <Route path="/addService">
                <AddService
                ></AddService>
                </Route>
                <Route path="/manageOders">
                <ManageAllOders></ManageAllOders>
                </Route>
            <PrivateRoute path="/booking/:bookingId">
          <Booking></Booking>
             </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
    
          </Switch>
          <Footer></Footer>
        </Router>
        
       </AuthProvider>
      </div>
    );
  }
  
  export default App;

import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./Componant/Pages/Home";
import About from "./Componant/Pages/About";
import Contact from "./Componant/Pages/Contact";
import Navbar from './Componant/Layout/Navbar';
import PageNotFound from "./Componant/Pages/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './Componant/Users/AddUser';
import EditUser from './Componant/Users/EditUser';
import User from "./Componant/Users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/adduser" component={AddUser}/>
          <Route exact path="/users/edituser/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

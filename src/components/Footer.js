import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from "./Home"
import Maps from "./Maps"
import Info from "./Search"

class Footer extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/maps" component={Maps}/>
            <Route path="/search" component={Info}/>
          </div>
          <ul className="header nav-footer d-flex justify-content-between">
            <li><NavLink className="text-white" to="/">Home</NavLink></li>
            <li><NavLink className="text-white" to="/maps">Maps</NavLink></li>
            <li><NavLink className="text-white" to="/search">Info</NavLink></li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default Footer
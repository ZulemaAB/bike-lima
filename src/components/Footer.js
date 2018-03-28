import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from "./Home"
import FinalMap from "./FinalMap"
import Info from "./Search"

class Footer extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/map" component={FinalMap}/>
            <Route path="/search" component={Info}/>
          </div>
          <ul className="header nav-footer d-flex justify-content-between">
            <li><img className="img-li" width="30px" src="https://png.icons8.com/ios/1600/bicycle.png"/><NavLink className="text-white" to="/">Estaciones</NavLink></li>
            <li><img className="img-li" width="30px" src="https://thumb.ibb.co/eQsEc7/geo.png"/><NavLink className="text-white" to="/maps">Mapas</NavLink></li>
            <li><img className="img-li" width="30px" src="https://thumb.ibb.co/i4huAS/info.png"/><NavLink className="text-white" to="/search">Info</NavLink></li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default Footer
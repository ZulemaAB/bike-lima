import React from 'react'
import './App.css'
import logo from '../assets/here-logo.png' 

const Logo = ({user, onAuth, onLogout}) => {
  const renderUserData = () => (
    <ul className="user">
      <img className="profile" src={user.photoURL} alt="user"/>
      <li className="name">{user.displayName}</li>
      <button className="logout" onClick={onLogout}>LogOut
      </button>
    </ul>
  )

  const renderLoginButton = () => (
    <ul className="d-flex align-items-center">
      <button className="login" onClick={onAuth}>Login
      </button>
    </ul>
  )

  return (
  <div>
    <nav className="navbar navbar-light fondo d-flex justify-content-center">
      <img className="logo" src={logo} alt={"logo"}/>
      <a className="navbar-brand">
        HERE<span className="color-maps">Maps</span>
      </a>
    </nav>
    <div className="user d-flex justify-content-end">{user ? renderUserData() : renderLoginButton()}</div>
  </div>
)}

export default Logo
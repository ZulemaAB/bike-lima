import React from 'react'
import './App.css'
import google from '../assets/google.png'
import logo from '../assets/logo.png'


const Logo = ({ user, onAuth, onLogout }) => {
  const renderUserData = () => (
    <div>
      <ul className="user">
        <img className="profile" src={user.photoURL} alt="user" />
        <li className="name">{user.displayName}</li>
        <button className="logout" onClick={onLogout}>Cerrar Sesion
      </button>
      </ul>
    </div>
  )

  const renderLoginButton = () => (
    <ul className="d-flex align-items-center">
      <img onClick={onAuth} className="google" src={google} alt={"google"} />
    </ul>
  )

  return (
    <div>
      <nav>
      <img className="logo" src={logo} alt={"logo"} />
      </nav>
      <div className="user d-flex justify-content-end">{user ? renderUserData() : renderLoginButton()}</div>
    </div>
  )
}

export default Logo
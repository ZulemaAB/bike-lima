import React, { Component } from 'react'
import firebase from 'firebase'
import Logo from './Logo'
import Footer from './Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user:null
    }
    
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({user:user})
      } else {
        this.setState({user:null})
      }
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error: ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`ha cerrado sesión`))
      .catch(error => console.log(`Error: ${error.code}: ${error.message}`));
  }

  render() {
    return (
      <div>
        <Logo  
        user={this.state.user}
        onAuth={this.handleAuth.bind(this)}
        onLogout={this.handleLogout.bind(this)}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

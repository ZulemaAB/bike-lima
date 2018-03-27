import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/components/App';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAz2LfId7KZ_QgxR8tGwMgBQY1Ex5dpXL8",
  authDomain: "bike-lima.firebaseapp.com",
  databaseURL: "https://bike-lima.firebaseio.com",
  projectId: "bike-lima",
  storageBucket: "bike-lima.appspot.com",
  messagingSenderId: "397159131141"
})

ReactDOM.render(<App />, document.getElementById('root'));


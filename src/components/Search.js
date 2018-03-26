import React, { Component } from 'react';
import './App.css'
import places from '../assets/places.jpg' 

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      searchWord: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  search() {
    fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=-12.14536%2C-77.021919&q=${this.state.searchWord}&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`)
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data)
      this.setState({ data });
    })
    .catch(function(error) {
      console.log('something went wrong');
    })
  }

onSubmit(e) {
  e.preventDefault();
  this.search();
}

onInputChange(e) {
  this.setState({ searchWord: e.target.value })
}

render() {
  const { data } = this.state;
  return(
    <div>
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h4 className="text-center iam">Find your favorites places</h4>
          <input className="form-control inputSearch" onChange={this.onInputChange} />
          <button type="submit" className="btn">SEARCH</button>
        </form>
      </div>
      <div className="container">
        <div className="row">{data && data.results && data.results.items.map((item, idx) => (
        <div key={idx} className="card col-12 col-sm-4 mt-3" id="card">
        <img className="card-img-top" src={item.icon} alt={item.title}/>
        <div className="card-body">
          <h5 className="card-title">{item.title.toUpperCase()}</h5>
          <p className="card-text">{item.vicinity}</p>
        </div>
      </div> 
      ))}</div>
      </div>
      <img className="places-img img-fluid" src={places} alt={places}/>
    </div>
  )
 }
}

export default Search;


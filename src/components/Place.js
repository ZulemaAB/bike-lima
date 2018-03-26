import React, { Component } from 'react'

class Place extends Component {
  render() {
    const list = this.props.data.map((el)=> 
      <div key={el.id} className="card col-12 col-sm-4 mt-3" id="card">
        <img className="card-img-top" src={el.imagen} alt={el.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{el.nombre.toUpperCase()}</h5>
          <p className="card-text"><strong>{el.autor}</strong></p>
          <p className="card-text">{el.tipo}</p>
        </div>
      </div> 
    )

    return (
      <div className="container">
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default Place;
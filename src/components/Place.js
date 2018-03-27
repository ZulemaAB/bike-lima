import React, { Component } from 'react'

class Place extends Component {
  render() {
    const list = this.props.data.map((el)=> 
      <div key={el.id} className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{el.nombre}
          <img className="card-img size" src={el.imagen} alt={el.nombre}/></h5>
          <p className="card-text"><strong>{el.bicicletas}</strong></p>
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
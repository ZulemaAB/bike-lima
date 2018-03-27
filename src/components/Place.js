import React, { Component } from 'react'

class Place extends Component {
  constructor (props) {
    super(props)
    this.state = {
      estaciones : {
        estacion_1 : {
          nombre:'Estación Aviación',
          bicicletas:10
        }
      }
    }
  }

  reservar(){
    // event.preventDefault()
    this.setState({
      estaciones:{
        estacion_1:{
          nombre:'Estación Aviación',
          bicicletas:this.state.estaciones.estacion_1.bicicletas-1
        }
      }
    })
  }
  

  boton(){
    return(
    <button>prueba</button>
    )
  }


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
      <div>
      {/* <div className="container">
        <div className="row">{list}</div>
      </div> */}
      <div>
        <h1>{this.state.estaciones.estacion_1.nombre}</h1>
        <p>{this.state.estaciones.estacion_1.bicicletas}</p>
        <button onClick={this.reservar.bind(this)}>reservar</button>
        {this.boton.bind(this)}
      </div>
      </div>
    );
  }
}

export default Place;
import React, { Component } from 'react'

class Place extends Component {
  constructor (props) {
    super(props)
    this.state = {
      estaciones : {
        estacion_1 : {
          id:1,
          nombre:'Estacion Angamos (cruce Av. Angamos con Jr. Emilio Harth)',
          bicicletas:15
        },
        estacion_2 :{
          id:2,
          nombre:'Estación Aviación (cruce de la Av. Aviación con Av. San Borja Norte)',
          bicicletas:10
        },
        estacion_3:{
          id:3,
          nombre:'Estación Bailetti (Cruce Av. Bailetti con Calle 16)',
          bicicletas:5
        },
        estacion_4:{
          id:4,
          nombre:'Estación Boulevard (cruce de la Av. Boulevard con Calle 2)',
          bicicletas:12
        },
        estacion_5:{
          id:5,
          nombre:'Estación Buenavista (cruce de la Av. Cavalier con la Av. Buenavista)',
          bicicletas:3
        },
        estacion_6:{
          id:6,
          nombre:'Estacion Del Aire (cruce de la Av. Del Aire con Calle Las Letras)',
          bicicletas:12
        },
        estacion_7:{
          id:7,
          nombre:'Estación Ebony (cruce de la Av. San Borja Sur con la Av. del Parque)',
          bicicletas:12
        },
        estacion_8:{
          id:8,
          nombre:'Estación El Bosque (Cruce de Av. Primavera con Av. San Luis)',
          bicicletas:12
        },
        estacion_9:{
          id:9,
          nombre:'Estacion La Biblioteca (cruce de la Av. Aviacion con Calle Las Letras)',
          bicicletas:12
        },
        estacion_10:{
          id:10,
          nombre:'Estación La Cultura (cruce de las calles Bernini con Regoyos)',
          bicicletas:12
        },
        estacion_11:{
          id:11,
          nombre:'Estación Metropolitano 1 (cruce de Av. Angamos con Vía Expresa, Surquillo)',
          bicicletas:12
        },
        estacion_12:{
          id:12,
          nombre:'Estacion Precursores (cruce Av. Primavera con Av. Precursores, Surco)',
          bicicletas:12
        },
        estacion_13:{
          id:13,
          nombre:'Estación Primavera (cruce de la Av. Primavera con la Av. Aviación)',
          bicicletas:12
        },
        estacion_14:{
          id:14,
          nombre:'Estacion Ricardo Palma (cruce Av. Benavides con Panamericana Sur, Surco)',
          bicicletas:12
        },
        estacion_15:{
          nombre:'Estación San Borja Norte (cruce de la Av. San Borja Norte con la Av. Boulevard de Surco)',
          bicicletas:12
        },
        estacion_16:{
          nombre:'Estación San Borja Sur (cruce de la Av. San Borja Sur con la Av. Aviación)',
          bicicletas:12
        },
        estacion_17:{
          nombre:'Estación San Luis (cruce de la Av. San Borja Sur con la Av. San Luis)',
          bicicletas:12
        }
      }
    }
  }

  reservar(){
    // event.preventDefault()
    // this.setState({
    //   estaciones:{
    //     estacion_1:{
    //       nombre:'Estación Aviación',
    //       bicicletas:this.state.estaciones.estacion_1.bicicletas-1
    //     },
    //     estacion_2:{
    //       nombre:'Estación Angamos',
    //       bicicletas:8
    //     }
    //   }
    // })
    console.log('hahah')
  }


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
        {/* <div className="row">{list}</div> */}
        <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_1.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_1.bicicletas}</strong></p>
          <button className="card-button" onClick={this.reservar.bind(this)}>Solicitar</button>
          <button className="card-button">Devolver</button>
        </div>
      </div> 
      </div>
    );
  }
}

export default Place;
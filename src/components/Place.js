import React, { Component } from 'react'

class Place extends Component {
  constructor (props) {
    super(props)
    this.state = {
      estaciones : {
        estacion_1 : {
          id:'estacion_1',
          nombre:'Estacion Angamos (cruce Av. Angamos con Jr. Emilio Harth)',
          bicicletas:15,
          disabled:'',
          disabledDevol:''
        },
        estacion_2 :{
          id:2,
          nombre:'Estación Aviación (cruce de la Av. Aviación con Av. San Borja Norte)',
          bicicletas:10,
          disabled:''
        },
        estacion_3:{
          id:3,
          nombre:'Estación Bailetti (Cruce Av. Bailetti con Calle 16)',
          bicicletas:5,
          disabled:''
        },
        estacion_4:{
          id:4,
          nombre:'Estación Boulevard (cruce de la Av. Boulevard con Calle 2)',
          bicicletas:12,
          disabled:''
        },
        estacion_5:{
          id:5,
          nombre:'Estación Buenavista (cruce de la Av. Cavalier con la Av. Buenavista)',
          bicicletas:3,
          disabled:''
        },
        estacion_6:{
          id:6,
          nombre:'Estacion Del Aire (cruce de la Av. Del Aire con Calle Las Letras)',
          bicicletas:12,
          disabled:''
        },
        estacion_7:{
          id:7,
          nombre:'Estación Ebony (cruce de la Av. San Borja Sur con la Av. del Parque)',
          bicicletas:12,
          disabled:''
        },
        estacion_8:{
          id:8,
          nombre:'Estación El Bosque (Cruce de Av. Primavera con Av. San Luis)',
          bicicletas:12,
          disabled:''
        },
        estacion_9:{
          id:9,
          nombre:'Estacion La Biblioteca (cruce de la Av. Aviacion con Calle Las Letras)',
          bicicletas:12,
          disabled:''
        },
        estacion_10:{
          id:10,
          nombre:'Estación La Cultura (cruce de las calles Bernini con Regoyos)',
          bicicletas:12,
          disabled:''
        },
        estacion_11:{
          id:11,
          nombre:'Estación Metropolitano 1 (cruce de Av. Angamos con Vía Expresa, Surquillo)',
          bicicletas:12,
          disabled:''
        },
        estacion_12:{
          id:12,
          nombre:'Estacion Precursores (cruce Av. Primavera con Av. Precursores, Surco)',
          bicicletas:12,
          disabled:''
        },
        estacion_13:{
          id:13,
          nombre:'Estación Primavera (cruce de la Av. Primavera con la Av. Aviación)',
          bicicletas:12,
          disabled:''
        },
        estacion_14:{
          id:14,
          nombre:'Estacion Ricardo Palma (cruce Av. Benavides con Panamericana Sur, Surco)',
          bicicletas:12,
          disabled:''
        },
        estacion_15:{
          nombre:'Estación San Borja Norte (cruce de la Av. San Borja Norte con la Av. Boulevard de Surco)',
          bicicletas:12,
          disabled:''
        },
        estacion_16:{
          nombre:'Estación San Borja Sur (cruce de la Av. San Borja Sur con la Av. Aviación)',
          bicicletas:12,
          disabled:''
        },
        estacion_17:{
          nombre:'Estación San Luis (cruce de la Av. San Borja Sur con la Av. San Luis)',
          bicicletas:12,
          disabled:''
        }
      }
    }
  }

  reservar1 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_1:{
          ... this.state.estaciones.estacion_1,
          bicicletas:this.state.estaciones.estacion_1.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solícito una bicicleta de la ${this.state.estaciones.estacion_1.nombre}`);
  }

  reservar2 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_2:{
          ... this.state.estaciones.estacion_2,
          bicicletas:this.state.estaciones.estacion_2.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_2.nombre}`);
  }

  reservar3 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_3:{
          ... this.state.estaciones.estacion_3,
          bicicletas:this.state.estaciones.estacion_3.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_3.nombre}`);
  }
  reservar4 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_4:{
          ... this.state.estaciones.estacion_4,
          bicicletas:this.state.estaciones.estacion_4.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_4.nombre}`);
  }

  reservar5 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_5:{
          ... this.state.estaciones.estacion_5,
          bicicletas:this.state.estaciones.estacion_5.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_5.nombre}`);
  }

  reservar6 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_6:{
          ... this.state.estaciones.estacion_6,
          bicicletas:this.state.estaciones.estacion_6.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_6.nombre}`);
  }

  reservar7 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_7:{
          ... this.state.estaciones.estacion_7,
          bicicletas:this.state.estaciones.estacion_7.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_7.nombre}`);
  }

  reservar8 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_8:{
          ... this.state.estaciones.estacion_8,
          bicicletas:this.state.estaciones.estacion_8.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_8.nombre}`);
  }

  reservar9 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_9:{
          ... this.state.estaciones.estacion_9,
          bicicletas:this.state.estaciones.estacion_9.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_9.nombre}`);
  }

  reservar10 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_10:{
          ... this.state.estaciones.estacion_10,
          bicicletas:this.state.estaciones.estacion_10.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_10.nombre}`);
  }

  reservar11 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_11:{
          ... this.state.estaciones.estacion_11,
          bicicletas:this.state.estaciones.estacion_11.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_11.nombre}`);
  }

  reservar12 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_12:{
          ... this.state.estaciones.estacion_12,
          bicicletas:this.state.estaciones.estacion_12.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_12.nombre}`);
  }

  reservar13 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_13:{
          ... this.state.estaciones.estacion_13,
          bicicletas:this.state.estaciones.estacion_13.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_13.nombre}`);
  }

  reservar14 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_14:{
          ... this.state.estaciones.estacion_14,
          bicicletas:this.state.estaciones.estacion_14.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_14.nombre}`);
  }

  reservar15 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_15:{
          ... this.state.estaciones.estacion_15,
          bicicletas:this.state.estaciones.estacion_15.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_15.nombre}`);
  }

  reservar16 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_16:{
          ... this.state.estaciones.estacion_16,
          bicicletas:this.state.estaciones.estacion_16.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_16.nombre}`);
  }

  reservar17 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_17:{
          ... this.state.estaciones.estacion_17,
          bicicletas:this.state.estaciones.estacion_17.bicicletas-1,
          disabled:'disabled',
          disabledDevol:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Solicito una bicicleta de la ${this.state.estaciones.estacion_17.nombre}`);
  }

  devolver1 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_1:{
          ... this.state.estaciones.estacion_1,
          bicicletas:this.state.estaciones.estacion_1.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_1.nombre}`);
  }

  devolver2 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_2:{
          ... this.state.estaciones.estacion_2,
          bicicletas:this.state.estaciones.estacion_2.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_2.nombre}`);
  }

  devolver3 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_3:{
          ... this.state.estaciones.estacion_3,
          bicicletas:this.state.estaciones.estacion_3.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_3.nombre}`);
  }

  devolver4 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_4:{
          ... this.state.estaciones.estacion_4,
          bicicletas:this.state.estaciones.estacion_4.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_1.nombre}`);
  }

  devolver5 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_5:{
          ... this.state.estaciones.estacion_5,
          bicicletas:this.state.estaciones.estacion_5.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_5.nombre}`);
  }

  devolver6 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_6:{
          ... this.state.estaciones.estacion_6,
          bicicletas:this.state.estaciones.estacion_6.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_6.nombre}`);
  }

  devolver7 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_7:{
          ... this.state.estaciones.estacion_7,
          bicicletas:this.state.estaciones.estacion_7.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_7.nombre}`);
  }

  devolver8 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_8:{
          ... this.state.estaciones.estacion_8,
          bicicletas:this.state.estaciones.estacion_8.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_1.nombre}`);
  }

  devolver9 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_9:{
          ... this.state.estaciones.estacion_9,
          bicicletas:this.state.estaciones.estacion_9.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_9.nombre}`);
  }

  devolver10 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_10:{
          ... this.state.estaciones.estacion_10,
          bicicletas:this.state.estaciones.estacion_10.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_10.nombre}`);
  }

  devolver1 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_1:{
          ... this.state.estaciones.estacion_1,
          bicicletas:this.state.estaciones.estacion_1.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_1.nombre}`);
  }

  devolver11 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_11:{
          ... this.state.estaciones.estacion_11,
          bicicletas:this.state.estaciones.estacion_11.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_11.nombre}`);
  }


  devolver12 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_12:{
          ... this.state.estaciones.estacion_12,
          bicicletas:this.state.estaciones.estacion_12.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_12.nombre}`);
  }

  devolver13 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_1:{
          ... this.state.estaciones.estacion_13,
          bicicletas:this.state.estaciones.estacion_13.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_13.nombre}`);
  }


  devolver14 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_14:{
          ... this.state.estaciones.estacion_14,
          bicicletas:this.state.estaciones.estacion_14.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_14.nombre}`);
  }

  devolver15 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_15:{
          ... this.state.estaciones.estacion_15,
          bicicletas:this.state.estaciones.estacion_15.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_1.nombre}`);
  }

  devolver16 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_16:{
          ... this.state.estaciones.estacion_16,
          bicicletas:this.state.estaciones.estacion_16.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_16.nombre}`);
  }
  

  devolver17 =(event) =>{
    const id = event.target.dataset.key
    this.setState({
      ... this.state,
      estaciones:{
        ... this.state.estaciones,
        estacion_17:{
          ... this.state.estaciones.estacion_17,
          bicicletas:this.state.estaciones.estacion_17.bicicletas+1,
          disabledDevol:'disabled',
          disabled:''
        }
      }
    })
    // console.log(event.target.dataset.key)
    alert(`Devolvió una bicicleta a la ${this.state.estaciones.estacion_17.nombre}`);
  }
  

  render() {
 
    return (
      <div className="container">
        <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_1.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_1.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_1.id} disabled={this.state.estaciones.estacion_1.disabled} className="card-button" onClick={this.reservar1}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_1.disabledDevol} className="card-button" onClick={this.devolver1}>Devolver</button>
        </div>
      </div> 
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_2.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_2.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_2.id} disabled={this.state.estaciones.estacion_2.disabled} className="card-button" onClick={this.reservar2}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_2.disabledDevol} className="card-button" onClick={this.devolver2} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_3.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_3.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_3.id} disabled={this.state.estaciones.estacion_3.disabled} className="card-button" onClick={this.reservar3}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_3.disabledDevol} className="card-button" onClick={this.devolver3} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_4.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_4.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_4.id} disabled={this.state.estaciones.estacion_4.disabled} className="card-button" onClick={this.reservar4}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_4.disabledDevol} className="card-button" onClick={this.devolver4} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_5.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_5.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_5.id} disabled={this.state.estaciones.estacion_5.disabled} className="card-button" onClick={this.reservar5}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_5.disabledDevol} className="card-button" onClick={this.devolver5} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_6.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_6.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_6.id} disabled={this.state.estaciones.estacion_6.disabled} className="card-button" onClick={this.reservar6}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_6.disabledDevol} className="card-button" onClick={this.devolver6} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_7.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_7.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_7.id} disabled={this.state.estaciones.estacion_7.disabled} className="card-button" onClick={this.reservar7}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_7.disabledDevol} className="card-button" onClick={this.devolver7} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_8.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_8.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_8.id} disabled={this.state.estaciones.estacion_8.disabled} className="card-button" onClick={this.reservar8}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_8.disabledDevol} className="card-button" onClick={this.devolver8} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_9.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_9.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_9.id} disabled={this.state.estaciones.estacion_9.disabled} className="card-button" onClick={this.reservar9}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_9.disabledDevol} className="card-button" onClick={this.devolver9} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_10.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_10.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_10.id} disabled={this.state.estaciones.estacion_10.disabled} className="card-button" onClick={this.reservar10}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_10.disabledDevol} className="card-button" onClick={this.devolver10} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_11.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_11.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_11.id} disabled={this.state.estaciones.estacion_11.disabled} className="card-button" onClick={this.reservar11}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_11.disabledDevol} className="card-button" onClick={this.devolver11} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_12.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_12.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_12.id} disabled={this.state.estaciones.estacion_12.disabled} className="card-button" onClick={this.reservar12}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_12.disabledDevol} className="card-button" onClick={this.devolver12} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_13.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_13.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_13.id} disabled={this.state.estaciones.estacion_13.disabled} className="card-button" onClick={this.reservar13}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_13.disabledDevol} className="card-button" onClick={this.devolver14} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_14.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_14.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_14.id} disabled={this.state.estaciones.estacion_14.disabled} className="card-button" onClick={this.reservar14}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_14.disabledDevol} className="card-button" onClick={this.devolver15} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_15.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_15.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_15.id} disabled={this.state.estaciones.estacion_15.disabled} className="card-button" onClick={this.reservar15}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_15.disabledDevol} className="card-button" onClick={this.devolver16} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_16.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_16.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_16.id} disabled={this.state.estaciones.estacion_16.disabled} className="card-button" onClick={this.reservar16}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_16.disabledDevol} className="card-button" onClick={this.devolver16} >Devolver</button>
        </div>
      </div>
      <div className="card col-sm-4 mt-3 card-ult" id="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.estaciones.estacion_17.nombre}
          <img className="card-img size" src="https://png.icons8.com/ios/1600/bicycle.png"/></h5>
          <p className="card-text"><strong>{this.state.estaciones.estacion_17.bicicletas}</strong></p>
          <button data-key = {this.state.estaciones.estacion_17.id} disabled={this.state.estaciones.estacion_17.disabled} className="card-button" onClick={this.reservar17}>Solicitar</button>
          <button disabled={this.state.estaciones.estacion_17.disabledDevol} className="card-button" onClick={this.devolver17} >Devolver</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Place;
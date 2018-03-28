import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
import Model from './Model';
// import { Component } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react';

const model = new Model();

class FinalMap extends Component {
	render(){
		return (
			<MapContainer model = {model}/>
		)
	}
}


export default FinalMap

/* const render = () => {
	ReactDOM.render(
		<App model = {model}/>
		, document.getElementById('root'));
}
model.subscribe(render);
render(); */

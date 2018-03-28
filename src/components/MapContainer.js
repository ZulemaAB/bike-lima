import React, {Component} from 'react';
import './App.css';
import Map from './Map';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const MapContainer = (props) => {
	const {model} =  props;
	return (
		<div>
		<Map model={model} />
		</div>)
}

export default MapContainer;

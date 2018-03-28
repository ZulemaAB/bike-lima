import React from 'react';
import GoogleMaps from './GoogleMaps';
import './mapa.css';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';

const Map = ({model}) => {

	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: [],
		isFiltering: false,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		model.setActiveProperty(property);

		const {index} = property;

		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
		}
	}
	const onPathBntClick = () => {
		model.setIsRouting();
	}

	return (<div>
		<GoogleMaps
			model = {model}
			properties={properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>
		<div className="searchDestinity">
			<div className="col-md-12 col-sm-12">
				<div className="form-group">
					<ReactGoogleAutocomplete
						onPlaceSelected={(place) => {

							console.log (place);
							model.setTarget (place);

						}}
						componentRestrictions={{country: "pe"}}
					/>
					<div className="col-md-12 col-sm-12">
						<button id="ruta" className="btn" onClick={onPathBntClick}>
							<i className="fa fa-bicycle" aria-hidden="true"></i>
								Ruta
						</button>
					</div>
				</div>
			</div>

		</div>


	</div>);
}


export default Map;
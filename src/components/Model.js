import React from 'react';
// import data from './data/Data';

const data = {
  properties: [
    {
      index: 0,
      latitude: -33.944576,
      longitude: 151.25584,
    },
    {
      index: 1,
      latitude: -33.943142,
      longitude: 151.25074,
    }
  ]
}

class Model {
	constructor () {
		// this.notify = null;
		this.userInfo = {
			name: null,
		}
		this.properties = data.properties;
		this.activeProperty = data.properties[0]
		this.isRouting = false;
		this.targetPlace = null;
	}
	setUserInfo (info) {
		this.userInfo = info;
		this.notify();
	}

	subscribe (render) {
		this.notify = render;
	}
	setActiveProperty (property) {
		this.activeProperty = property;
		this.notify();
	}

	setTarget (targetPlace) {
		this.targetPlace  = targetPlace;
		this.notify();
	}

	setIsRouting ( ) {
		this.isRouting = true;
		this.notify();
	}
}

export default Model;
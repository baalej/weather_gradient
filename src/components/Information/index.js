import React from 'react';
import './styles.css'

const Information = ({latitude, longitude, weather}) => {
	console.log(Object.keys(weather).length === 0);
	return (
		<div className="information">
			{Object.keys(weather).length > 0
				? `Latitude: ${latitude}, Longitude: ${longitude}`
				: ` `
			}
		</div>
	)
}

export default Information;
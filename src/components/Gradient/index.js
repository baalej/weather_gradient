import React from 'react';
import './styles.css';

const Gradient = ({weather}) => {
	const styles = {
    backgroundImage: `linear-gradient(${weather.wind_direction}deg, hsl(120, ${weather.cloud_cover}%, 50%), hsl(240, 100%, 50%))`
  }

  console.log(weather);

	return (
		<div 
			className="gradient" 
			style={styles}
		></div>
	)
}

export default Gradient;
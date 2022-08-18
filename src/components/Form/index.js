import React, { useState } from 'react';
import './styles.css';

const Form = ({ handleOnSubmit }) => {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [date, setDate] = useState('');
	// const [time, setTime] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!latitude || !longitude || !date) {
			alert('Please, fill up all fields');
		} else {
			handleOnSubmit({latitude, longitude, date});
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="number"
				name="latitude"
				value={latitude}
				className="form-element input number"
				onChange={event => setLatitude(event.target.value)}
			/>
			<input 
				type="number"
				name="longitude"
				value={longitude}
				className="form-element input number"
				onChange={event => setLongitude(event.target.value)}
			/>
			<input
				type="date"
				name="date"
				value={date}
				className="form-element input"
				onChange={event => setDate(event.target.value)}
			/>
			{/*<input
				type="time" 
				name="time"
				value={time}
				className="form-element input"
				onChange={event => setTime(event.target.value)}
			/>*/}
			<button
				className="form-element button">
					Accept
			</button>
		</form>
	)
}

export default Form;
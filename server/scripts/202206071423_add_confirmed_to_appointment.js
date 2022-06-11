require('dotenv').config();
const connectDb = require('../db');
const appointmentSchema = require('../models/Appointment');

(async () => {
	await connectDb();

	appointmentSchema
		.find({})
		.then((appointments) => {
			appointments.forEach((appointment) => {
				appointment.confirmed = false;
				console.log(appointment);
				appointment.save();
			});
		})
		.catch((e) => {
			console.log(e);
		});
})();

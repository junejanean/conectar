const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const patientsRoute = require('./routes/patients');
const doctorsRoute = require('./routes/doctors');
const appointmentsRoute = require('./routes/appointments');
const path = require('path');
const cors = require('cors');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');

// init app & middleware
dotenv.config();
app.use(express.json());
app.use(cors());

const connectDb = require('./db');

// db connection
let db = connectDb();

app.get('/whoami/:uid', async function (req, res) {
	const doctor = await Doctor.findOne({ uid: req.params.uid });
	const patient = await Patient.findOne({ uid: req.params.uid });

	console.log(1, req.params);
	return res
		.status(200)
		.json({ doctor, patient, isDoctor: !!doctor, isPatient: !!patient });
});

// routes
app.use('/doctors', doctorsRoute);
app.use('/patients', patientsRoute);
app.use('/appointments', appointmentsRoute);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
const PORT = process.env.PORT || 5000;

// mongoose.connection.once('open', () => {
app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
// });

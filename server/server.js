const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDb = require('./db');
const patientsRoute = require('./routes/patients');
const path = require('path');
const cors = require('cors');

// init app & middleware
dotenv.config();
app.use(express.json());
app.use(cors());

// db connection
let db = connectDb();

// routes
app.use('/patients', patientsRoute);

mongoose.connection.once('open', () => {
	app.listen(5000, () => {
		console.log('backend server running on 5000');
	});
});

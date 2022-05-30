const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

const patientSchema = new Schema(
	{
		uid: {
			type: String,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		patientSince: {
			type: String,
		},
		marital: {
			type: String,
		},
		birthDate: {
			type: String,
		},
		deathDate: {
			type: String,
		},
		gender: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		address: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		zip: {
			type: String,
		},
		details: {
			type: String,
		},
		allergies: {
			type: String,
		},
		medicalHistory: {
			type: String,
		},
		notes: {
			type: String,
		},
		longitute: {
			type: String,
		},
		latitude: {
			type: String,
		},
		healthcareCoverage: {
			type: Number,
		},
		healthcareExpenses: {
			type: Number,
		},
		appointment: {
			type: ObjectId,
			ref: 'Appointment',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);

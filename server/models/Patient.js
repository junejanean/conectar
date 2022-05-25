const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema(
	{
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
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);

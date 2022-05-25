const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
	{
		firstName: {
			String,
			required: true,
		},
		lastName: {
			String,
			required: true,
		},
		prefix: {
			String,
		},
		suffix: {
			String,
		},
		birthDate: {
			Date,
		},
		gender: {
			String,
		},
		address: {
			String,
		},
		city: {
			String,
		},
		state: {
			String,
		},
		county: {
			String,
		},
		zip: {
			String,
		},
		ssn: {
			String,
		},
		longitute: {
			String,
		},
		latitude: {
			String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);

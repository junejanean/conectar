const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

const doctorSchema = new Schema(
	{
		uid: {
			type: String,
		},
		firstName: {
			String,
			// required: true,
		},
		lastName: {
			String,
			// required: true,
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
		appointment: {
			type: ObjectId,
			ref: 'Appointment',
		},
		patients: [
			{
				type: ObjectId,
				ref: 'Patient',
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);

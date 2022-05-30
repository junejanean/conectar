const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema(
	{
		type: String,
		duration: String,
		notes: String,
		date: Date,
		patient: {
			type: ObjectId,
			ref: 'Patient',
		},
		doctor: {
			type: ObjectId,
			ref: 'Doctor',
		},
		createdAt: Date,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);

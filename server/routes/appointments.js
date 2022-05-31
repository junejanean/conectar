const router = require('express').Router();
const Appointment = require('../models/Appointment');
const { compareAsc, format } = require('date-fns');

const db = require('../db');

// GET

// get all appointments
router.get('/', async (req, res) => {
	try {
		const sort = {};
		if (req.query.sort === 'date') {
			sort['date'] = 1;
		}

		const appointments = await Appointment.find(req.params.body)
			.populate('doctor')
			.populate('patient')
			.sort(sort)
			.limit(req.query._limit);
		res.status(200).json(appointments);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Could not fetch the appointments' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const appointment = await Appointment.findOne({
			_id: req.params.id,
		}).populate('patient');
		res.status(200).json(appointment);
	} catch (err) {
		res.status(500).json({ error: 'Could not fetch the appointments' });
	}
});

//PUT

// add new appointment
router.post('/', async (req, res) => {
	const newAppointment = new Appointment(req.body);

	console.log(newAppointment);

	try {
		await newAppointment.save();
		//.populate('doctors')

		res.status(201).json(newAppointment);
	} catch (err) {
		console.log(err);
		res.status(500).json({ err: 'Could not create a new appointment' });
	}
});

module.exports = router;

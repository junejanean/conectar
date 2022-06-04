const router = require('express').Router();
const Patient = require('../models/Patient');

const db = require('../db');

// GET

// get all patients sorted by last name
router.get('/', async (req, res) => {
	try {
		const sort = {};
		if (req.query.sort === 'lastName') {
			sort['lastName'] = 1;
		}

		const patients = await Patient.find().sort(sort).limit(req.query._limit);

		res.status(200).json(patients);
	} catch (err) {
		res
			.status(500)
			.json({ error: 'Could not fetch the patients by last name' });
	}
});

// UPDATE

router.put('/:id', async (req, res) => {
	// try {
	const patient = await Patient.findById(req.params.body);
	// if (patient.username === req.body.username) {
	try {
		const updatedPatient = await Patient.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedPatient);
	} catch (err) {
		res.status(500).json({ error: 'Cound not update the patient' });
	}
	// } else {
	// 	res.status(401).json({
	// 		error: 'Only the logged in patient can edit their information',
	// 	});
	// }
	// } catch (err) {
	// 	res.status(500).json(err);
	// }
});

// //POST
// create new patient
router.post('/', async (req, res) => {
	const newPatient = new Patient(req.body);

	try {
		const savedPatient = await newPatient.save();
		res.status(201).json(savedPatient);
	} catch (err) {
		res.status(500).json({ err: 'Could not create a new patient' });
	}
});

// DELETE

router.delete('/:id', async (req, res) => {
	const findPatient = await Patient.findById(req.params.id);
	try {
		await findPatient.delete();

		res.status(200).json('Patient has been deleted');
	} catch (err) {
		res.status(500).json({
			error: 'Something went wrong, and the patient could not be deleted.',
		});
	}
});

// get all doctors sorted by City
// app.get('/doctors', async (req, res) => {
// 	let doctors = [];
// 	try {
// 		const city = await

// 			.find()
// 			.sort({ City: 1 })
// 			.forEach((doctor) => doctors.push(doctor));

// 		res.status(200).json(doctors);
// 	} catch (err) {
// 		res.status(500).json({ error: 'Could not fetch the doctors by city' });
// 	}
// });

module.exports = router;

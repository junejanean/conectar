const router = require('express').Router();
const Doctor = require('../models/Doctor');

const db = require('../db');

// GET

// get all docts sorted by last name
router.get('/', async (req, res) => {
	try {
		console.log(req.query);

		const sort = {};
		if (req.query.sort === 'lastName') {
			sort['lastName'] = 1;
		}

		const doctors = await Doctor.find().sort(sort).limit(req.query._limit);

		res.status(200).json(doctors);
	} catch (err) {
		res.status(500).json({ error: 'Could not fetch the doctors by last name' });
	}
});

// UPDATE

// router.put('/:id', async (req, res) => {
// 	try {
// 		const patchDoctor = await Doctor.findByIdAndUpdate(
// 			request.params.id,
// 			request.body
// 		);
// 		await Doctor.save();
// 		res.send(patchDoctor);
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// });w

router.get('/:uid/patients', async (req, res) => {
	// try {s
	const doctorsPatients = await Doctor.findOne({
		uid: req.params.uid,
	}).populate('patients');
	try {
		res.status(200).json(doctorsPatients.patients);
	} catch (err) {
		res
			.status(500)
			.json({ error: 'Could not retrieve pateints for this doctor' });
	}
});

router.patch('/:id', async (req, res) => {
	// try {
	const doctor = await Doctor.findById(req.params.body);
	// if (doctor.username === req.body.username) {
	try {
		const updatedDoctor = await Doctor.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedDoctor);
	} catch (err) {
		res.status(500).json({ error: 'Cound not update the doctor' });
	}
	// } else {
	// 	res.status(401).json({
	// 		error: 'Only the logged in doctor can edit their information',
	// 	});
	// }
	// } catch (err) {
	// 	res.status(500).json(err);
	// }
});

// //POST
// create new doctor
router.post('/', async (req, res) => {
	const newDoctor = new Doctor(req.body);

	try {
		const savedDoctor = await newDoctor.save();
		res.status(201).json(savedDoctor);
	} catch (err) {
		res.status(500).json({ err: 'Could not create a new doctor' });
	}
});

// DELETE

router.delete('/:id', async (req, res) => {
	const findDoctor = await Doctor.findById(req.params.id);
	try {
		await findDoctor.delete();

		res.status(200).json('Doctor has been deleted');
	} catch (err) {
		res.status(500).json({
			error: 'Something went wrong, and the doctor could not be deleted.',
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

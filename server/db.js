const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URI;

const connectDb = async () => {
	try {
		await mongoose
			.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(console.log('Connected to MongoDB'));
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDb;

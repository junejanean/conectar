const mongoose = require('mongoose');

const connectDb = async () => {
	try {
		await mongoose
			.connect(process.env.DATABASE_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(console.log('Connected to MongoDB'));
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDb;

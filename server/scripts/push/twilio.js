const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendNotification = async (to, body) => {
	client.messages
		.create({
			to: `+1${to}`,
			from: '+19785408667',
			body: body,
		})
		.then((message) => console.log('Notification has been sent!'));
};

module.exports = { sendNotification };

import config from '../../config';
import axios from 'axios';

const oneSignalNotification = () => {
	const optionsBuilder = (method, path, body) => {
		return {
			method,
			url: `${config.ONE_SIGNAL_URL}/${path}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${config.ONE_SIGNAL_API_KEY}`,
			},
			body: body ? JSON.stringify(body) : null,
		};
	};

	const createNotication = async (data) => {
		const options = optionsBuilder('post', 'notifications', data);
		try {
			const response = await axios(options);
			// return response.data;
			console.log(response.data);
		} catch (error) {
			console.error(error);
			return error;
		}
	};

	const body = {
		app_id: config.ONE_SIGNAL_API_ID,
		included_segments: ['Subscribed Users'],
		data: {
			foo: 'bar',
		},
		contents: {
			en: 'Your appointment is confirmed!',
		},
	};

	// const { id } = await createNotication(body);
};

export default oneSignalNotification;

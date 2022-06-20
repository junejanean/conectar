// const config = require('../../config');
// const axios = require('axios');

// // helper function to create options to pass to API calls
// const oneSignalNotification = () => {
// 	const optionsBuilder = (method, path, body) => {
// 		return {
// 			method,
// 			url: `${config.ONE_SIGNAL_URL}/${path}`,
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Authorization: `Basic ${config.ONE_SIGNAL_API_KEY}`,
// 			},
// 			body: body ? JSON.stringify(body) : null,
// 		};
// 	};

// 	// creates a push notification, which makes the call to the One Sigal REST API
// 	const createNotification = async (data) => {
// 		const options = optionsBuilder('post', 'notifications', {
// 			app_id: config.ONE_SIGNAL_APP_ID,
// 			...data,
// 		});
// 		try {
// 			const response = await axios(options);
// 			// return response.data;
// 			console.log(response.data);
// 		} catch (error) {
// 			console.error(error);
// 			return error;
// 		}
// 	};
// };

// const viewNotifcation = async (notificationId) => {
// 	const path = `notifications/${notificationId}?app_id=${ONE_SIGNAL_APP_ID}`;
// 	const options = optionsBuilder('get', path);
// 	try {
// 		const response = await axios(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// // const { id } = await client.createNotification(body);

// module.exports = {
// 	createNotification,
// };

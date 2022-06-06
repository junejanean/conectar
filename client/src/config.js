let URL = '';
if (process.env.REACT_APP_API_URL) {
	URL = process.env.REACT_APP_API_URL;
} else {
	URL = '';
}

console.log('got here url>>', URL);

export const config = {
	URL,
	ONE_SIGNAL_URL: process.env.ONE_SIGNAL_URL,
	ONE_SIGNAL_API_KEY: process.env.ONE_SIGNAL_API_KEY,
	ONE_SIGNAL_APP_ID: process.env.ONE_SIGNAL_APP_ID,
};

export default config;

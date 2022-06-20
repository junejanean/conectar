let URL = '';
if (process.env.REACT_APP_API_URL) {
	URL = process.env.REACT_APP_API_URL;
} else {
	URL = '';
}

console.log('got here url>>', URL);

export const config = {
	URL,
};

export default config;

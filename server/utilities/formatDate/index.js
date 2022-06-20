const format = require('date-fns/format');

function formatDate(date) {
	return format(new Date(date), 'MMMM d, yyyy');
}

module.exports = formatDate;

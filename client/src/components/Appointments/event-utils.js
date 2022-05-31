let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
	{
		id: createEventId(),
		title: 'All-day event',
		start: todayStr,
	},
	{
		id: createEventId(),
		title: 'Timed event',
		start: todayStr + 'T12:00:00',
	},
];

export function createEventId() {
	return String(eventGuid++);
}

// {
// 	title: 'Vacation',

// 	start: '2022-05-04',
// 	end: '2022-05-09',
// 	display: 'background',
// },
// {
// 	title: 'Elizabeth Ward consult',
// 	start: '2022-05-11T8:30:00',
// 	end: '2022-05-11T9:30:00',
// }

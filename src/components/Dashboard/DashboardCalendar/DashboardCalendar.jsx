import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import './DashboardCalendar.scss';
import 'primeicons/primeicons.css';

function DashboardCalendar() {
	const [dates, setDate] = useState();
	const [viewDate, setViewDate] = useState();

	return (
		<div>
			{/* <Calendar inline></Calendar> */}

			<Calendar
				inline
				readOnlyInput
				visible={true}
				value={dates}
				onChange={(e) => setDate(e.value)}
				viewDate={viewDate}
				onViewDateChange={(e) => setViewDate(e.value)}
			></Calendar>
		</div>
	);
}

export default DashboardCalendar;

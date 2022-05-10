import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
// import { INITIAL_EVENTS, createEventId } from './event-utils';
// import ReactTooltip from 'react-tooltip';
import styles from './Appointments.module.scss';
import './Appointments.scss';
import cx from 'classnames';

function Appointments({ setLoggedIn }) {
	const handleDateSelect = (selectInfo) => {
		let title = prompt('Please enter a new title for your event');
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		// if (title) {
		// 	calendarApi.addEvent({
		// 		id: createEventId(),
		// 		title,
		// 		start: selectInfo.startStr,
		// 		end: selectInfo.endStr,
		// 		allDay: selectInfo.allDay,
		// 	});
		// }
	};
	const handleEventClick = (clickInfo) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};

	// const handleTooltip = (info) => {
	// 	const tooltip = new Tooltip(info.el, {
	// 		title: info.event.extendedProps.description,
	// 		placement: 'top',
	// 		trigger: 'hover',
	// 		container: 'body',
	// 	});
	// };

	return (
		<div>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />
					<div className='main-container'>
						<Header setLoggedIn={setLoggedIn} />
						<div className='container'>
							<div className='dashboard'>
								<h1>Appointments</h1>
								<div className={cx(styles.container)}>
									<FullCalendar
										plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
										initialView='dayGridMonth'
										headerToolbar={{
											left: 'prev,next today myCustomButton',
											center: 'title',
											right: 'dayGridMonth,timeGridWeek,timeGridDay',
										}}
										// dateClick={handleDateClick}
										eventContent={renderEventContent}
										editable={true}
										selectable={true}
										selectMirror={true}
										dayMaxEvents={true}
										select={handleDateSelect}
										eventClick={handleEventClick}
										customButtons={{
											myCustomButton: {
												text: 'Add Event',
												click: function () {
													prompt('Please enter a new title for your event');
												},
											},
										}}
										// eventDidMount={handleTooltip}

										events={[
											{
												title: 'Conference',
												description: 'description for Long Event',
												start: '2022-05-23',
												end: '2022-05-26',
											},
											{
												title: 'Vacation',

												start: '2022-05-04',
												end: '2022-05-09',
												display: 'background',
											},
											{
												title: 'Elizabeth Ward consult',
												start: '2022-05-11T8:30:00',
												end: '2022-05-11T9:30:00',
											},
											{ title: 'Mary Ellis consult', date: '2022-05-03' },
											{ title: 'T Longnameman consult', date: '2022-05-11' },
											{
												title: 'Rebecca Krasne',
												start: '2022-05-16T09:30:00',
												end: '2022-05-16T10:30:00',
											},
											{
												title: 'Jeff Clarke',
												start: '2022-05-16T11:30:00',
												end: '2022-05-16T12:30:00',
											},
											{
												title: 'Barbara Diaz',
												start: '2022-05-16T13:30:00',
												end: '2022-05-16T14:30:00',
											},
											{
												title: 'Ray Dalio',
												start: '2022-05-16T15:30:00',
												end: '2022-05-16T16:30:00',
											},
											{
												title: 'Laura Diaz',
												start: '2022-05-19T08:30:00',
												end: '2022-05-19T09:30:00',
											},
											{
												title: 'Rebecca Krasne',
												start: '2022-05-27T09:30:00',
												end: '2022-05-27T10:30:00',
											},
											{
												title: 'Jeff Clarke',
												start: '2022-05-27T11:30:00',
												end: '2022-05-27T12:30:00',
											},
											{
												title: 'Barbara Diaz',
												start: '2022-05-27T13:30:00',
												end: '2022-05-27T14:30:00',
											},
											{
												title: 'Ray Dalio',
												start: '2022-05-27T15:30:00',
												end: '2022-05-27T16:30:00',
											},
											{
												title: 'Howard Stern',
												start: '2022-05-27T14:30:00',
												end: '2022-05-27T15:30:00',
												extendedProps: {
													department: 'Consult',
												},
												description: 'New patient consultation',
											},
											{ title: 'Langley consult', date: '2022-05-12' },
											{
												title: 'Howie Long',
												start: '2022-05-26T10:30:00',
												end: '2022-05-26T11:30:00',
												backgroundColor: '#525f7f',
												extendedProps: {
													department: 'Consult',
												},
												description: 'New patient consultation',
											},
											{ title: 'L Violet', date: '2022-05-18' },
											{ title: 'H Sanchez', date: '2022-05-10' },

											// eventsSet={handleEvents} // called after events are initialized/added/changed/removed
											/* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
										]}
									/>
									<div className='instructions'>
										<h2>Instructions</h2>
										<ul>
											<li>
												Select dates and you will be prompted to create a new
												event
											</li>
											<li>Drag, drop, and resize events</li>
											<li>Click an event to delete it</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function renderEventContent(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText} &nbsp;</b>
			<span>{eventInfo.event.title}</span>
		</>
	);
}

export default Appointments;

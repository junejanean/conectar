import React, { useState, useRef, useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
// import { INITIAL_EVENTS, createEventId } from './event-utils';
// import ReactTooltip from 'react-tooltip';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointments.scss';
import styles from './Appointments.module.scss';
import cx from 'classnames';
import NewAppointment from './NewAppointment.jsx/NewAppointment';
import axios from 'axios';
import config from '../../config';
import { useAuthContext } from '../../hooks/useAuthContext';
import oneSignalNotification from './oneSignal';

function Appointments() {
	const [showModal, setShowModal] = useState(false);
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [notes, setNotes] = useState();
	const [duration, setDuration] = useState();
	const [patient, setPatient] = useState();
	const [selectPatients, setSelectPatients] = useState([]);
	const [type, setType] = useState('');
	const calendarRef = useRef(null);
	const { user } = useAuthContext();

	useEffect(() => {
		(async () => {
			if (user) {
				const selectPatients = await axios.get(
					`${config.URL}/doctors/${user.uid}/patients`
				);
				setSelectPatients(selectPatients.data);

				console.log(selectPatients.data);
			}
		})();
	}, [user]);

	const openModal = () => {
		setShowModal(true);
	};

	const onEventAdded = (e) => {
		let calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent(e);
	};

	// create new Appointment
	const handleSubmit = async (e) => {
		e.preventDefault();
		const onSubmit = await axios.post(config.URL + '/appointments', {
			date: new Date(date),
			type,
			patient,
			notes,
		});
		console.log(onSubmit);
		// oneSignalNotification();

		setShowModal(false);
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
						<Header />
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
										eventClick={handleEventClick}
										dateClick={setShowModal}
										customButtons={{
											myCustomButton: {
												text: 'Add Event',
												click: function () {
													openModal();
												},
											},
										}}
										ref={calendarRef}
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
									{showModal ? (
										<NewAppointment
											setShowModal={setShowModal}
											handleSubmit={handleSubmit}
											onEventAdded={(e) => onEventAdded(e)}
											date={date}
											setDate={setDate}
											type={type}
											setType={setType}
											notes={notes}
											setNotes={setNotes}
											patient={patient}
											setPatient={setPatient}
											selectPatients={selectPatients}
											setSelectPatients={setSelectPatients}
										/>
									) : null}
								</div>
								{/* <div className='instructions'>
									<h2>Instructions</h2>
									<ul>
										<li>
											Select dates and you will be prompted to create a new
											event
										</li>
										<li>Drag, drop, and resize events</li>
										<li>Click an event to delete it</li>
									</ul>
								</div> */}
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

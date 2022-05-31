import React, { useState, useRef, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
// import { INITIAL_EVENTS, createEventId } from './event-utils';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointments.scss';
import styles from './Appointments.module.scss';
import cx from 'classnames';
import NewAppointment from './NewAppointment.jsx/NewAppointment';
import EditAppointment from './EditAppointment/EditAppointment';
import axios from 'axios';
import config from '../../config';
import { useAuthContext } from '../../hooks/useAuthContext';
import oneSignalNotification from './oneSignal';
import { format, parseISO } from 'date-fns';

function Appointments() {
	console.log(1);
	const [apptDetails, setApptDetails] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [notes, setNotes] = useState();
	const [duration, setDuration] = useState();
	const [patient, setPatient] = useState();
	const [type, setType] = useState('');
	const [calEvent, setCalEvent] = useState({
		start: date,
		title: patient,
		description: type,
		notes: notes,
	});
	const [selectPatients, setSelectPatients] = useState([]);
	const calendarRef = useRef(null);
	const { user } = useAuthContext();

	const fetchApptCallback = useCallback(() => {
		fetchAppointments();
	}, []);

	useEffect(() => {
		(async () => {
			if (user) {
				const selectPatients = await axios.get(
					`${config.URL}/doctors/${user.uid}/patients`
				);
				setSelectPatients(selectPatients.data);
				// console.log(selectPatients.data);
			}

			fetchApptCallback();
		})();
	}, [user, fetchApptCallback]);

	const fetchAppointments = async (appts) => {
		const res = await axios.get('http://localhost:5000/appointments');

		appts = res.data;
		const apptDB = appts.map((d) => {
			return {
				description: d.type,
				start: d.date,
				title: d.patient.lastName,
				notes: d.notes,
			};
		});
		// console.log(apptDB);
		console.count();
		setApptDetails(apptDB);
	};

	const openModal = () => {
		setShowModal(true);
	};

	// add new appointment to the Calendar
	const onEventAdded = (e) => {
		console.log('event working');
		let calendarApi = calendarRef.current.getApi();
		console.log(calendarApi);
		calendarApi.addEvent(e);
	};

	// submit form to create new Appointment
	const handleSubmit = async (e) => {
		e.preventDefault();

		// fullcalandar event
		onEventAdded({
			description: type,
			start: date,
			title: patient.lastName,
		});

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

	// calEvent = {
	// 	description: type,
	// 	start: date,
	// 	title: patient.lastName,
	// };

	const handleEventClick = (selectInfo) => {
		let calendarApi = selectInfo.view.calendar;
		let apptData = {
			start: selectInfo.event.start,
			title: selectInfo.event.title,
			description: selectInfo.event.extendedProps.description,
			notes: selectInfo.event.extendedProps.notes,
		};

		console.log(selectInfo);
		console.log(selectInfo.event.title);
		console.log(selectInfo.event.start);
		console.log(selectInfo.event.extendedProps.description);
		console.log(selectInfo.event.extendedProps.notes);
		setCalEvent(apptData);
		setShowEditModal(true);
	};

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
											left: 'prev,next myCustomButton',
											center: 'title',
											right: 'dayGridMonth,timeGridWeek,timeGridDay',
										}}
										eventContent={renderEventContent}
										editable={false}
										selectable={true}
										selectMirror={true}
										dayMaxEvents={true}
										eventClick={handleEventClick}
										customButtons={{
											myCustomButton: {
												text: 'Add Event',
												click: function () {
													openModal();
												},
											},
										}}
										ref={calendarRef}
										eventAdd={(e) => handleSubmit(e)}
										// eventDidMount={}
										events={apptDetails}
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

									{showEditModal ? (
										<EditAppointment
											setShowEditModal={setShowEditModal}
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
											calEvent={calEvent}
											setCalEvent={setCalEvent}
										/>
									) : null}
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
			<span>{eventInfo.timeText} &nbsp;</span>
			<span>{eventInfo.event.title}</span>
		</>
	);
}

export default Appointments;

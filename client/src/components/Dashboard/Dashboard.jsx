import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DashboardCalendar from './DashboardCalendar/DashboardCalendar';
import DashboardStats from './DashboardStats/DashboardStats';
import axios from 'axios';
import { format, parseISO, isValid, isToday } from 'date-fns';
import { Link } from 'react-router-dom';
import config from '../../config';

function Dashboard() {
	const [apptDetails, setApptDetails] = useState();
	const [selectedAppointment, setSelectedAppointment] = useState([]);
	const fullDateToday = format(new Date(), 'MMMM d, yyyy');
	const today = format(new Date(), 'EEEE');
	const todayJS = new Date().toDateString();

	const handleToggle = (index) => {
		if (selectedAppointment.includes(index)) {
			return setSelectedAppointment((prevState) =>
				prevState.filter((i) => i !== index)
			);
		}
		setSelectedAppointment((prevState) => [...prevState, index]);
	};

	const fetchAppointments = async () => {
		const res = await axios.get(config.URL + 'appointments', {
			params: {
				_limit: 100,
				sort: 'date',
			},
		});
		setApptDetails(res.data);

		console.log('response via db: ', res.data);
	};

	useEffect(() => {
		fetchAppointments();
	}, []);

	const todaysAppointments =
		apptDetails
			?.filter((d) => {
				return isToday(new Date(d.date));
			})
			.filter((d) => {
				return d.notes === 'notes';
			}) || [];

	console.log(todaysAppointments);

	return (
		<>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />
					<div className='main-container'>
						<Header />
						<div className='dashboard'>
							<h1>Dashboard</h1>

							<DashboardStats />
							<div className='container grid'>
								<div className='card'>
									<div className='calendar'>
										<h2 className='sm'>CALENDAR</h2>
										<DashboardCalendar />
										<Link to='/Appointments'>
											<div className='card add-appt'>
												<h4>Book An Appointment</h4>
												<i className='fa-solid fa-plus'></i>
											</div>
										</Link>
										<Link to='/Appointments'>
											<div className='card add-appt blocked'>
												<h4>Block Time</h4>
												<i className='fa-solid fa-ban'></i>
											</div>
										</Link>
									</div>
								</div>
								<div className='card'>
									<div className='appointments'>
										<div className='card appt-header'>
											<p className='confirm'>
												{todaysAppointments.length === 0
													? 'No'
													: todaysAppointments.length}{' '}
												Confirmed Appointments Today
											</p>
											<p className='date'>
												Today is {today} {fullDateToday}
											</p>
										</div>
										{todaysAppointments &&
											todaysAppointments.map((d, i) => {
												const parsedDate = parseISO(d.date);

												const time = isValid(parsedDate)
													? format(parsedDate, 'K:mm a')
													: null;

												const appointmentIsBlocked = d.type === 'blocked';

												const appointmentHasBeenSelected =
													selectedAppointment.includes(i);

												let chevronIcon = appointmentHasBeenSelected
													? 'fa-chevron-down'
													: 'fa-chevron-up';

												if (appointmentIsBlocked) {
													chevronIcon = '';
												}

												return (
													<div className='card-wrapper' key={i}>
														<div className='card single-appt'>
															<p className='time'>{time || 'N/A'}</p>
															{d.patient && (
																<p className='name'>
																	{d.patient.firstName} {d.patient.lastName}
																</p>
															)}
															<p className='status'>Confirmed</p>
															<p className='appt-type'>{d.type}</p>
															<i
																className={`fa-solid p-1 ${chevronIcon}`}
																onClick={() => handleToggle(i)}
															></i>
														</div>
														{!appointmentIsBlocked &&
															appointmentHasBeenSelected && (
																<div className='appt-details'>
																	<div className='card single-appt'>
																		<p className='description'>{d.notes}</p>
																	</div>
																</div>
															)}
													</div>
												);
											})}
									</div>
								</div>
							</div>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Dashboard.module.scss';
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
						<div className={styles.dashboard}>
							<h1>Dashboard</h1>

							<DashboardStats />
							<div
								className={cx(
									['container'],
									[styles.container],
									[styles.grid],
									['grid']
								)}
							>
								<div className={cx(['card'])}>
									<div className={styles.calendar}>
										<h2 className='sm'>CALENDAR</h2>
										<DashboardCalendar />
										<Link to='/Appointments'>
											<div className={cx([styles['add-appt']], ['card'])}>
												<h4>Book An Appointment</h4>
												<i className='fa-solid fa-plus'></i>
											</div>
										</Link>
										<Link to='/Appointments'>
											<div
												className={cx(
													[styles['add-appt']],
													['card'],
													styles.blocked
												)}
											>
												<h4>Block Time</h4>
												<i className='fa-solid fa-ban'></i>
											</div>
										</Link>
									</div>
								</div>
								<div className='card'>
									<div className={styles.appointments}>
										<div className={cx([styles['appt-header']], ['card'])}>
											<p className={styles.confirm}>
												{todaysAppointments.length === 0
													? 'No'
													: todaysAppointments.length}{' '}
												Confirmed Appointments Today
											</p>
											<p className={styles.date}>
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
														<div
															className={cx([styles['single-appt']], ['card'])}
														>
															<p className={styles.time}>{time || 'N/A'}</p>
															{d.patient && (
																<p className={styles.name}>
																	{d.patient.firstName} {d.patient.lastName}
																</p>
															)}
															<p className={styles.status}>Confirmed</p>
															<p className={styles['appt-type']}>{d.type}</p>
															<i
																className={`fa-solid p-1 ${chevronIcon}`}
																onClick={() => handleToggle(i)}
															></i>
														</div>
														{!appointmentIsBlocked &&
															appointmentHasBeenSelected && (
																<div className={styles['appt-details']}>
																	<div
																		className={cx(
																			[styles['single-appt']],
																			[styles.card],
																			['card']
																		)}
																	>
																		<p className={styles.description}>
																			{d.notes}
																		</p>
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

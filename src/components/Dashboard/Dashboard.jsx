import React, { useState } from 'react';
import './Dashboard.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DashboardCalendar from './DashboardCalendar/DashboardCalendar';
import DashboardStats from './DashboardStats/DashboardStats';
import { data } from './data';

function Dashboard() {
	const [apptData, setApptData] = useState(data);

	const handleToggle = (index) => {
		let getApptData = [...apptData];
		getApptData = getApptData.map((g, i) => {
			if (i === index) {
				g.toggle = !g.toggle;
			}
			return g;
		});

		setApptData(getApptData);
	};

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
										<div className='card add-appt'>
											<h4>Book An Appointment</h4>
											<i className='fa-solid fa-plus'></i>
										</div>
										<div className='card add-appt blocked'>
											<h4>Block Time</h4>
											<i className='fa-solid fa-ban'></i>
										</div>
									</div>
								</div>
								<div className='card'>
									<div className='appointments'>
										<div className='card appt-header'>
											<p className='confirm'>5 Confirmed Appointments Today</p>
											<p className='date'>April 20, 2022</p>
										</div>
										{apptData.map((d, i) => {
											const {
												time,
												name,
												status,
												apptType,
												description,
												toggle,
											} = d;
											return (
												<div className='card-wrapper' key={i}>
													<div className='card single-appt'>
														<p className='time'>{time}</p>
														<p className='name'>{name}</p>
														<p className='status'>{status}</p>
														<p className='appt-type'>{apptType}</p>
														<i
															className={`fa-solid p-1 ${
																toggle ? 'fa-chevron-down' : 'fa-chevron-up'
															}`}
															onClick={() => handleToggle(i)}
														></i>
													</div>
													{apptType !== 'blocked' && toggle && (
														<div className='appt-details'>
															<div className='card single-appt'>
																<p className='description'>{description}</p>
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

import React, { useState } from 'react';
import styles from './Patients.module.scss';
import './Patients.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

function Dashboard({ setLoggedIn }) {
	const [tabs, setTabs] = useState(['Profile', 'Appointments']);
	const [currentTab, setCurrentTab] = useState('Profile');
	const [toggleApptDetails, setToggleApptDetails] = useState(false);

	const switchTab = (tab) => setCurrentTab(tab);

	const handleClick = () => {
		setToggleApptDetails(!toggleApptDetails);
	};
	const navigate = useNavigate();
	const handelLogout = () => {
		localStorage.removeItem('loggedIn');
		setLoggedIn(false);
		navigate('/');
	};

	return (
		<>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />

					<div className='main-container'>
						<Header setLoggedIn={setLoggedIn} />
						<div className='dashboard'>
							<h1>Patients</h1>

							<div className={cx([styles.container], ['container'], ['grid'])}>
								<div className={cx([styles.card], ['card'], [styles.patient])}>
									<div className={cx(styles['patient-list'])}>
										<div
											className={cx(['card'], styles.patient, styles.search)}
										>
											<input type='text' placeholder='Search' />
											<i class='fa fa-search'></i>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Mary Ellis</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Eliza Doolittle</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Hector Fernandez</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Ralph Machio</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Howard Stern</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
										<div className={cx(['card'], styles.card, styles.patient)}>
											<p>Rachel Zo</p>
										</div>
									</div>
								</div>
								<div className={cx([styles.card], ['card'], [styles.details])}>
									<div className='patient-profile'>
										<div className='patient-header'>
											{tabs.map((t) => {
												return (
													<div
														onClick={() => switchTab(t)}
														className={`card profile ${
															currentTab === t ? '' : 'non-active'
														}`}
													>
														<h4>{t}</h4>
													</div>
												);
											})}
											{/* <div onClick={handleClick} className='card profile'>
											<h4>Profile</h4>
										</div>

										<div
											onClick={handleClick}
											className='card appts non-active'
										>
											<h4>Appointments</h4>
										</div> */}
										</div>
										{currentTab === 'Profile' && (
											<>
												<div className='card profile-details'>
													<p>
														<b>Name:</b> <span>Mary Ellis</span>
													</p>
													<p>
														<b>DOB:</b> <span>10/02/85</span>
													</p>
													<p>
														<b> Gender:</b> <span>Female</span>
													</p>
													<p>
														<b> Address:</b> <span>234 Hideaway Rd</span>
													</p>
													<p>
														<b>City:</b> <span>Anywhere</span>
													</p>
													<p>
														<b>State:</b> <span>TX</span>
													</p>
													<p>
														<b>Zip:</b> <span>79834</span>
													</p>
													<p>
														<b>Phone:</b> <span>512-374-6767</span>{' '}
													</p>
													<p>
														<b>Email:</b> <span>maryellis@gmail.com</span>
													</p>
												</div>
												<div className='card profile-history'>
													<div className='history'>
														<h4>Medical History</h4>
														<p>
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit. Reprehenderit architecto nobis molestiae
															tenetur, veritatis sint a alias doloribus aliquid
															asperiores aut eveniet minus consequatur, et
															assumenda. Enim laboriosam minus expedita.
														</p>
														<p>
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit. Reprehenderit architecto nobis molestiae
															tenetur, veritatis sint a alias doloribus aliquid
															asperiores aut eveniet minus consequatur, et
															assumenda. Enim laboriosam minus expedita.
														</p>
													</div>
													<div className='history'>
														<h4>Notes</h4>
														<p>
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit. Reprehenderit architecto nobis molestiae
															tenetur, veritatis sint a alias doloribus aliquid
															asperiores aut eveniet minus consequatur, et
															assumenda. Enim laboriosam minus expedita.
														</p>
														<p>
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit. Reprehenderit architecto nobis molestiae
															tenetur, veritatis sint a alias doloribus aliquid
															asperiores aut eveniet minus consequatur, et
															assumenda. Enim laboriosam minus expedita.
														</p>
													</div>
												</div>
											</>
										)}

										{currentTab === 'Appointments' && (
											<div className='appointments'>
												<div className='card single-appt'>
													<p className='time'>8:30 AM </p>
													<p className='name'>12/13/2019</p>
													<p className='status'></p>
													<p className='appt-type'>Consult</p>
													<i class='p-1'></i>
												</div>

												<div className='card single-appt'>
													<p className='time'>10:00 AM </p>
													<p className='name'>1/26/2020</p>
													<p className='status'></p>
													<p className='appt-type'>Test Results</p>

													<i
														onClick={handleClick}
														class='fa-solid fa-chevron-up p-1'
													></i>
												</div>
												{toggleApptDetails ? (
													<div className='appt-details'>
														<div className='card'>
															<p className='description'>
																Lorem ipsum dolor sit amet consectetur
																adipisicing elit. Doloremque, accusamus? Beatae,
																error tempora! Possimus, magni?
															</p>
														</div>
													</div>
												) : (
													<> </>
												)}
												<div className='card single-appt'>
													<p className='time'>11:30 AM</p>
													<p className='name'>3/26/2020</p>
													<p className='status'></p>
													<p className='appt-type'>Follow-up</p>
													<i class='p-1'></i>
												</div>
											</div>
										)}
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

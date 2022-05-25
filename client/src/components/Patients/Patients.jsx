import React, { useState, useEffect, useCallback } from 'react';
import styles from './Patients.module.scss';
import './Patients.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import cx from 'classnames';
import PatientList from './PatientList/PatientList';
import AddPatient from './AddPatient/AddPatient';
import axios from 'axios';

function Patients() {
	const [tabs] = useState(['Profile', 'Appointments']);
	const [currentTab, setCurrentTab] = useState('Profile');
	const [toggleApptDetails, setToggleApptDetails] = useState(false);
	const [patient, setPatient] = useState([]);
	const [currentPatient, setCurrentPatient] = useState({});
	const [hideDefaultMessage, setHideDefaultMessage] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [addPatient, setAddPatient] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);
	const [error, setError] = useState(null);

	const [firstName, setFirstName] = useState(currentPatient.firstName);
	const [lastName, setLastName] = useState(currentPatient.lastName);
	const [birthDate, setBirthDate] = useState(currentPatient.birthDate);
	const [gender, setGender] = useState(currentPatient.gender);
	const [email, setEmail] = useState(currentPatient.email);
	const [phone, setPhone] = useState(currentPatient.phone);
	const [address, setAddress] = useState(currentPatient.address);
	const [city, setCity] = useState(currentPatient.city);
	const [state, setState] = useState(currentPatient.state);
	const [zip, setZip] = useState(currentPatient.zip);

	const url = process.env.REACT_APP_API_URL;

	const openModal = () => {
		setShowModal(true);
	};

	const switchTab = (tab) => setCurrentTab(tab);
	const handleClose = () => setUpdateMode(false);

	const handleClick = () => {
		setToggleApptDetails(!toggleApptDetails);
	};
	const handleCurrentPatient = (currPatient) => {
		setCurrentPatient(currPatient);
		setHideDefaultMessage(true);
	};

	const handleUpdate = async () => {
		try {
			const res = await axios.put(url + currentPatient._id, {
				lastName,
				birthDate,
				firstName,
				gender,
				email,
				phone,
				address,
				city,
				state,
				zip,
			});
			setCurrentPatient(res.data);
			setPatient((prevState) =>
				prevState.map((patient) => {
					if (patient._id === res.data._id) {
						return res.data;
					}

					return patient;
				})
			);
			alert('Patient updated!');

			setUpdateMode(false);
			setError(null);
		} catch (error) {
			throw new Error('Could not update the patient');
		}
	};

	const fetchPatients = async () => {
		const res = await axios.get(url, {
			params: {
				_limit: 200,
				sort: 'lastName',
			},
		});
		setPatient(res.data);
	};

	useEffect(() => {
		fetchPatients();
	}, []);

	useEffect(() => {
		if (currentPatient._id) {
			setFirstName(currentPatient.firstName);
			setLastName(currentPatient.lastName);
			setBirthDate(currentPatient.birthDate);
			setGender(currentPatient.gender);
			setEmail(currentPatient.email);
			setPhone(currentPatient.phone);
			setAddress(currentPatient.address);
			setCity(currentPatient.city);
			setState(currentPatient.state);
			setZip(currentPatient.zip);
		}
	}, [currentPatient]);

	return (
		<>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />

					<div className='main-container'>
						<Header />
						<div className='dashboard'>
							<h1>Patients</h1>

							<div className={cx(['container'], ['grid'])}>
								<div
									className={cx(
										[styles.card],
										['card'],
										[styles.patient],
										[styles.scroll]
									)}
								>
									<PatientList
										patient={patient}
										handleCurrentPatient={handleCurrentPatient}
										currentPatient={currentPatient}
									/>
								</div>
								<div className='details-wrapper'>
									<div
										className={cx(
											[styles.card],
											['card'],
											[styles.details],
											[styles.scroll]
										)}
									>
										{handleCurrentPatient ? (
											<div
												className={cx([styles.default], ['row'])}
												onChange={handleCurrentPatient}
											>
												<div className='row'>
													<h2>
														To view a patient, click on the list to the left.
													</h2>
												</div>
												<div className='row'>
													<button className='btn' onClick={openModal}>
														Add New Patient
													</button>
												</div>
												{showModal ? (
													<AddPatient setShowModal={setShowModal} />
												) : null}
											</div>
										) : (
											<></>
										)}

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
											</div>

											{currentTab === 'Profile' && (
												<>
													<div className='card-wrapper '>
														{Object.keys(currentPatient).length !== 0 && (
															<>
																<div className='card profile-details'>
																	<div className='title'>
																		{' '}
																		<h3 key={currentPatient._id}>
																			{updateMode ? (
																				<div>
																					<label>First Name</label>
																					<input
																						type='text'
																						value={firstName}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setFirstName(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<>{currentPatient.firstName} </>
																			)}

																			{updateMode ? (
																				<div>
																					<label>Last Name</label>
																					<input
																						type='text'
																						value={lastName}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setLastName(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<>{currentPatient.lastName}</>
																			)}
																		</h3>
																		<i
																			className='fa-solid fa-pen-to-square'
																			onClick={() => setUpdateMode(true)}
																		></i>
																	</div>

																	<div className='title'>
																		<small>
																			Patient since December 2019 with{' '}
																			<span>10 Appointments</span>
																		</small>
																	</div>

																	<div className='card detail basic'>
																		<p>
																			<b>DOB:</b>
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={birthDate}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setBirthDate(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span> {currentPatient.birthDate}</span>
																			)}
																		</p>

																		<p>
																			<b> Gender:</b>{' '}
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={gender}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setGender(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.gender}</span>
																			)}
																		</p>
																		<p>
																			<b>Phone:</b>
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={phone}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setPhone(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.phone}</span>
																			)}
																		</p>
																		<p>
																			<b>Email:</b>
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={email}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setEmail(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.email}</span>
																			)}
																		</p>
																		<p> </p>
																		<p>
																			<b> Address:</b>{' '}
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={address}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setAddress(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.address}</span>
																			)}
																		</p>
																		<p>
																			<b>City:</b>{' '}
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={city}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setCity(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.city}</span>
																			)}
																		</p>
																		<p>
																			<b>State:</b>{' '}
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={state}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setState(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.state}</span>
																			)}
																		</p>
																		<p>
																			<b>Zip:</b>
																			{updateMode ? (
																				<div className='form-group update inputs'>
																					<input
																						type='text'
																						value={zip}
																						className=''
																						autoFocus
																						onChange={(e) =>
																							setZip(e.target.value)
																						}
																					/>
																				</div>
																			) : (
																				<span>{currentPatient.zip}</span>
																			)}
																		</p>
																	</div>

																	<div className='detail-wrapper'>
																		<div className='card detail width3'>
																			<h6>Details</h6>

																			<p>
																				<b>Weight:</b>
																				<span> 130 lbs</span>
																			</p>
																			<p>
																				<b>Height:</b>
																				<span> 5'4"</span>
																			</p>
																			<p>
																				<small>
																					Add Detail{' '}
																					<i className='fa-solid fa-plus'></i>
																				</small>
																			</p>
																		</div>
																		<div className='card detail width7'>
																			<h6>Allergies</h6>

																			<p>
																				Antibiotics containing sulfonamidesn{' '}
																				<span className='red'>High</span>
																			</p>
																			<p>
																				Penicillin{' '}
																				<span className='deepblue'>Medium</span>
																			</p>
																			<p>
																				<small>
																					Add Allergy{' '}
																					<i className='fa-solid fa-plus'></i>
																				</small>
																			</p>
																		</div>
																	</div>
																	{updateMode ? (
																		<div className='row form-buttons'>
																			<button
																				onClick={handleClose}
																				className='btn btn-cancel'
																			>
																				Cancel
																			</button>
																			<button
																				onClick={handleUpdate}
																				className='btn'
																			>
																				Update
																			</button>
																			{error && <p>{error}</p>}
																		</div>
																	) : (
																		<></>
																	)}
																</div>
																<div className='card profile-history'>
																	<div className='history'>
																		<div className='title'>
																			{' '}
																			<h4>Medical History</h4>
																			<i className='fa-solid fa-pen-to-square'></i>
																		</div>
																		<p>
																			Lorem ipsum dolor sit amet consectetur
																			adipisicing elit. Reprehenderit architecto
																			nobis molestiae tenetur, veritatis sint a
																			alias doloribus aliquid asperiores aut
																			eveniet minus consequatur, et assumenda.
																			Enim laboriosam minus expedita.
																		</p>
																		<p>
																			Lorem ipsum dolor sit amet consectetur
																			adipisicing elit. Reprehenderit architecto
																			nobis molestiae tenetur, veritatis sint a
																			alias doloribus aliquid asperiores aut
																			eveniet minus consequatur, et assumenda.
																			Enim laboriosam minus expedita.
																		</p>
																	</div>
																</div>
																<div className='card profile-history'>
																	<div className='history'>
																		<div className='title'>
																			{' '}
																			<h4>Notes</h4>
																			<i className='fa-solid fa-pen-to-square'></i>
																		</div>
																		<p>
																			Lorem ipsum dolor sit amet consectetur
																			adipisicing elit. Reprehenderit architecto
																			nobis molestiae tenetur, veritatis sint a
																			alias doloribus aliquid asperiores aut
																			eveniet minus consequatur, et assumenda.
																			Enim laboriosam minus expedita.
																		</p>
																		<p>
																			Lorem ipsum dolor sit amet consectetur
																			adipisicing elit. Reprehenderit architecto
																			nobis molestiae tenetur, veritatis sint a
																			alias doloribus aliquid asperiores aut
																			eveniet minus consequatur, et assumenda.
																			Enim laboriosam minus expedita.
																		</p>
																	</div>
																</div>
															</>
														)}
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
														<i className='p-1'></i>
													</div>

													<div className='card single-appt'>
														<p className='time'>10:00 AM </p>
														<p className='name'>1/26/2020</p>
														<p className='status'></p>
														<p className='appt-type'>Test Results</p>

														<i
															onClick={handleClick}
															className='fa-solid fa-chevron-up p-1'
														></i>
													</div>
													{toggleApptDetails ? (
														<div className='appt-details'>
															<div className='card'>
																<p className='description'>
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. Doloremque, accusamus?
																	Beatae, error tempora! Possimus, magni?
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
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>2:30 PM</p>
														<p className='name'>6/20/2020</p>
														<p className='status'></p>
														<p className='appt-type'>Test Results</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>8:30 AM</p>
														<p className='name'>9/30/2020</p>
														<p className='status'></p>
														<p className='appt-type'>Follow-up</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>10:30 AM</p>
														<p className='name'>12/11/2020</p>
														<p className='status'></p>
														<p className='appt-type'>Check-up</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>9:00 AM</p>
														<p className='name'>1/26/2021</p>
														<p className='status'></p>
														<p className='appt-type'>Test Results</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>1:30 PM</p>
														<p className='name'>3/16/2021</p>
														<p className='status'></p>
														<p className='appt-type'>Follow-up</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>9:30 AM</p>
														<p className='name'>4/5/2021</p>
														<p className='status'></p>
														<p className='appt-type'>Test Results</p>
														<i className='p-1'></i>
													</div>
													<div className='card single-appt'>
														<p className='time'>11:30 AM</p>
														<p className='name'>9/18/2021</p>
														<p className='status'></p>
														<p className='appt-type'>Check-up</p>
														<i className='p-1'></i>
													</div>
												</div>
											)}
										</div>
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

export default Patients;

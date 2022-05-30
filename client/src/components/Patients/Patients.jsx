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
import PatientDetails from './PatientDetails/PatientDetails';

function Patients() {
	const [patient, setPatient] = useState([]);
	const [currentPatient, setCurrentPatient] = useState({});
	const [hideDefaultMessage, setHideDefaultMessage] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [addPatient, setAddPatient] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);
	const [updateModeHistory, setUpdateModeHistory] = useState(false);
	const [updateModeNotes, setUpdateModeNotes] = useState(false);
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
	const [medicalHistory, setMedicalHistory] = useState(
		currentPatient.medicalHistory
	);
	const [notes, setNotes] = useState(currentPatient.notes);

	const url = process.env.REACT_APP_API_URL;

	const openModal = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setUpdateMode(false);
		setUpdateModeHistory(false);
		setUpdateModeNotes(false);
	};

	const handleCurrentPatient = (currPatient) => {
		setCurrentPatient(currPatient);
		setHideDefaultMessage(true);
	};

	const fetchPatients = async () => {
		const res = await axios.get(url + '/patients', {
			params: {
				_limit: 200,
				sort: 'lastName',
			},
		});
		setPatient(res.data);
	};

	const handleUpdate = async () => {
		try {
			const res = await axios.put(url + '/patients' + currentPatient._id, {
				firstName,
				lastName,
				birthDate,
				gender,
				email,
				phone,
				address,
				city,
				state,
				zip,
				medicalHistory,
				notes,
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
			setUpdateModeHistory(false);
			setUpdateModeNotes(false);
			setError(null);
		} catch (error) {
			setError();
			throw new Error('Could not update the patient');
		}
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
			setMedicalHistory(currentPatient.medicalHistory);
			setNotes(currentPatient.notes);
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
										<PatientDetails
											currentPatient={currentPatient}
											setPatient={setPatient}
											setCurrentPatient={setCurrentPatient}
											setUpdateMode={setUpdateMode}
											updateMode={updateMode}
											updateModeHistory={updateModeHistory}
											setUpdateModeHistory={setUpdateModeHistory}
											updateModeNotes={updateModeNotes}
											setUpdateModeNotes={setUpdateModeNotes}
											handleClose={handleClose}
											handleUpdate={handleUpdate}
											firstName={firstName}
											lastName={lastName}
											birthDate={birthDate}
											email={email}
											phone={phone}
											address={address}
											city={city}
											state={state}
											zip={zip}
											medicalHistory={medicalHistory}
											notes={notes}
											setGender={setGender}
											setFirstName={setFirstName}
											setLastName={setLastName}
											setBirthDate={setBirthDate}
											setEmail={setEmail}
											setPhone={setPhone}
											setAddress={setAddress}
											setCity={setCity}
											setState={setState}
											setZip={setZip}
											setMedicalHistory={setMedicalHistory}
											setNotes={setNotes}
										/>
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

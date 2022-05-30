import React, { useState } from 'react';
import styles from '../Patients.module.scss';
// import axios from 'axios';
import '../Patients.scss';
import cx from 'classnames';

function PatientList(props) {
	const { patient, handleCurrentPatient, currentPatient } = props;

	const [searchField, setSearchField] = useState('');

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div className={cx(styles['patient-list'])}>
			<div className={cx(['card'], styles.patient, styles.search)}>
				<input type='text' placeholder='Search' />
				<i onChange={handleChange} className='fa fa-search'></i>
			</div>
			{patient.map((p) => (
				<div
					onClick={() => handleCurrentPatient(p)}
					className={cx(
						['card'],
						styles.card,
						styles.patient,
						currentPatient._id === p._id ? [styles['selected']] : ''
					)}
				>
					<p key={p._id}>
						{p.firstName} {p.lastName}
					</p>
				</div>
			))}
		</div>
	);
}

export default PatientList;

import React, { useState } from 'react';
import styles from '../Patients.module.scss';
// import axios from 'axios';
import '../Patients.scss';
import cx from 'classnames';

function PatientList(props) {
	const { patient, handleCurrentPatient, currentPatient } = props;

	const [searchField, setSearchField] = useState('');
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState('');

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};
	const handleFilter = (e) => {
		const searchWord = e.target.value;
		setWordEntered(searchWord);
		const newFilter = patient.filter((value) => {
			return (
				value.firstName.toLowerCase().includes(searchWord.toLowerCase()) ||
				value.lastName.toLowerCase().includes(searchWord.toLowerCase())
			);
		});
		console.log(newFilter);
		setFilteredData(newFilter);
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered('');
	};
	return (
		<div className={cx(styles['patient-list'])}>
			<div className={cx(['card'], styles.patient, styles.search)}>
				<input
					type='text'
					placeholder='Search'
					onChange={handleFilter}
					value={wordEntered}
				/>

				{wordEntered.length === 0 ? (
					<i onChange={handleChange} className='fa fa-search'></i>
				) : (
					<i class='fa-solid fa-xmark' id='clear-btn' onClick={clearInput}></i>
				)}
			</div>
			{wordEntered.length === 0 ? (
				<>
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
				</>
			) : (
				<>
					{filteredData.map((p) => (
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
				</>
			)}
		</div>
	);
}

export default PatientList;

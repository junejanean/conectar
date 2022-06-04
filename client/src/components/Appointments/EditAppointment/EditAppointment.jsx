import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import styles from '../Appointments.module.scss';
import DateTimePicker from 'react-datepicker';
import cx from 'classnames';

function EditAppointment(props) {
	const {
		setShowEditModal,
		onEventChange,
		handleUpdate,
		selectPatients,
		setSelectPatients,
		date,
		setDate,
		patient,
		setPatient,
		type,
		setType,
		notes,
		setNotes,
		calEvent,
		setCalEvent,
	} = props;
	const [error, setError] = useState(null);
	// setHours(setMinutes(new Date(), 30), 16)

	// close the modal when clicking outside the modal.
	const modalRef = useRef();
	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowEditModal(false);
		}
	};

	return ReactDom.createPortal(
		<div className='modal-container'>
			<div
				className={cx(styles.modal, ['modal'])}
				ref={modalRef}
				onClick={closeModal}
			>
				<div className='card profile-details'>
					<button onClick={() => setShowEditModal(false)}>X</button>
					<div className='card-body'>
						<h2>Edit Appointment</h2>
						<form
							className={cx(
								styles['form-group'],
								['form-group'],
								['update'],
								styles['update']
							)}
							onSubmit={handleUpdate}
							action=''
						>
							<div>
								<div className={cx(styles.row, ['row'])}>
									<label>Patient:</label>
									<select
										name='type'
										value={patient}
										onChange={(e) => setPatient(e.target.value)}
									>
										<option value={calEvent.title} selected>
											{calEvent.title}
										</option>
										{selectPatients.map((p) => (
											<option key={p._id} value={p._id}>
												{p.firstName} {p.lastName}
											</option>
										))}
									</select>
								</div>
								<div className={cx(styles.row, ['row'])}>
									<label>Type:</label>
									<select
										name='type'
										value={type}
										onChange={(e) => setType(e.target.value)}
									>
										<option value={calEvent.description}>
											{calEvent.description}
										</option>
										<option value='Consult'>Consult</option>
										<option value='New Patient'>New Patient</option>
										<option value='Follow Up'>Follow Up</option>
										<option value='Test Results'>Test Results</option>
									</select>
								</div>
								<div className={cx(styles.row, ['row'])}>
									<label htmlFor=''>Date & Time</label>
									<DateTimePicker
										selected={calEvent.start}
										onChange={(date) => setDate(date)}
										showTimeSelect
										dateFormat='MMMM d, yyyy h:mm aa'
									/>
								</div>
								<div className='row'>
									<label htmlFor=''>Notes</label>
									<textarea
										onChange={(e) => setNotes(e.target.value)}
										value={calEvent.notes}
										name='notes'
										id=''
										cols='30'
										rows='5'
									></textarea>
								</div>

								<div className={cx(styles.privacy, ['row'], ['my-2'])}></div>
								<div className='row form-buttons'>
									<button
										type='submit'
										className='btn'
										onEventChange={(e) => onEventChange(e)}
									>
										Edit Apppointment
									</button>
									{error && <p>{error}</p>}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default EditAppointment;

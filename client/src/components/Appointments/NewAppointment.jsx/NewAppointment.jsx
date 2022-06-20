import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import styles from '../Appointments.module.scss';
import DateTimePicker from 'react-datepicker';
import cx from 'classnames';

function NewAppointment(props) {
	const {
		setShowModal,
		onEventAdded,
		handleSubmit,
		selectPatients,
		date,
		setDate,
		patient,
		setPatient,
		type,
		setType,
		notes,
		setNotes,
		mobile,
		setMobile,
	} = props;

	// close the modal when clicking outside the modal.
	const modalRef = useRef();
	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	const clearInput = () => {
		setMobile('');
	};

	return ReactDom.createPortal(
		<div className='modal-container'>
			<div
				className={cx(styles.modal, ['modal'])}
				ref={modalRef}
				onClick={closeModal}
			>
				<div className='card profile-details'>
					<button onClick={() => setShowModal(false)}>X</button>
					<div className='card-body'>
						<h2>Add New Appointment</h2>
						<form
							className={cx(
								styles['form-group'],
								['form-group'],
								['update'],
								styles['update']
							)}
							onSubmit={handleSubmit}
							action=''
						>
							<div>
								<div className={cx(styles.row, ['row'])}>
									<label>Patient:</label>
									<select
										name='patient'
										value={patient}
										onChange={(e) => setPatient(e.target.value)}
									>
										<option
											value='Select Patient'
											selected
											defaultValue
											disabled
										>
											Select Patient
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
										<option value='' defaultValue disabled>
											Select Appointment Type
										</option>
										<option value='Consult'>Consult</option>
										<option value='New Patient'>New Patient</option>
										<option value='Follow Up'>Follow Up</option>
										<option value='Test Results'>Test Results</option>
									</select>
								</div>
								<div className={cx(styles.row, styles.picker, ['row'])}>
									<label htmlFor=''>Date & Time</label>
									<DateTimePicker
										selected={date}
										onChange={(date) => setDate(date)}
										showTimeSelect
										dateFormat='MMMM d, yyyy h:mm aa'
									/>
								</div>
								<div className='row'>
									<label htmlFor=''>Notes</label>
									<textarea
										onChange={(e) => setNotes(e.target.value)}
										value={notes}
										name='notes'
										id=''
										cols='30'
										rows='5'
									></textarea>
								</div>
								<div className={cx(styles.row, ['row'])}>
									<label htmlFor=''>Mobile</label>
									<input
										onChange={(e) => setMobile(e.target.value)}
										value={mobile}
										onClick={clearInput}
										defaultValue='Enter your mobile for SMS notifications'
									></input>
								</div>

								<div className={cx(styles.privacy, ['row'], ['my-2'])}></div>
								<div className='row form-buttons'>
									<button
										type='submit'
										className='btn'
										onEventAdded={(e) => onEventAdded(e)}
									>
										Add Apppointment
									</button>
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

export default NewAppointment;

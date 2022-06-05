import React from 'react';
import styles from '../Patients.module.scss';
import cx from 'classnames';

function AddPatient(props) {
	const { setShowModal, handleUpdate } = props;

	const handleSubmit = async (e) => {};

	return (
		<div className='card-wrapper '>
			<div className='card profile-details'>
				<div className='card-body'>
					<h2>Add New Patient</h2>
					<form onSubmit={handleSubmit} action=''>
						<div
							className={cx(styles['form-group'], ['form-group'], ['inputs'])}
						>
							<input
								type='text'
								name='firstName'
								placeholder='First Name'
								className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
							/>
							<input
								type='text'
								name='lastName'
								placeholder='Last Name'
								className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
							/>
							<input
								type='text'
								name='email'
								placeholder='Email'
								className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
							/>
						</div>
						<div className={cx(styles.privacy, ['row'], ['my-2'])}>
							<input type='checkbox' name='privacy' id='privacyPolicy' />
							<label htmlFor='privacyPolicy'>
								<small className='muted'>
									Send new patient link to register and fill out profile.
								</small>
							</label>
						</div>
						<div className='row form-buttons'>
							<button onClick={setShowModal} className='btn btn-cancel'>
								Cancel
							</button>
							<button onClick={handleUpdate} className='btn'>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddPatient;

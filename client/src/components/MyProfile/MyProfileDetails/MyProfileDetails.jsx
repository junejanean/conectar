import React, { useEffect, useState } from 'react';
import styles from '../MyProfile.module.scss';
import cx from 'classnames';
import axios from 'axios';
import config from '../../../config';
import { useAuthContext } from '../../../hooks/useAuthContext';

function MyProfileDetails(props) {
	const { switchTab, currentTab, tabs } = props;
	const { user } = useAuthContext();
	const [userProfile, setUserProfile] = useState([]);
	const [doctor, setDoctor] = useState();
	const [firstName, setFirstName] = useState(userProfile.firstName);
	const [lastName, setLastName] = useState();
	const [middleName, setMiddleName] = useState();
	const [suffix, setSuffix] = useState(userProfile.suffix);
	const [title, setTitle] = useState();
	const [gender, setGender] = useState();
	const [specialty, setSpecialty] = useState();
	const [email, setEmail] = useState();
	const [address1, setAddress1] = useState();
	const [address2, setAddress2] = useState(userProfile.address2);
	const [city, setCity] = useState();
	const [state, setState] = useState();
	const [zip, setZip] = useState();
	const [phone, setPhone] = useState();
	// const [about, setAbout] = useState();
	// const [emailNotifications, setEmailNotifications] = useState();
	// const [systemNotifications, setSystemNotifications] = useState();

	const fetchUser = async () => {
		if (user) {
			const res = await axios.get(config.URL + 'whoami/' + user.uid);
			setUserProfile(res.data.doctor);
			setDoctor(res.data.doctor._id);
		}
	};
	console.log(userProfile);
	const doctorId = doctor;

	const handleUpdate = async () => {
		try {
			const res = await axios.put(config.URL + 'doctors/' + doctorId, {
				firstName,
				lastName,
				middleName,
				gender,
				email,
				phone,
				address1,
				address2,
				city,
				state,
				zip,
				specialty,
				suffix,
				title,
			});

			alert('Patient updated!');
			//setUserProfile(res.data.doctor);

			// setError(null);
		} catch (error) {
			// setError();
			throw new Error('Could not update the patient');
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	useEffect(() => {
		if (userProfile._id) {
			setFirstName(userProfile.firstName);
			setLastName(userProfile.lastName);
			setMiddleName(userProfile.middleName);
			setGender(userProfile.gender);
			setEmail(userProfile.email);
			setPhone(userProfile.phone);
			setSuffix(userProfile.suffix);
			setTitle(userProfile.title);
			setAddress1(userProfile.address1);
			setAddress2(userProfile.address2);
			setCity(userProfile.city);
			setState(userProfile.state);
			setZip(userProfile.zip);
			setSpecialty(userProfile.specialty);
			// setEmailNotifications(userProfile.emailNotifications);
			// setSystemNotifications(userProfile.systemNotifications);
		}
	}, [userProfile]);

	return (
		<div>
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
				{currentTab === 'User Information' && (
					<>
						<div className='card profile-details'>
							{Object.keys(userProfile).length !== 0 && (
								<>
									<div className={cx(['card-body'], [styles['card-body']])}>
										<div className={cx(styles.photo)}>
											<h3 key={userProfile._id} className='user sm'>
												{userProfile.suffix} {userProfile.firstName}{' '}
												{userProfile.lastName}, {userProfile.title}
											</h3>

											<img
												src='https://i.ibb.co/k4yG0GB/steven-kauffmann.jpg'
												alt=''
											/>
											<i className='fa fa-pen-to-square'></i>
										</div>

										<div
											className={cx(
												styles['form-group'],
												['form-group'],
												['inputs']
											)}
										>
											<div className={cx(styles['name'])}>
												<div className={cx(styles['input-group'])}>
													<label>First Name</label>
													<input
														type='text'
														name='firstName'
														value={firstName}
														onChange={(e) => setFirstName(e.target.value)}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
												<div className={cx(styles['input-group'])}>
													<label>Middle Name</label>
													<input
														type='text'
														name='middleName'
														value={middleName}
														onChange={(e) => setMiddleName(e.target.value)}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
												<div className={cx(styles['input-group'])}>
													<label>Last Name</label>
													<input
														type='text'
														name='lastName'
														value={lastName}
														onChange={(e) => setLastName(e.target.value)}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
											</div>
											<div className={cx(styles['input-group'])}>
												<label>Suffix</label>
												<input
													type='text'
													name='suffix'
													value={suffix}
													onChange={(e) => setSuffix(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>
											<div className={cx(styles['input-group'])}>
												<label>Title</label>
												<input
													type='text'
													name='title'
													value={title}
													onChange={(e) => setTitle(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>
											<div className={cx(styles['input-group'])}>
												<label>Gender</label>
												<input
													type='text'
													name='suffix'
													value={gender}
													onChange={(e) => setGender(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>
											<div className={cx(styles['input-group'])}>
												<label>Speciality</label>
												<input
													type='text'
													name='title'
													value={specialty}
													onChange={(e) => setSpecialty(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>

											<div className={cx(styles['input-group'])}>
												<label>Email</label>
												<input
													type='text'
													name='email'
													value={user.email}
													onChange={(e) => setEmail(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>
											<div className={cx(styles['input-group'])}>
												<label>Password</label>
												<input
													type='password'
													name='password'
													placeholder='Password'
													// onChange={(e) => setPassword(e.target.value)}
													className={cx(
														styles['my-1'],
														['py-1'],
														['p-1'],
														['muted']
													)}
												/>
											</div>

											<div
												className={cx(styles['input-group'], styles['about'])}
											>
												<label>About Me</label>
												<textarea
													className={cx(['muted'], [styles.about])}
													name='about'
													// onChange={(e) => setAbout(e.target.value)}
													placeholder='I have been in practice for over 14 years, right here in Austin, and I take pride in treating all my patients professionally, efficiently, and repeatedly! As your physician I want to work with you to improve your overall health, not just treat the symptoms. So if you have a suggestion or want to pursue a specific type of treatment I am willing to work with you, provided there is adequate scientific fact and methodology supporting the plan of care. Its this very philosophy, scientific fact coupled with patient interest, that motivated my decision to offer both the Ideal Protein weight loss protocol and the PrEP prevention program. The field of medicine is constantly evolving and improving, and I strive to find a similar balance in my office as well.'
												/>
											</div>
										</div>
										<div className={cx(styles['notifications-wrapper'])}>
											<div className={cx([styles.notifications])}>
												<label className='switch' htmlFor='checkbox1'>
													<input
														type='checkbox'
														// onChange={(e) =>
														// 	setEmailNotifications(e.target.value)
														// }
													/>
													<div
														className={cx(
															[styles.slider],
															['slider'],
															['round']
														)}
													></div>
												</label>
												<div className={cx(styles.title)}>
													<h6>Email Notifications</h6>
												</div>
												<div className={cx(styles.text)}>
													<small>
														Select if you want us to send you notifications
														about your new and upcoming appointments and
														invoices.
													</small>
												</div>
											</div>

											<div className={cx([styles.notifications])}>
												<label className='switch' htmlFor='checkbox2'>
													<input
														type='checkbox'
														// onChange={(e) =>
														// 	setSystemNotifications(e.target.value)
														// }
													/>
													<div
														className={cx(
															[styles.slider],
															['slider'],
															['round']
														)}
													></div>
												</label>
												<div className={cx(styles.title)}>
													<h6>System Notifications</h6>
												</div>
												<div className={cx(styles.text)}>
													<small>
														Select if you want us to send you notifications
														about your account, billing and Conectar news.
													</small>
												</div>
											</div>
										</div>

										<div className='row my-3'>
											<button
												onClick={handleUpdate}
												className='btn btn-primary'
											>
												Update Profile
											</button>
										</div>
									</div>
								</>
							)}
						</div>
					</>
				)}

				{currentTab === 'Contact Information' && (
					<div className='card profile-details'>
						<div className='form'>
							<div
								className={cx(styles['form-group'], ['form-group'], ['inputs'])}
							>
								<div className={cx(styles['input-group'])}>
									<label>Address 1</label>
									<input
										type='text'
										name='address1'
										value={address1}
										onChange={(e) => setAddress1(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>

								<div className={cx(styles['input-group'])}>
									<label>Address 2</label>
									<input
										type='text'
										name='address2'
										value={address2}
										onChange={(e) => setAddress2(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
								<div className={cx(styles['input-group'])}>
									<label>City</label>
									<input
										type='text'
										name='city'
										value={city}
										onChange={(e) => setCity(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
								<div className={cx(styles['input-group'])}>
									<label>State</label>
									<input
										type='text'
										name='state'
										value={state}
										onChange={(e) => setState(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
								<div className={cx(styles['input-group'])}>
									<label>Zip</label>
									<input
										type='text'
										name='zip'
										value={zip}
										onChange={(e) => setZip(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
								<div className={cx(styles['input-group'])}>
									<label>Phone</label>
									<input
										type='text'
										name='phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
							</div>
							<div className='row my-3'>
								<button onClick={handleUpdate} className='btn btn-primary'>
									Update Contact Information
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default MyProfileDetails;

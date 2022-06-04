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
	const [doctor, setDoctor] = useState(null);
	const [firstName, setFirstName] = useState();

	const fetchUser = async () => {
		if (user) {
			const res = await axios.get(config.URL + '/whoami/' + user.uid);
			setUserProfile(res.data.doctor);
		}
	};
	console.log(userProfile);

	useEffect(() => {
		fetchUser();
	}, []);

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
												{userProfile.firstName} {userProfile.lastName}
											</h3>

											<img src='/imgs/dr_cornali-headshot.jpg' alt='' />
											<i className='fa fa-pen-to-square'></i>
										</div>
										<form action=''>
											<div
												className={cx(
													styles['form-group'],
													['form-group'],
													['inputs']
												)}
											>
												<div className={cx(['name'])}>
													<div>
														<label>First Name</label>
														<input
															type='text'
															name='firstName'
															value={userProfile.firstName}
															className={cx(
																styles['my-1'],
																['py-1'],
																['p-1'],
																['muted']
															)}
														/>
													</div>
													<div>
														<label>Middle Name</label>
														<input
															type='text'
															name='suffix'
															value={userProfile.middleName}
															className={cx(
																styles['my-1'],
																['py-1'],
																['p-1'],
																['muted']
															)}
														/>
													</div>
													<div>
														<label>Last Name</label>
														<input
															type='text'
															name='lastName'
															value={userProfile.lastName}
															className={cx(
																styles['my-1'],
																['py-1'],
																['p-1'],
																['muted']
															)}
														/>
													</div>
												</div>
												<div>
													<label>Suffix</label>
													<input
														type='text'
														name='suffix'
														value={userProfile.suffix}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
												<div>
													<label>Title</label>
													<input
														type='text'
														name='title'
														value={userProfile.title}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>

												<div>
													<label>Email</label>
													<input
														type='text'
														name='email'
														value={userProfile.email}
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
												<div>
													<label>Password</label>
													<input
														type='password'
														name='password'
														placeholder='Password'
														className={cx(
															styles['my-1'],
															['py-1'],
															['p-1'],
															['muted']
														)}
													/>
												</div>
												<div>
													<label>About Me</label>
													<textarea
														className={cx(['muted'], [styles.about])}
														name='about'
														placeholder='I have been in practice for over 14 years, right here in Austin, and I take pride in treating all my patients professionally, efficiently, and repeatedly! As your physician I want to work with you to improve your overall health, not just treat the symptoms. So if you have a suggestion or want to pursue a specific type of treatment I am willing to work with you, provided there is adequate scientific fact and methodology supporting the plan of care. Its this very philosophy, scientific fact coupled with patient interest, that motivated my decision to offer both the Ideal Protein weight loss protocol and the PrEP prevention program. The field of medicine is constantly evolving and improving, and I strive to find a similar balance in my office as well.'
													/>
												</div>
											</div>
											<div className={cx(styles['notifications-wrapper'])}>
												<div className={cx([styles.notifications])}>
													<label className='switch' htmlFor='checkbox1'>
														<input type='checkbox' />
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
														<input type='checkbox' />
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
												<button className='btn btn-primary'>
													Update Profile
												</button>
											</div>
										</form>
									</div>
								</>
							)}
						</div>
					</>
				)}

				{currentTab === 'Contact Information' && (
					<div className='patient-profile'>
						<div className='card'>
							<form action=''>
								<div
									className={cx(
										styles['form-group'],
										['form-group'],
										['inputs']
									)}
								>
									<input
										type='text'
										name='address1'
										value={userProfile.address1}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
									<input
										type='text'
										name='address2'
										value={userProfile.address2}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
									<input
										type='text'
										name='city'
										value={userProfile.city}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
									<input
										type='text'
										name='state'
										value={userProfile.state}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
									<input
										type='text'
										name='zip'
										value={userProfile.zip}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
									<input
										type='text'
										name='phone'
										value={userProfile.phone}
										className={cx(styles['my-1'], ['py-1'], ['p-1'], ['muted'])}
									/>
								</div>
								<div className='row my-3'>
									<button className='btn btn-primary'>
										Update Contact Information
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default MyProfileDetails;

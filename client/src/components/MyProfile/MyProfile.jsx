import React, { useState } from 'react';
import styles from './MyProfile.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import MyProfileStats from './MyProfileStats/MyProfileStats';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import cx from 'classnames';

function MyProfile() {
	const [tabs] = useState(['User Information', 'Contact Information']);
	const [currentTab, setCurrentTab] = useState('User Information');

	const switchTab = (tab) => setCurrentTab(tab);

	return (
		<>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />

					<div className='main-container'>
						<Header />
						<div className='dashboard'>
							<h1>My Profile</h1>

							<div className={cx(['container'], ['grid'])}>
								<div className={cx([styles.card], ['card'], [styles.patient])}>
									<MyProfileStats />
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
										</div>
										{currentTab === 'User Information' && (
											<>
												<div className='card profile-details'>
													<div
														className={cx(['card-body'], [styles['card-body']])}
													>
														<div className={cx(styles.photo)}>
															<h3 className='user sm'>Dr. Cornali</h3>

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
																<input
																	type='text'
																	name='firstName'
																	placeholder='First Name'
																	className={cx(
																		styles['my-1'],
																		['py-1'],
																		['p-1'],
																		['muted']
																	)}
																/>
																<input
																	type='text'
																	name='lastName'
																	placeholder='Last Name'
																	className={cx(
																		styles['my-1'],
																		['py-1'],
																		['p-1'],
																		['muted']
																	)}
																/>
																<input
																	type='text'
																	name='email'
																	placeholder='Email'
																	className={cx(
																		styles['my-1'],
																		['py-1'],
																		['p-1'],
																		['muted']
																	)}
																/>
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
																<label>About Me</label>
																<textarea
																	className={cx(['muted'], [styles.about])}
																	name='about'
																	placeholder='I have been in practice for over 14 years, right here in Austin, and I take pride in treating all my patients professionally, efficiently, and repeatedly! As your physician I want to work with you to improve your overall health, not just treat the symptoms. So if you have a suggestion or want to pursue a specific type of treatment I am willing to work with you, provided there is adequate scientific fact and methodology supporting the plan of care. Its this very philosophy, scientific fact coupled with patient interest, that motivated my decision to offer both the Ideal Protein weight loss protocol and the PrEP prevention program. The field of medicine is constantly evolving and improving, and I strive to find a similar balance in my office as well.'
																/>
															</div>
															<div
																className={cx(styles['notifications-wrapper'])}
															>
																<div className={cx([styles.notifications])}>
																	<label className='switch' for='checkbox1'>
																		<input type='checkbox' id='checkbox1' />
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
																			Select if you want us to send you
																			notifications about your new and upcoming
																			appointments and invoices.
																		</small>
																	</div>
																</div>

																<div className={cx([styles.notifications])}>
																	<label className='switch' for='checkbox2'>
																		<input type='checkbox' id='checkbox2' />
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
																			Select if you want us to send you
																			notifications about your account, billing
																			and Conectar news.
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
																name='address'
																placeholder='Address'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
															/>
															<input
																type='text'
																name='city'
																placeholder='City'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
															/>
															<input
																type='text'
																name='state'
																placeholder='State'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
															/>
															<input
																type='text'
																name='zip'
																placeholder='Zip'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
															/>
															<input
																type='text'
																name='phone'
																placeholder='Phone'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
															/>
															<input
																type='text'
																name='mobile'
																placeholder='Mobile'
																className={cx(
																	styles['my-1'],
																	['py-1'],
																	['p-1'],
																	['muted']
																)}
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
							</div>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyProfile;

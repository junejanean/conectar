import React from 'react';
import styles from './Register.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

function Register() {
	return (
		<>
			<div className='main-content landing'>
				<div className={cx(styles.container, ['container'], ['register'])}>
					<div className='row my-2'>
						<div className={cx(styles.card, ['card'])}>
							<div className='card-header'>
								<small className='muted'>Sign up with</small>
								<div className='auth-icons row my-2'>
									<Link to='/Register' className='btn btn-nuetral'>
										<img
											src='https://demos.creative-tim.com/argon-dashboard-pro-react/static/media/github.6c955556.svg'
											alt=''
										/>
										Github
									</Link>
									<Link to='/Register' className='btn btn-nuetral'>
										<img
											src='	https://demos.creative-tim.com/argon-dashboard-pro-react/static/media/google.eae9aa93.svg'
											alt=''
										/>
										Google
									</Link>
								</div>
							</div>
							<div className='card-body'>
								<small className='muted'>Or sign up with credentials</small>
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
											name='name'
											placeholder='Name'
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
									</div>
									<div className={cx(['row'], styles['password-strength'])}>
										<small className='muted'>
											password strength:
											<span> strong</span>
										</small>
									</div>
									<div className={cx(styles.privacy, ['row'], ['my-2'])}>
										<input type='checkbox' name='privacy' id='privacyPolicy' />
										<label htmlFor='privacyPolicy'>
											<small className='muted'>
												I agree with the <span>Privacy Policy</span>
											</small>
										</label>
									</div>
									<div className='row my-3'>
										<button className='btn btn-primary'>Create Account</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;

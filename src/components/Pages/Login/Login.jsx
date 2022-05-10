import React from 'react';
import styles from '../Register/Register.module.scss';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		localStorage.setItem('loggedIn', 'present');
		props.setLoggedIn(true);
		navigate('/Dashboard');
	};

	return (
		<>
			<div className='main-content landing'>
				<div className={cx(styles.container, ['container'], ['register'])}>
					<div className='row my-2'>
						<div className={cx(styles.card, ['card'])}>
							<div className='card-header'>
								<small className='muted'>Sign in with</small>
								<div className='auth-icons row my-2'>
									<a href='#' className='btn btn-nuetral'>
										<img
											src='https://demos.creative-tim.com/argon-dashboard-pro-react/static/media/github.6c955556.svg'
											alt=''
										/>
										Github
									</a>
									<a href='#' className='btn btn-nuetral'>
										<img
											src='	https://demos.creative-tim.com/argon-dashboard-pro-react/static/media/google.eae9aa93.svg'
											alt=''
										/>
										Google
									</a>
								</div>
							</div>
							<div className='card-body'>
								<small className='muted'>Or sign in with credentials</small>
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

									<div className={cx(styles.privacy, ['row'], ['my-2'])}>
										<input type='checkbox' name='privacy' id='privacyPolicy' />
										<label htmlFor='privacyPolicy'>
											<small className='muted'>Remember me</small>
										</label>
									</div>
									<div className='row my-3'>
										<button className='btn btn-primary' onClick={handleLogin}>
											Login
										</button>
									</div>
									<div>
										<small className='muted'>
											Don't have an account?&nbsp;
											<Link to='/Register' className='deepblue'>
												Create one here.
											</Link>
										</small>
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

export default Login;

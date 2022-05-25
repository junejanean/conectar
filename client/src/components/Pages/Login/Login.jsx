import React, { useState } from 'react';
import { useLogin, user } from '../../../hooks/useLogin';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { projectAuth, signInWithGoogle } from '../../../firebase/config';

// styles
import styles from '../Register/Register.module.scss';
import cx from 'classnames';
import Footer from '../../Footer/Footer';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isPending } = useLogin();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
		navigate('/Dashboard');
	};

	return (
		<>
			<Navbar />
			<div className='main-content landing'>
				<div className={cx(styles.container, ['container'], ['register'])}>
					<div className='row my-2'>
						<div className={cx(styles.card, ['card'])}>
							<div className='card-header'>
								<small className='muted'>Sign in with</small>
								<div className='auth-icons row my-2'>
									<Link
										onClick={signInWithGoogle}
										to='/Login'
										className='btn btn-nuetral'
									>
										<img
											src='	https://demos.creative-tim.com/argon-dashboard-pro-react/static/media/google.eae9aa93.svg'
											alt=''
										/>
										Google
									</Link>
								</div>
							</div>
							<div className='card-body'>
								<small className='muted'>Or sign in with credentials</small>
								<form onSubmit={handleSubmit} action=''>
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
											onChange={(e) => setEmail(e.target.value)}
											value={email}
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
											onChange={(e) => setPassword(e.target.value)}
											value={password}
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
										{!isPending && (
											<button className='btn btn-primary'>Login</button>
										)}
										{isPending && <button className='btn'>Loading</button>}
										{error && <small>{error}</small>}
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
			<Footer />
		</>
	);
}

export default Login;

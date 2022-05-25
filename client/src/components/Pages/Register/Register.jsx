import React, { useState } from 'react';
import { useRegister } from '../../../hooks/useRegister';
import { signInWithGoogle } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Register.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function Register() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { register, isPending, error } = useRegister();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await register(displayName, email, password);
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
								<small className='muted'>Sign up with</small>
								<div className='auth-icons row my-2'>
									<Link
										onClick={signInWithGoogle}
										to='/Register'
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
								<small className='muted'>Or sign up with credentials</small>
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
											name='displayName'
											placeholder='Name'
											onChange={(e) => setDisplayName(e.target.value)}
											value={displayName}
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
										{!isPending && (
											<button className='btn btn-primary'>
												Create Account
											</button>
										)}
										{isPending && (
											<button className='btn' disabled>
												loading
											</button>
										)}
										{error && <p>{error}</p>}
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

export default Register;

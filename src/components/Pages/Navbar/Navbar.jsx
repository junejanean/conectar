import React from 'react';
import { useLogout } from '../../../hooks/useLogout';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	return (
		<>
			<div className='navbar-horizontal p-2'>
				<div className='container flex'>
					<Link to='/'>
						<img src='/imgs/logo/conectar_logo_head_white.png' alt='' />
					</Link>
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/About'>About Us</Link>
							</li>
							<li>
								<Link to='/Contact'>Contact</Link>
							</li>

							{!user && (
								<>
									<li>
										<Link to='/Register'>Register</Link>
									</li>
									<li>
										<Link to='/Login'>Login</Link>
									</li>
								</>
							)}

							{user && (
								<>
									<li>
										<Link to='/Dashboard'>Dashboard</Link>
									</li>
									<li>
										<Link to='/#' onClick={logout}>
											Logout
										</Link>
									</li>
									<li>Hello {user.displayName}!</li>
								</>
							)}
						</ul>
					</nav>
					<div className='social'>
						<Link to='/'>
							<i className='fab fa-github'></i>
						</Link>
						<Link to='/'>
							<i className='fab fa-twitter'></i>
						</Link>
						<Link to='/'>
							<i className='fab fa-facebook'></i>
						</Link>
						<Link to='/'>
							<i className='fab fa-instagram'></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;

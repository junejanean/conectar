import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ loggedIn, setLoggedIn }) {
	const handelLogout = () => {
		localStorage.removeItem('loggedIn');
		setLoggedIn(false)
	};

	return (
		<>
			<div className='navbar-horizontal p-2'>
				<div className='container flex'>
					<a href='#'>
						<img src='/imgs/conectar_logo_head_white.png' alt='' />
					</a>
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
							{loggedIn && (
								<>
									<li>
										<Link to='/Dashboard'>Dashboard</Link>
									</li>
									<li>
										<Link to='/#' onClick={handelLogout}>
											Logout
										</Link>
									</li>
								</>
							)}
							{!loggedIn && (
								<>
									<li>
										<Link to='/Register'>Register</Link>
									</li>
									<li>
										<Link to='/Login'>Login</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
					<div class='social'>
						<a href='#'>
							<i class='fab fa-github'></i>
						</a>
						<a href='#'>
							<i class='fab fa-twitter'></i>
						</a>
						<a href='#'>
							<i class='fab fa-facebook'></i>
						</a>
						<a href='#'>
							<i class='fab fa-instagram'></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;

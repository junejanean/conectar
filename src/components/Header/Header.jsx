import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.scss';

function Header({ setLoggedIn }) {
	const navigate = useNavigate();
	const handelLogout = () => {
		localStorage.removeItem('loggedIn');
		setLoggedIn(false);
		navigate('/');
	};

	return (
		<header>
			<div className='header flex'>
				<div className='header-right flex-item'>
					<p>
						<Link to='/#' onClick={handelLogout}>
							Logout
						</Link>
					</p>
					<img src='/imgs/dr_cornali-headshot.jpg' alt='' />
					<h3 className='user sm'>Dr. Cornali</h3>
				</div>
			</div>
		</header>
	);
}

export default Header;

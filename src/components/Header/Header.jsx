import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.scss';

function Header({ setLoggedIn }) {
	const [dropdown, setDropdown] = useState(false);
	const navigate = useNavigate();
	const handelLogout = () => {
		localStorage.removeItem('loggedIn');
		setLoggedIn(false);
		navigate('/');
	};

	function handleClick() {
		setDropdown((dropdown) => !dropdown);
	}
	let dropdownShow = dropdown ? 'show' : '';

	return (
		<header>
			<div className='header flex'>
				<div onClick={handleClick} className='header-right flex-item'>
					<img src='/imgs/dr_cornali-headshot.jpg' alt='' />
					<h3 className='user sm'>Dr. Cornali</h3>
					<div className='dropdown'>
						<div role='menu' className={`dropdown-menu card ${dropdownShow}`}>
							<ul>
								<li className='dropdown-header'>Welcome!</li>
								<li className='dropdown-item'>
									<Link to='/MyProfile'>
										<i class='fa-solid fa-user'></i> My Profile
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link to='/Appointments'>
										<i class='fa-solid fa-calendar-days'></i>Calendar
									</Link>
								</li>
								<li className='dropdown-item'>
									{' '}
									<Link to='/MyProfile'>
										<i class='fa-solid fa-gear'></i>Settings
									</Link>
								</li>

								<li className='dropdown-item'>
									{' '}
									<Link to='/Contact'>
										<i class='fa-solid fa-life-ring'></i>Support
									</Link>
								</li>
								<li className='dropdown-item-divider'></li>
								<li className='dropdown-item'>
									<Link to='/#' onClick={handelLogout}>
										<i class='fa-solid fa-person-running'></i>Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;

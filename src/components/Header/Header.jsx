import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { signInWithGoogle } from '../../firebase/config';

import './Header.scss';

function Header() {
	const [dropdown, setDropdown] = useState(false);
	const { logout } = useLogout();
	const { user } = useAuthContext();

	function handleClick() {
		setDropdown((dropdown) => !dropdown);
	}
	let dropdownShow = dropdown ? 'show' : '';

	const profilePic = localStorage.getItem('profilePic');

	return (
		<header>
			<div className='header flex'>
				<div onClick={handleClick} className='header-right flex-item'>
					{profilePic && <img src={localStorage.getItem('profilePic')} />}
					{!profilePic && <img src={'/imgs/dr_cornali-headshot.jpg'} />}
					<h3 className='user sm'>Hello, {user.displayName}</h3>
					<div className='dropdown'>
						<div role='menu' className={`dropdown-menu card ${dropdownShow}`}>
							<ul>
								<li className='dropdown-header'>Welcome!</li>
								<li className='dropdown-item'>
									<Link to='/MyProfile'>
										<i className='fa-solid fa-user'></i> My Profile
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link to='/Appointments'>
										<i className='fa-solid fa-calendar-days'></i>Calendar
									</Link>
								</li>
								<li className='dropdown-item'>
									{' '}
									<Link to='/MyProfile'>
										<i className='fa-solid fa-gear'></i>Settings
									</Link>
								</li>

								<li className='dropdown-item'>
									{' '}
									<Link to='/Contact'>
										<i className='fa-solid fa-life-ring'></i>Support
									</Link>
								</li>
								<li className='dropdown-item-divider'></li>
								<li className='dropdown-item'>
									<Link to='/#' onClick={logout} href='#'>
										<i className='fa-solid fa-person-running'></i>Logout
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

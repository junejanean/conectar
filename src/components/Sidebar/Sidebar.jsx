import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='logo'>
				<Link to='/'>
					<img src='/imgs/logo/conectar_logo_head_blue.png' alt='' />
				</Link>
			</div>
			<div className='nav-container flex p-2'>
				<div className='nav flex'>
					<ul>
						<li>
							<Link to='/Dashboard'>
								<i className='fa-solid fa-gauge p-1 '></i>Dashboard
							</Link>
						</li>
						<li>
							<Link to='/Appointments'>
								<i className='fa-solid fa-clock p-1 red'></i>Appointments
							</Link>
						</li>
						<li>
							<Link to='/Patients'>
								<i className='fa-solid fa-users p-1 deepblue'></i>Patients
							</Link>
						</li>
					</ul>
					<div className='settings'>
						<Link to='/MyProfile'>
							<i className='fa-solid fa-gear p-1 rose'></i>MyProfile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

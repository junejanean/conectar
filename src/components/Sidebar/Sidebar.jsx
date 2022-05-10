import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='logo'>
				<Link to='/'>
					<img src='/imgs/conectar_logo_head_blue.png' alt='' />
				</Link>
			</div>
			<div className='nav-container flex p-2'>
				<div className='nav flex'>
					<ul>
						<li>
							<Link to='/Dashboard'>
								<i class='fa-solid fa-gauge p-1 '></i>Dashboard
							</Link>
						</li>
						<li>
							<Link to='/Appointments'>
								<i class='fa-solid fa-clock p-1 red'></i>Appointments
							</Link>
						</li>
						<li>
							<Link to='/Patients'>
								<i class='fa-solid fa-users p-1 deepblue'></i>Patients
							</Link>
						</li>
					</ul>
					<div className='settings'>
						<Link to='/Settings'>
							<i class='fa-solid fa-gear p-1 rose'></i>Settings
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

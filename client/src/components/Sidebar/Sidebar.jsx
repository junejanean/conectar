import React from 'react';
import cx from 'classnames';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}>
				<Link to='/'>
					<img src='/imgs/logo/conectar_logo_head_blue.png' alt='' />
				</Link>
			</div>
			<div className={cx(styles.flex, ['p-2'], styles['nav-container'])}>
				<div className={cx(styles.nav, styles.flex)}>
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
					<div className={styles.settings}>
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

import React, { useState, useEffect } from 'react';
import styles from './MyProfile.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import MyProfileStats from './MyProfileStats/MyProfileStats';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import cx from 'classnames';
import MyProfileDetails from './MyProfileDetails/MyProfileDetails';

function MyProfile() {
	const [tabs] = useState(['User Information', 'Contact Information']);
	const [currentTab, setCurrentTab] = useState('User Information');

	const switchTab = (tab) => setCurrentTab(tab);

	return (
		<>
			<div className='app-container'>
				<div className='main-content'>
					<Sidebar />

					<div className='main-container'>
						<Header />
						<div className='dashboard'>
							<h1>My Profile</h1>

							<div className={cx(['container'], ['grid'])}>
								<div className={cx([styles.card], ['card'], [styles.patient])}>
									<MyProfileStats />
								</div>
								<div className={cx([styles.card], ['card'], [styles.details])}>
									<MyProfileDetails
										switchTab={switchTab}
										currentTab={currentTab}
										tabs={tabs}
									/>
								</div>
							</div>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyProfile;

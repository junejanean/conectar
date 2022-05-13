import React from 'react';
import styles from './MyProfileStats.module.scss';

import cx from 'classnames';

function ProfileStats() {
	return (
		<div className='stats'>
			<div className={cx(styles.row, ['row'])}>
				<div className={cx(styles.card, ['card'], styles['stats-red'])}>
					<div className='col'>
						<h5>Number of Patients</h5>
						<h3 className='md'>174</h3>
					</div>
					<div className={cx(styles.icon, ['icon'], ['col-auto'])}>
						<i class='fa fa-users'></i>
					</div>
					<div className='col-auto'>
						<p>
							<span>
								<i class='fa fa-arrow-up'></i> 3.48%
							</span>
							Since last month
						</p>
					</div>
				</div>
				<div className={cx(styles.card, ['card'], [styles['stats-purple']])}>
					<div className='col'>
						<h5>Appointments This Month</h5>
						<h3 className='md'>67</h3>
					</div>
					<div className={cx(styles.icon, ['icon'], ['col-auto'])}>
						<i class='fa-solid fa-calendar-check'></i>
					</div>
					<div className='col-auto'>
						<p>
							<span>
								<i class='fa fa-arrow-up'></i> 3.48%
							</span>{' '}
							Since last month
						</p>
					</div>
				</div>
				<div className={cx(styles.card, ['card'], [styles['stats-green']])}>
					<div className='col'>
						<h5>Billable Appointments</h5>
						<h3 className='md'>$12,345</h3>
					</div>
					<div className={cx(styles.icon, ['icon'], ['col-auto'])}>
						<i class='fa fa-coins'></i>
					</div>
					<div className='col-auto'>
						<p>
							<span>
								<i class='fa fa-arrow-up'></i> 3.48%
							</span>{' '}
							Since last month
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileStats;

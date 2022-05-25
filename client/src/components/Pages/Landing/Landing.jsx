import React from 'react';
import './Landing.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function Landing() {
	return (
		<>
			<Navbar />
			<div className='main-content landing'>
				<div className='container'>
					<div className='showcase grid'>
						<section>
							<h1 className='py-1'>Conectar Appointment App</h1>
							<h2>Connecting doctors and patients.</h2>
							<p className='py-2'>
								Online scheduling allows visitors to see your availability in
								real-time and schedule appointments on-demand from any location
								or device.
							</p>
							<button className='btn btn-outline'>Try it out for free</button>
						</section>
						<section className='p-1'>
							<img
								src='/imgs/logo/conectar_logo_icon_white.png'
								alt=''
								className='hero'
							/>
						</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Landing;

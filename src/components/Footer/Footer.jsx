import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
	return (
		<>
			<footer className='footer py-1'>
				<div className='container flex'>
					<div className='copyright'>
						<p>Conectar | Copyright &copy; 2022</p>
					</div>
					<nav className='footer-nav'>
						<ul>
							<li>
								<Link to='/About'>About Us</Link>
							</li>
							<li>
								<Link to='/Contact'>Contact</Link>
							</li>
							<li>
								<Link to='/'>Blog</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}

export default Footer;

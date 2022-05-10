import cx from 'classnames';
import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './About.module.scss';

function About() {
	return (
		<>
			<div className={cx(['main-content'], ['landing'], styles.landing)}>
				<div className='container'>
					<div>
						<h1 className='py-1'>About Us</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
							corrupti temporibus aperiam saepe ullam fugit, magnam enim soluta
							ipsum ea ab harum explicabo, illum placeat repellendus voluptates
							nihil minus officia.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
							eius vel alias ex dolore sequi deserunt porro velit possimus
							cupiditate aperiam rerum odit quasi magni, incidunt ipsum, animi
							enim? Id nihil fugit inventore hic, debitis explicabo ullam ab
							harum doloribus libero suscipit eum quam minima tempora
							voluptatibus voluptatem unde distinctio nobis eos voluptates nemo
							sapiente incidunt voluptas architecto! Quibusdam aspernatur
							assumenda iusto, doloribus dolorem sint qui exercitationem quod
							itaque maiores dolores repellendus? Optio asperiores consequuntur,
							consequatur recusandae maiores itaque nam!
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;

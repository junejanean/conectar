import React from 'react';
import Navbar from '../components/Pages/Navbar/Navbar';

const PageLayout = ({ children }) => (
	<div>
		<Navbar />
		{children}
	</div>
);

export default PageLayout;

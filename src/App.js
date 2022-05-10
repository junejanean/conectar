import React, { useState, useEffect } from 'react';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Pages/Landing/Landing';
import Login from './components/Pages/Login/Login';
import Navbar from './components/Pages/Navbar/Navbar';
import Register from './components/Pages/Register/Register';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Appointments from './components/Appointments/Appointments';
import Patients from './components/Patients/Patients';
import './styles/global.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const getAuth = localStorage.getItem('loggedIn');
		if (getAuth) setLoggedIn(true);
	}, []);

	return (
		<div className='App'>
			{!loggedIn && <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/About' element={<About />} />
				<Route path='/Contact' element={<Contact />} />/
				<Route
					path='/Dashboard'
					element={<Dashboard setLoggedIn={setLoggedIn} />}
				/>
				<Route
					path='/Appointments'
					element={<Appointments setLoggedIn={setLoggedIn} />}
				/>
				<Route path='/Patients' element={<Patients />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Login' element={<Login setLoggedIn={setLoggedIn} />} />
			</Routes>
			{/* <Footer /> */}
			{/* <div className='app-container'>
				<div className='main-content'>
					<Sidebar />
					<Header />
					<Dashboard />
					<Footer />
				</div>
			</div> */}
		</div>
	);
}

export default App;

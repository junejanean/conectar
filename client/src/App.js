import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// styles
import './styles/global.scss';
import './styles/stats.scss';

// pages & components
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Pages/Landing/Landing';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Appointments from './components/Appointments/Appointments';
import Patients from './components/Patients/Patients';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className='App'>
			{authIsReady && (
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/About' element={<About />} />
						<Route path='/Contact' element={<Contact />} />/
						<Route path='/Register' element={<Register />} />
						<Route path='/Login' element={<Login />} />
						{!user && <Route to='/Login' />}
						{user && <Route path='/Dashboard' element={<Dashboard />} />}
						<Route path='/Appointments' element={<Appointments />} />
						<Route path='/Patients' element={<Patients />} />
						<Route path='/MyProfile' element={<MyProfile />} />
					</Routes>
				</BrowserRouter>
			)}

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

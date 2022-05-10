import react from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { Routes, Router, Route } from 'react-router-dom';

const views = [
	// Public pages
	{
		exact: true,
		path: '/Login',
		component: Login,
		layout: PageLayout,
	},
	// Authenticated pages
	{
		exact: false,
		path: '/Dashboard',
		component: Dashboard,
		layout: DashboardLayout,
	},
];

const App = () => {
	return (
		<Router history={history}>
			<Routes>
				{views.map((i, index) => {
					<Route
						key={index}
						exact={i.exact}
						path={i.path}
						render={(props) => (
							<i.Layout history={props.history}>
								<i.Component {...props} />
							</i.Layout>
						)}
					/>;
				})}
				{/* <Route path='/Dashboard' element={<Dashboard />} /> */}
			</Routes>
		</Router>
	);
};

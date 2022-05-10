import React from 'react';
import { Route } from 'react-router-dom';

const DashboardLayout = ({ children }) => <div>{children}</div>;

const DashboardLayoutRoute = ({
	component: Dashboard,
	Sidebar,
	Header,
	Footer,
}) => {
	return (
		<Route
			// {...rest}
			render={(props) => (
				<DashboardLayout>
					<Dashboard {...props} />
				</DashboardLayout>
			)}
		/>
	);
};

export default DashboardLayoutRoute;

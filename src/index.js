import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import PageLayout from './layout/PageLayout';
import DashboardLayout from './layout/DashboardLayout';

/// Views

// const PageLayoutRoute = ({ element: Component, ...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(matchProps) => (
// 				<PageLayout>
// 					<Component {...matchProps} />
// 				</PageLayout>
// 			)}
// 		/>
// 	);
// };

// const DashboardLayoutRoute = ({ element: Component, ...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(matchProps) => (
// 				<DashboardLayout>
// 					<Component {...matchProps} />
// 				</DashboardLayout>
// 			)}
// 		/>
// 	);
// };

// const [loggedIn, setLoggedIn] = useState(false)

// useEffect(() => {

// }, [])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

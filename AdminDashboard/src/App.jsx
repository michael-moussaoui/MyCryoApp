import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useLocation,
} from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Sessions from "./pages/Sessions/Sessions";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
	const Layout = () => {
		const location = useLocation();
		const showLogo = location.pathname === "/";
		return (
			<div className="main">
				{/* <ToastContainer /> */}
				<Navbar />
				<div className="container">
					<div className="menuContainer">
						<Menu />
					</div>
					<div className="contentContainer">
						{showLogo && (
							<img src="attitudeLogo.svg" className="test" alt="" />
						)}
						<Outlet />
					</div>
				</div>
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/home",
					element: <Home />,
				},
				{
					path: "/users",
					element: <Users />,
				},
				{
					path: "/sessions",
					element: <Sessions />,
				},
			],
		},

		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},

		// {
		// 	path: "/addSession",
		// 	element: <AddSession />,
		// },
		// {
		// 	path: "/editSession/:id",
		// 	element: <EditSession />,
		// },
		// {
		// 	path: "/viewSession/:id",
		// 	element: <ViewSession />,
		// },
		// {
		// 	path: "/create",
		// 	element: <Create />,
		// },
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

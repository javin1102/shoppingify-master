import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import "./App.css";
import axios from "axios";
function App() {
	axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
	return (
		<>
			<div className="App">
				<Helmet>
					<title>Shoppingify</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					></link>
				</Helmet>
				<Router>
					<h2>Halo</h2>
					<Routes>
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/items" element={<ItemPage />} />
						<Route path="/history" element={<p>History</p>} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;

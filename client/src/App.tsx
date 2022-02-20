import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import "./App.css";
import axios from "axios";
import { StylesProvider } from "@mui/styles";
function App() {
	axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
	return (
		<StylesProvider injectFirst={true}>
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
					<Routes>
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<MainPage />} />
					</Routes>
				</Router>
			</div>
		</StylesProvider>
	);
}

export default App;

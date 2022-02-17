import {
	InputField,
	AuthForm,
	InputDiv,
	LabelField,
	SubmitButton,
	FormDivFooter,
} from "../../components/FormComponents";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import { loginFormIsValid } from "../../utils/AuthUtils";
import axios, { AxiosError } from "axios";
const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const formOnSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!loginFormIsValid) return;
		try {
			const feedback = await axios.post("/auth/login", {
				email,
				password,
			});
		} catch (error) {
			const err = error as AxiosError;
			console.error(err.response?.data);
			return;
		}
		console.log("Login");
		setEmail("");
		setPassword("");
	};
	return (
		<>
			<AuthForm noValidate onSubmit={formOnSubmit}>
				<img
					style={{
						width: "8rem",
						display: "inline-block",
						alignSelf: "center",
						marginBottom: "4rem",
					}}
					src={Logo}
					alt="Logo"
				/>
				<InputDiv>
					<LabelField>Email Address</LabelField>
					<InputField
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</InputDiv>
				<InputDiv>
					<LabelField>Password</LabelField>
					<InputField
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</InputDiv>
				<FormDivFooter>
					<Link
						to="/register"
						style={{
							color: "#f9a109",
							fontWeight: "400",
							fontSize: "1.4rem",
							textUnderlineOffset: ".5rem",
						}}
					>
						&larr;Don't an account?
					</Link>
					<SubmitButton
						type="submit"
						style={{ marginTop: "1.5rem", marginLeft: "auto" }}
					>
						Login
					</SubmitButton>
				</FormDivFooter>
			</AuthForm>
		</>
	);
};

export default Login;

import {
	InputField,
	AuthForm,
	InputDiv,
	LabelField,
	SubmitButton,
	FormDivFooter,
} from "../../components/FormComponents";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import React, { useState } from "react";
import { registerFormIsValid } from "../../utils/AuthUtils";
const Register = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirm, setConfirm] = useState<string>("");

	const formSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		if (!registerFormIsValid(email, password, confirm)) return;
		console.log("Register");
		setEmail("");
		setPassword("");
		setConfirm("");
	};

	return (
		<>
			<AuthForm noValidate onSubmit={formSubmitHandler}>
				<img
					style={{
						width: "8rem",
						display: "inline-block",
						alignSelf: "center",
						marginBottom: "4rem",
					}}
					src={logo}
					alt="Logo"
				/>
				<InputDiv>
					<LabelField htmlFor="email">Email Address</LabelField>
					<InputField
						data-testid="register-email"
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</InputDiv>
				<InputDiv>
					<LabelField htmlFor="password">Password</LabelField>
					<InputField
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</InputDiv>
				<InputDiv>
					<LabelField htmlFor="confirm">Confirm Password</LabelField>
					<InputField
						type="password"
						name="confirm"
						id="confirm"
						onChange={(e) => setConfirm(e.target.value)}
						value={confirm}
					/>
				</InputDiv>
				<FormDivFooter>
					<Link
						to="/login"
						style={{
							color: "#f9a109",
							fontWeight: "400",
							fontSize: "1.4rem",
							textUnderlineOffset: ".5rem",
						}}
					>
						&larr;Have an account?
					</Link>
					<SubmitButton
						type="submit"
						style={{ marginTop: "1.5rem", marginLeft: "auto" }}
					>
						Register
					</SubmitButton>
				</FormDivFooter>
			</AuthForm>
		</>
	);
};

export default Register;

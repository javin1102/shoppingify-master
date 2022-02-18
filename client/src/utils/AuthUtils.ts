import axios, { AxiosError } from "axios";
export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
};

export const registerFormIsValid = (
	email: string,
	password: string,
	confirm: string,
) =>
	!email ||
	!password ||
	!(password.length >= 8) ||
	!confirm ||
	password !== confirm ||
	!validateEmail(email)
		? false
		: true;

export const registerUser = async (email: string, password: string) => {
	try {
		const feedback = await axios.post("/auth/register", {
			email,
			password,
			password_confirmation: password,
		});
		console.log(feedback);
	} catch (error) {
		const err = error as AxiosError;
		console.error(err.response?.data);
	}
};

export const loginFormIsValid = (email: string, password: string) =>
	!validateEmail(email) || !password ? false : true;

export const loginUser = async (email: string, password: string) => {
	try {
		const feedback = await axios.post("/auth/login", {
			email,
			password,
		});
		console.log(feedback);
	} catch (error) {
		const err = error as AxiosError;
		console.error(err.response?.data);
	}
};

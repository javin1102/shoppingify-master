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

export const loginFormIsValid = (email: string, password: string) =>
	!validateEmail(email) || !password ? false : true;

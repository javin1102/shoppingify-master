import { fireEvent, render, screen } from "@testing-library/react";
import Register from "../pages/auth/Register";
import {
	loginFormIsValid,
	registerFormIsValid,
	registerUser,
} from "../utils/AuthUtils";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";
import MockAdapter from "axios-mock-adapter/types";
jest.mock("axios", () => ({
	...jest.requireActual("axios"),
	post: jest.fn(),
}));

describe("Register Form", () => {
	describe("Register form validity (submittable)", () => {
		it("should not be valid , password and confirm password not match", () => {
			const email = "javinrio23@gmailcom";
			const password = "password";
			const confirm = "confirm";
			expect(registerFormIsValid(email, password, confirm)).toBeFalsy();
		});
		it("should not be valid, password length < 8 ", () => {
			const email = "javinrio23gmail.com";
			const password = "asd";
			const confirm = "asd";
			expect(registerFormIsValid(email, password, confirm)).toBeFalsy();
		});
		it("should not be valid, invalid email (@ missing)", () => {
			const email = "javinrio23gmail.com";
			const password = "password";
			const confirm = "confirm";
			expect(registerFormIsValid(email, password, confirm)).toBeFalsy();
		});
		it("should be valid, ", () => {
			const email = "javinrio23@gmail.com";
			const password = "confirm123";
			const confirm = "confirm123";
			expect(registerFormIsValid(email, password, confirm)).toBeTruthy();
		});
	});
	it("should register user", async () => {
		const mockedAxios = axios as jest.Mocked<typeof axios>;
		const mockedData = {
			message: "OK",
			errors: "",
		};
		mockedAxios.post.mockResolvedValue(mockedData);
		const email = "javinrio23@gmail.com";
		const password = "password123";
		await registerUser(email, password);
		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(
			mockedAxios.post("", {
				email,
				password,
				password_confirmation: password,
			}),
		).resolves.toEqual(mockedData);
	});
	it("should not register user", async () => {
		const mockedAxios = axios as jest.Mocked<typeof axios>;
		const mockedData = {
			message: "",
			errors: "Invalid Email",
		};
		mockedAxios.post.mockRejectedValue(mockedData);
		const email = "javinrio23gmail.com";
		const password = "password123";
		await registerUser(email, password);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(
			mockedAxios.post("", {
				email,
				password,
				password_confirmation: password,
			}),
		).rejects.toEqual(mockedData);
	});
	it("should register user, (full set)", async () => {
		render(
			<BrowserRouter>
				<Register />
			</BrowserRouter>,
		);
		act(() => {
			fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
				target: {
					value: "javinr2@gmail.com",
				},
			});
		});
		act(() => {
			fireEvent.input(screen.getByLabelText("Password"), {
				target: {
					value: "javinrio112",
				},
			});
		});
		act(() => {
			fireEvent.input(screen.getByLabelText("Confirm Password"), {
				target: {
					value: "javinrio112",
				},
			});
		});
		act(() => {
			fireEvent.submit(screen.getByText("Register"));
		});

		expect(axios.post).toHaveBeenCalledWith("/auth/register", {
			email: "javinr2@gmail.com",
			password: "javinrio112",
			password_confirmation: "javinrio112",
		});
	});
});

describe("Login Form", () => {
	describe("Login form validity (submittable)", () => {
		it("should not be valid, email is invalid (missing suffix)", () => {
			const email = "javin23@asdcom";
			const password = "asdfqweke";
			expect(loginFormIsValid(email, password)).toBeFalsy();
		});
		it("should be valid, able to submit", () => {
			const email = "javin23@qwere.com";
			const password = "password123";
			expect(loginFormIsValid(email, password)).toBeTruthy();
		});
	});
});

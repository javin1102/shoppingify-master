import { fireEvent, render, screen } from "@testing-library/react";
import Register from "../pages/auth/Register";
import { loginFormIsValid, registerFormIsValid } from "../utils/AuthUtils";
import React from "react";
import { BrowserRouter } from "react-router-dom";

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

	it("should register user", () => {
		const mock = jest.spyOn(console, "log");
		render(
			<BrowserRouter>
				<Register />
			</BrowserRouter>,
		);
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
			target: {
				value: "javinr2@gmail.com",
			},
		});
		fireEvent.input(screen.getByLabelText("Password"), {
			target: {
				value: "javinrio112",
			},
		});
		fireEvent.input(screen.getByLabelText("Confirm Password"), {
			target: {
				value: "javinrio112",
			},
		});
		fireEvent.submit(screen.getByText("Register"));
		expect(mock).toHaveBeenCalled();
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

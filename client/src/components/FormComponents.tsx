import styled from "styled-components";

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	background-color: #fff0de;
	border-radius: 2.5rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 2rem 3rem;
	border: 2px solid #f9a109;
	font-size: 1.2rem;
	font-family: "Quicksand", sans-serif;
`;

export const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

export const LabelField = styled.label`
	font-weight: 500;
	margin-bottom: 0.75rem;
`;

export const InputField = styled.input`
	outline: none;
	border: none;
	font-family: inherit;
	border-radius: 1.2rem;
	padding: 0.75rem 1rem;
	width: min(70vw, 30rem);
	border: 1px solid #f9a109;
	font-size: 1.2rem;
`;

export const FormDivFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;
export const SubmitButton = styled.button`
	border-radius: 0.75rem;
	border: none;
	background-color: #f9a109;
	color: white;
	padding: 1rem 2rem;
	cursor: pointer;
`;

export const MiscInputDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

export const MiscInputField = styled.input`
	outline: none;
	font-family: inherit;
	border-radius: 1.2rem;
	padding: 1.5rem;
	width: 100%;
	border: 2px solid #bdbdbd;
	font-size: 1.2rem;
	font-weight: 500;
	&:focus {
		border: 2px solid #f9a109;

		& + label {
			color: #f9a109;
		}
	}
`;

export const TextAreaField = styled.textarea`
	width: 100%;
	resize: none;
	height: 11rem;
	border: 2px solid #bdbdbd;
	font-size: 1.2rem;
	font-weight: 500;
	outline: none;
	font-family: inherit;
	border-radius: 1.2rem;
	padding: 1.5rem;
	&:focus {
		border: 2px solid #f9a109;

		& + label {
			color: #f9a109;
		}
	}
`;

export const DropdownField = styled.select`
	font-family: inherit;
	border: 2px solid #bdbdbd;
	border-radius: 1.2rem;
	padding: 1.5rem;
	outline: none;
`;

export const MiscForm = styled.form`
	width: 100%;
	font-family: "Quicksand", sans-serif;
	margin-top: 4rem;
`;

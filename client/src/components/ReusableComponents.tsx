import styled from "styled-components";
export const Button = styled.button<{
	pad: string;
	bg: string;
	col: string;
}>`
	border: none;
	border-radius: 1.2rem;
	background-color: ${(props) => props.bg};
	padding: ${(props) => props.pad};
	outline: none;
	color: ${(props) => props.col};
	font-family: Quicksand;
	font-style: normal;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 1.7rem;
	cursor: pointer;
`;

import React from "react";
import styled from "styled-components";
import { Add } from "@mui/icons-material";
export const HeadingDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 5rem;
	flex-wrap: wrap;
	gap: 3rem;

	@media only screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;
export const SearchInput = styled.input`
	width: 100%;
	padding: 2rem 4rem 2rem 6rem;
	background-color: white;
	border-radius: 1.5rem;
	font-size: 1.4rem;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.05);
	border: none;
	outline: none;
	font-family: "Quicksand", sans-serif;
	font-weight: 500;
	@media only screen and (max-width: 576px) {
		& {
			padding: 2rem 2rem 2rem 6rem;
		}
	}
`;

export const InputDiv = styled.div`
	position: relative;
	width: 27.5rem;
	display: inline-block;

	@media only screen and (max-width: 678px) {
		& {
			width: 20rem;
		}
	}
`;

export const CategoryDiv = styled.div`
	:not(:last-child) {
		margin-bottom: 10rem;
	}
`;
export const ItemList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	width: 100%;
	grid-gap: 3rem;
`;

const ItemChild = styled.li`
	position: relative;
	border-radius: 1rem;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.05);
	padding: 1rem 3.5rem 1rem 2rem;
	list-style-type: none;
	font-weight: 500;
	font-size: 1.6rem;
	font-family: "Quicksand", sans-serif;
	height: fit-content;
`;

export const Item: React.FC = ({ children }) => {
	return (
		<ItemChild>
			{children}
			<Add
				style={{
					width: "1.5rem",
					height: "1.5rem",
					color: "#C1C1C4",
					position: "absolute",
					top: "0%",
					right: "10%",
					transform: "translateY(90%)",
					cursor: "pointer",
				}}
			/>
		</ItemChild>
	);
};

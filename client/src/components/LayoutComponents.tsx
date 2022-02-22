import React from "react";
import styled from "styled-components";

export const MainLayout = styled.main`
	grid-column: 2;
	padding: 5rem 8rem;
	font-family: "Quicksand", sans-serif;
`;
export const MiscellaneousLayout = styled.div`
	grid-column: 3;
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	@media only screen and (max-width: 1024px) {
		& {
			display: none;
		}
	}
`;

export const MiscAddItemLayout = styled.div`
	grid-row: 1;
	padding: 4rem;
	background-color: #fff0de;
`;
export const MiscShoppingListLayout = styled.div`
	overflow-y: scroll;
	height: 35rem;
	/* width */
	&::-webkit-scrollbar {
		width: 4rem;
		cursor: pointer;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		border: 1.7rem solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		border-radius: 9999px;
		background-color: #f9a109;
	}
`;
export const SaveItemLayout = styled.div`
	background-color: white;
	grid-row: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem 4rem;
`;

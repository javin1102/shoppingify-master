import styled from "styled-components";
import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import {
	FormatListBulletedRounded,
	ReplayRounded,
	InsertChartOutlinedRounded,
	ShoppingCartOutlined,
} from "@mui/icons-material";
const HeaderComponent = styled.header`
	height: 100vh;
	width: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3rem;
	background-color: white;
	align-items: center;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > *:not(:last-child) {
		margin-bottom: 2rem;
	}
`;
const ShoppingCartDiv = styled.div`
	border-radius: 50%;
	background-color: #f9a109;
	width: 5rem;
	height: 5rem;
	position: relative;
	& svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	& .shopping-cart_num {
		position: absolute;
		top: -15%;
		right: -10%;
	}
`;

const ShoppingCartNumber = styled.div.attrs(() => ({
	className: "shopping-cart_num",
}))`
	border-radius: 0.4rem;
	background-color: #eb5757;
	padding: 0.25rem 0.75rem;
	font-size: 1.2rem;
	color: white;
	font-weight: 500;
`;

const Header = () => {
	return (
		<HeaderComponent>
			<img
				src={Logo}
				alt="logo"
				style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
			/>
			<NavList>
				<Link to="/items">
					<FormatListBulletedRounded
						style={{ width: "2.5rem", height: "2.5rem", color: "#000000" }}
					/>
				</Link>
				<Link to="/history">
					<ReplayRounded
						style={{ width: "2.5rem", height: "2.5rem", color: "#000000" }}
					/>
				</Link>
				<Link to="/history">
					<InsertChartOutlinedRounded
						style={{ width: "2.5rem", height: "2.5rem", color: "#000000" }}
					/>
				</Link>
			</NavList>
			<ShoppingCartDiv>
				<ShoppingCartNumber>3</ShoppingCartNumber>
				<ShoppingCartOutlined
					style={{
						color: "white",
						width: "2.5rem",
						height: "2.5rem",
					}}
				/>
			</ShoppingCartDiv>
		</HeaderComponent>
	);
};

export default Header;

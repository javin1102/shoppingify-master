import styled from "styled-components";
import React, { useState } from "react";
import Logo from "../images/logo.svg";
import {
	FormatListBulletedRounded,
	ReplayRounded,
	InsertChartOutlinedRounded,
	ShoppingCartOutlined,
} from "@mui/icons-material";
interface NavListProps {
	stateNum: number;
}

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

const NavList = styled.ul<NavListProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 20rem;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	::after {
		content: "";
		position: absolute;
		width: 5px;
		height: 5rem;
		background-color: #f9a109;
		border-radius: 0 5px 5px 0;
		left: -3.8rem;
		top: 1.65rem;
		transition: transform 0.25s ease-in;
		transform: ${(props) =>
			(props.stateNum === 1 && "translateY(0%)") ||
			(props.stateNum === 2 && "translateY(110%)") ||
			(props.stateNum === 3 && "translateY(220%)")};
	}
`;
const NavItem = styled.div`
	position: relative;

	& span {
		position: absolute;
		border-radius: 5px;
		background-color: #454545;
		color: white;
		font-size: 1.2rem;
		padding: 0.35rem 1.5rem;
		top: 50%;
		right: 0;
		transform: translate(120%, -55%);
		opacity: 0;
		transition: opacity 0.15s ease-in-out;
		line-height: 1.5rem;
	}

	& svg:hover + span {
		opacity: 1;
	}
`;
const ShoppingCartDiv = styled.div`
	border-radius: 50%;
	background-color: #f9a109;
	width: 5rem;
	height: 5rem;
	position: relative;
	cursor: pointer;
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
	const [navState, setNavState] = useState<number>(1);
	return (
		<HeaderComponent>
			<img
				src={Logo}
				alt="logo"
				style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
			/>
			<NavList stateNum={navState}>
				<NavItem>
					<FormatListBulletedRounded
						className="navlist__icon"
						onClick={() => setNavState(1)}
						style={{
							width: "2.5rem ",
							height: "2.5rem",
							color: "#000000",
							cursor: "pointer",
						}}
					/>
					<span>Items</span>
				</NavItem>

				<NavItem>
					<ReplayRounded
						onClick={() => setNavState(2)}
						style={{
							width: "2.5rem ",
							height: "2.5rem",
							color: "#000000",
							cursor: "pointer",
						}}
					/>
					<span>History</span>
				</NavItem>

				<NavItem>
					<InsertChartOutlinedRounded
						onClick={() => setNavState(3)}
						style={{
							width: "2.5rem ",
							height: "2.5rem",
							color: "#000000",
							cursor: "pointer",
						}}
					/>
					<span>Statistics</span>
				</NavItem>
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

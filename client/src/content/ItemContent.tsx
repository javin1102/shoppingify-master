import { Search } from "@mui/icons-material";
import React from "react";
import {
	CategoryDiv,
	HeadingDiv,
	InputDiv,
	Item,
	ItemList,
	SearchInput,
} from "../components/ItemsComponents";
import { Button } from "../components/ReusableComponents";
import { Heading1, Heading2 } from "../components/TypographyComponents";
import style from "./ItemContent.module.css";
const ItemContent: React.FC = () => {
	return (
		<>
			<HeadingDiv>
				<Heading1 style={{ flex: "1 0 50%" }}>
					<span style={{ color: "#F9A109", fontWeight: "700" }}>
						Shoppingify
					</span>{" "}
					allows you take your shopping list wherever you go
				</Heading1>
				<div className={style["misc-heading-div"]}>
					<InputDiv>
						<SearchInput placeholder="Search item" />
						<Search
							style={{
								position: "absolute",
								top: "50%",
								left: "8.5%",
								width: "2rem",
								height: "2rem",
								transform: "translateY(-50%)",
							}}
						/>
					</InputDiv>
					<Button
						className={style["button__add-item"]}
						pad="1.5rem"
						bg="#F9A109"
						col="white"
					>
						Add Item
					</Button>
				</div>
			</HeadingDiv>
			<CategoryDiv>
				<Heading2 style={{ textTransform: "capitalize", marginBottom: "2rem" }}>
					fruit and vegetables
				</Heading2>
				<ItemList>
					<Item>asd</Item>
					<Item>asd asdasdsa qweqwe rew rwerwekrwe r ew rw er wer we </Item>
				</ItemList>
			</CategoryDiv>
			<CategoryDiv>
				<Heading2 style={{ textTransform: "capitalize", marginBottom: "2rem" }}>
					meat and fish
				</Heading2>
				<ItemList>
					<Item>Chicken 1kg</Item>
					<Item>Fiesta's Meatball</Item>
				</ItemList>
			</CategoryDiv>
		</>
	);
};

export default ItemContent;

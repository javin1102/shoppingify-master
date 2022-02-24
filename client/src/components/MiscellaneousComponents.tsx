import styled from "styled-components";
import beer from "../images/source.svg";
import { Create, Add, Remove, DeleteOutline } from "@mui/icons-material";
import { Heading1, Heading2, P } from "../components/TypographyComponents";
import { Button } from "./ReusableComponents";
import {
	MiscAddItemLayout,
	MiscInputItemLayout,
	MiscSaveInputItemLayout,
	MiscShoppingListLayout,
	SaveItemLayout,
} from "./LayoutComponents";
import {
	LabelField,
	MiscForm,
	MiscInputDiv,
	MiscInputField,
	TextAreaField,
} from "./FormComponents";
import {
	TextField,
	Autocomplete,
	createFilterOptions,
	MenuItem,
	Select,
	FilterOptionsState,
} from "@mui/material";
const MiscAddItemComponent = styled.div`
	width: 100%;
	border-radius: 2.4rem;
	background-color: #80485b;
	padding: 2rem;
	position: relative;
	display: flex;
`;

const MiscShoppingListHeaderComponent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-block: 3rem;
	align-items: center;
`;

const MiscShoppingListComponent = styled.ul`
	width: 100%;
	font-family: Quicksand, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.7rem;
	color: #828282;

	&:not(:last-child) {
		margin-bottom: 4.5rem;
	}
`;

const MiscShoppingListItemComponent = styled.li`
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:first-child {
		margin-top: 2rem;
	}
	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
const MiscShoppingListIncrementerComponent = styled.div`
	display: flex;
	background-color: white;
	border-radius: 1.2rem;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;

	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;

const MiscShoppingListIncrementerButtonComponent = styled.button`
	border: 2px solid #f9a109;
	border-radius: 2.4rem;
	outline: none;
	background-color: transparent;
	padding: 0.5rem 2rem;
	font-family: Quicksand, sans-serif;
	font-weight: 500;
	color: #f9a109;
	cursor: pointer;
`;
const SaveItemInput = styled.input`
	border-radius: 1.2rem;
	padding: 1.5rem;
	font-size: 1.4rem;
	font-weight: 500;
	border: 2px solid #f9a109;
	outline: none;
	width: 100%;
`;

const SaveItemDiv = styled.div`
	width: 80%;
	height: 5rem;
	font-family: "Quicksand", sans-serif;
	position: relative;
`;

const MiscAddItemBanner: React.FC = () => {
	return (
		<MiscAddItemComponent>
			<img
				src={beer}
				alt="beer"
				style={{
					height: "15rem",
					position: "absolute",
					top: "-19%",
					left: "3%",
				}}
			/>
			<div style={{ maxWidth: "20rem", marginLeft: "auto" }}>
				<P style={{ color: "white", marginBottom: "2rem" }}>
					Didn't find what you need?
				</P>
				<Button bg="white" col="black" pad="1rem 3rem">
					Add item
				</Button>
			</div>
		</MiscAddItemComponent>
	);
};

const MiscShoppingListHeader: React.FC = () => {
	return (
		<MiscShoppingListHeaderComponent>
			<Heading1 style={{ fontWeight: "700" }}>Shopping List</Heading1>
			<Create style={{ height: "2rem", width: "2rem" }} />
		</MiscShoppingListHeaderComponent>
	);
};

const MiscShoppingList: React.FC = ({ children }) => {
	return (
		<MiscShoppingListComponent>
			{children}
			<MiscShoppingListItemComponent>
				<Heading2 style={{ color: "black" }}>Avocado</Heading2>
				<MiscShoppingListIncrementerComponent>
					<div
						style={{
							borderRadius: "1.2rem",
							padding: "1rem",
							backgroundColor: "#F9A109",
							cursor: "pointer",
						}}
					>
						<DeleteOutline
							htmlColor="#ffffff"
							style={{ width: "1.8rem", height: "1.8rem" }}
						/>
					</div>
					<Remove
						htmlColor="#F9A109"
						style={{ width: "1.4rem", height: "1.4rem", cursor: "pointer" }}
					/>
					<MiscShoppingListIncrementerButtonComponent>
						3 pcs
					</MiscShoppingListIncrementerButtonComponent>
					<Add
						htmlColor="#F9A109"
						style={{ width: "1.4rem", height: "1.4rem", cursor: "pointer" }}
					/>
				</MiscShoppingListIncrementerComponent>
			</MiscShoppingListItemComponent>
		</MiscShoppingListComponent>
	);
};

export const MiscAddItem: React.FC = () => {
	return (
		<>
			<MiscAddItemLayout>
				<MiscAddItemBanner />
				<MiscShoppingListHeader />
				<MiscShoppingListLayout>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
					<MiscShoppingList>Fruit and vegetables</MiscShoppingList>
				</MiscShoppingListLayout>
			</MiscAddItemLayout>
			<SaveItemLayout>
				<SaveItemDiv>
					<SaveItemInput placeholder="Enter a name" />
					<Button
						col="white"
						bg="#F9A109"
						pad="1.5rem"
						style={{ position: "absolute", right: "0", top: "2px" }}
					>
						Save
					</Button>
				</SaveItemDiv>
			</SaveItemLayout>
		</>
	);
};

export const MiscInputItem: React.FC = () => {
	const options = ["One", "Two", "Three", "Four"];
	const filter = createFilterOptions();
	return (
		<>
			<MiscInputItemLayout>
				<Heading1 style={{ fontWeight: "600" }}>Add a new item</Heading1>
				<MiscForm>
					<MiscInputDiv>
						<MiscInputField
							type="text"
							placeholder="Enter a name"
							id="item__name"
						/>
						<LabelField
							style={{ fontWeight: "600", fontSize: "1.4rem" }}
							htmlFor="item__name"
						>
							Name
						</LabelField>
					</MiscInputDiv>
					<MiscInputDiv>
						<TextAreaField placeholder="Enter a note" id="item__note" />
						<LabelField
							style={{ fontWeight: "600", fontSize: "1.4rem" }}
							htmlFor="item__note"
						>
							Note (optional)
						</LabelField>
					</MiscInputDiv>
					<MiscInputDiv>
						<MiscInputField
							type="text"
							placeholder="Enter a url"
							id="item__image"
						/>
						<LabelField
							style={{ fontWeight: "600", fontSize: "1.4rem" }}
							htmlFor="item__image"
						>
							Image (optional)
						</LabelField>
					</MiscInputDiv>
					<MiscInputDiv>
						<Autocomplete
							filterOptions={(options, state) => {
								const filtered = filter(
									options,
									state as FilterOptionsState<unknown>,
								);
								if (state.inputValue !== "") {
									filtered.push(`${state.inputValue}`);
								}
								return filtered as string[];
							}}
							id="item__dropdown"
							options={options}
							className="Autocomplete"
							renderInput={(params) => <TextField {...params} />}
						/>
						<LabelField
							style={{ fontWeight: "600", fontSize: "1.4rem" }}
							htmlFor="item__dropdown"
						>
							Category
						</LabelField>
					</MiscInputDiv>
				</MiscForm>
			</MiscInputItemLayout>
			<MiscSaveInputItemLayout>
				<span>cancel</span>
				<Button pad="2rem" bg="#f9a109" col="white">
					Save
				</Button>
			</MiscSaveInputItemLayout>
		</>
	);
};

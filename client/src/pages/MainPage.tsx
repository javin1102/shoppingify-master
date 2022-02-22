import { Button } from "../components/ReusableComponents";
import React, { useState } from "react";
import Header from "../components/Header";
import {
	MainLayout,
	MiscAddItemLayout,
	MiscellaneousLayout,
	MiscShoppingListLayout,
	SaveItemLayout,
} from "../components/LayoutComponents";
import {
	MiscAddItem,
	MiscShoppingList,
	MiscShoppingListHeader,
	SaveItemDiv,
	SaveItemInput,
} from "../components/MiscellaneousComponents";
import ItemContent from "../content/ItemContent";
const MainPage: React.FC = () => {
	const [navState, setNavState] = useState<number>(1);
	return (
		<>
			<Header stateNum={navState} setState={setNavState} />
			<MainLayout>
				<ItemContent />
			</MainLayout>
			<MiscellaneousLayout>
				<MiscAddItemLayout>
					<MiscAddItem />
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
			</MiscellaneousLayout>
		</>
	);
};

export default MainPage;

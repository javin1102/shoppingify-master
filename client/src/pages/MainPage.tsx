import { Button } from "../components/ReusableComponents";
import React, { useState } from "react";
import Header from "../components/Header";
import {
	MainLayout,
	MiscellaneousLayout,
} from "../components/LayoutComponents";
import {
	MiscAddItem,
	MiscInputItem,
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
				{/* <MiscAddItem /> */}
				{/* <MiscInputItem /> */}
			</MiscellaneousLayout>
		</>
	);
};

export default MainPage;

import React, { useState } from "react";
import Header from "../components/Header";
import {
	MainLayout,
	MiscellaneousLayout,
} from "../components/LayoutComponents";
import ItemContent from "../content/ItemContent";
const MainPage: React.FC = () => {
	const [navState, setNavState] = useState<number>(1);
	return (
		<>
			<Header stateNum={navState} setState={setNavState} />
			<MainLayout>
				<ItemContent />
			</MainLayout>
			<MiscellaneousLayout></MiscellaneousLayout>
		</>
	);
};

export default MainPage;

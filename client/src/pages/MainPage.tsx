import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {
	MainLayout,
	MiscellaneousLayout,
} from "../components/LayoutComponents";
import { Search } from "@mui/icons-material";
import { Heading1 } from "../components/TypographyComponents";
import ItemContent from "../content/ItemContent";

const MainPage: React.FC = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<ItemContent />
			</MainLayout>
			<MiscellaneousLayout></MiscellaneousLayout>
		</>
	);
};

export default MainPage;

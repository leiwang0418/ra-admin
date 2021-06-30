import React from "react";
import {
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
    Toolbar,
} from "@material-ui/core";
import ComponentPropType from '@utils/ComponentPropType';
import HideOnScroll from "./HideOnScroll";

const AppBar = (props: AppBarProps): JSX.Element => {
	const { container: Container = HideOnScroll } = props;
	return (
		<Container>
			<MuiAppBar>
				<Toolbar>
					toolbar
				</Toolbar>
			</MuiAppBar>
		</Container>
	);
};

AppBar.propTypes = {
	container: ComponentPropType,
};


export interface AppBarProps extends MuiAppBarProps {
	container: React.ElementType;
}

export default AppBar;

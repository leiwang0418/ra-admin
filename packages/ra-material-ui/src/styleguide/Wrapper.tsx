import { Component } from "react";
import { IntlProvider } from "react-intl";
import en from "../compiled-lang/en.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default class Wrapper extends Component {
	render() {
		
		return (
			<IntlProvider locale="en" messages={en}>
				<ThemeProvider theme={theme}>
					{this.props.children}
				</ThemeProvider>
			</IntlProvider>
		);
	}
}

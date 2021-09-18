import React, { FC } from "react";
import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import en from "../compiled-lang/en.json";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme();

const customRender = (
	ui: React.ReactElement,
	{ locale = "en", ...renderOptions } = {}
) => {
	const Wrapper: FC = ({ children }) => (
		<IntlProvider locale={locale} messages={en}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</IntlProvider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { customRender as render };

import React, { FC } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import en from "../compiled-lang/en.json";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

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

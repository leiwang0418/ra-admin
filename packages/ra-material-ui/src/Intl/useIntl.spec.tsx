import React from 'react';
import useIntl from "./useIntl";
import { render, screen } from "../utils/test-utils";

describe("useIntl", () => {
	const Component = () => {
		const intl = useIntl();
		return (<div>{intl("hello")}</div>);
	};

	it("should not fail when used outside of intl provider", () => {
		render(<Component />);
		expect(screen.queryAllByText("hello")).toHaveLength(1);
	});
});
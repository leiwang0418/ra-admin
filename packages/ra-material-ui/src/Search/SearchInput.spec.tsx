import React from "react";
import { render, screen } from "../utils/test-utils";
import SearchInput from "./SearchInput";

describe("snapshot test", () => {
	it("render the basic SearchInput", () => {
		const { container } = render(<SearchInput />);

		expect(container).toMatchSnapshot();

		expect(screen.getByLabelText(/Search.../i)).toBeInTheDocument();
	});
});

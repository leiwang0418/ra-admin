import React from "react";
import { render, screen, fireEvent } from "../utils/test-utils";
import Search from "./Search";

describe("snapshot test", () => {
	it("render basic Search", () => {
		const { container } = render(<Search />);

		expect(container).toMatchSnapshot();

		expect(
			screen.getByLabelText(/Search.../i, { selector: "input" })
		).toBeInTheDocument();

		expect(
			screen.getByRole("button", { name: "Search" })
		).toBeInTheDocument();

		expect(
			screen.getByRole("button", { name: "Show search options" })
		).toBeInTheDocument();

		expect(
			screen.queryByRole("button", { name: "Clear search" })
		).not.toBeInTheDocument();
	});

	it("render has clear button Search", () => {
		const { container } = render(<Search />);
		const search = screen.getByLabelText(/Search.../i, {
			selector: "input",
		});

		expect(
			screen.queryByRole("button", { name: "Clear search" })
		).not.toBeInTheDocument();

		fireEvent.change(search, { target: { value: "lei" } });

		expect(screen.getByDisplayValue("lei") === search).toBe(true);
		expect(
			screen.queryByRole("button", { name: "Clear search" })
		).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});
});

// todo Act not test
// describe('act test', () => {
// 	it('should ', () => {
		
// 	})
// });

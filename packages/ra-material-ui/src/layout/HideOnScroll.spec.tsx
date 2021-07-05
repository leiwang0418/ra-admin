import { render, screen } from "@utils/test-utils";

import HideOnScroll from "./HideOnScroll";
import * as mui from "@material-ui/core";

jest.mock("@material-ui/core", () => ({
	...jest.requireActual("@material-ui/core"),
	useScrollTrigger: jest.fn(),
}));

describe("HideOnScroll", (): void => {
	it("should render onScroll HideOnScroll", () => {
		jest.spyOn(mui, "useScrollTrigger").mockReturnValue(true);
		const { container } = render(
			<HideOnScroll>
				<div>basic HideOnScroll</div>
			</HideOnScroll>
		);

		expect(container).toMatchSnapshot();
	});

	it("should render not onScroll HideOnScroll", () => {
		jest.spyOn(mui, "useScrollTrigger").mockReturnValue(false);
		const { container } = render(
			<HideOnScroll>
				<div>basic HideOnScroll</div>
			</HideOnScroll>
		);

		expect(container).toMatchSnapshot();
	});
});

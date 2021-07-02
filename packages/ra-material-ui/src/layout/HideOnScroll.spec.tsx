import { render, screen } from "@utils/test-utils";
import HideOnScroll from "./HideOnScroll";

jest.mock("@material-ui/core", () => ({
	...jest.requireActual("@material-ui/core"),
	useScrollTrigger: jest.fn().mockReturnValue(true),
}));

describe("HideOnScroll", (): void => {
	it("mock test", () => {
		render(
			<HideOnScroll>
				<div>basic HideOnScroll</div>
			</HideOnScroll>
		);
		screen.debug();
	});
	// it("should render basic HideOnScroll", () => {
	// 	jest.spyOn(mui, 'useScrollTrigger').mockReturnValue(true);
	// 	const { container } = render(
	// 		<HideOnScroll>
	// 			<div>basic HideOnScroll</div>
	// 		</HideOnScroll>
	// 	);

	// 	screen.debug();
	// 	// expect(container).toMatchSnapshot();
	// });

	// it("should render onScroll HideOnScroll", () => {
	// 	useScrollTriggerMock.mockReturnValue(true);
	// 	const { container } = render(
	// 		<HideOnScroll>
	// 			<div>onScroll HideOnScroll</div>
	// 		</HideOnScroll>
	// 	);

	// 	expect(container).toMatchSnapshot();
	// });
});

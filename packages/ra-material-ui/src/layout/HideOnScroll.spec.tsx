import { render, screen } from "@utils/test-utils";

import HideOnScroll, { video } from "./HideOnScroll";
import * as mui from "@material-ui/core";

// jest.mock('@material-ui/core', () => ({
// 	useScrollTrigger: () => true;
// }));
describe("HideOnScroll", (): void => {
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

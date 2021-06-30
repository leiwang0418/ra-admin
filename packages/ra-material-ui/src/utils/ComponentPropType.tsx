import { ReactPropTypes } from "react";
import { isValidElementType } from "react-is";
import { Validator } from "prop-types";

export default (
	props: { [key: string]: any },
	propName: string,
	componentName: string
) => {
	const prop = props[propName];
	if (prop && !isValidElementType(prop)) {
		return new Error(
			`Invalid prop '${propName} supplied to '${componentName}': the prop is not a valid React component`
		);
	}
};
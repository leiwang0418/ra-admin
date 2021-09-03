import { isValidElementType } from "react-is";

const ComponentPropType = (
	props: { [key: string]: any },
	propName: string,
	componentName: string
) => {
	if (props[propName] && !isValidElementType(props[propName])) {
		return new Error(
			`Invalid prop '${propName}' supplied to '${componentName}': the prop is not a valid React component`
		);
	}
};

export default ComponentPropType;
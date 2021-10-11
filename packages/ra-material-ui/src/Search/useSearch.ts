import React, { SyntheticEvent } from "react";
import {
	unstable_setRef as setRef,
	unstable_useEventCallback as useEventCallback,
	unstable_useControlled as useControlled,
	unstable_useId as useId,
} from "@mui/utils";

interface useSearchProps {
	componentName?: string;
	id: string;
	open?: boolean;
}

// 参考：https://github.com/mui-org/material-ui/blob/master/packages/mui-core/src/AutocompleteUnstyled/useAutocomplete.js
const useSearch = (props: useSearchProps) => {
	const { componentName = "useSearch", id: idProp, open: openProp } = props;

	const [open, setOpenState] = useControlled({
		controlled: openProp,
		default: false,
		name: componentName,
		state: "open",
	});

	const listboxAvailable = open; // 过滤列表长度大于0
	const popupOpen = open;
	const id = useId(idProp);
	const [anchorEl, setAnchorEl] = React.useState(null);

	return {
		getRootProps: (other = {}) => ({
			"aria-owns": listboxAvailable ? `${id}-listbox` : "",
			role: "combobox",
			"aria-expanded": listboxAvailable,
			onKeyDown: handleKeyDown(other),
			// onMouseDown: handleMouseDown,
			// onClick: handleClick,
		}),
		getInputProps: () => ({}),
		getClearProps: () => ({}),
		getListboxProps: () => ({}),
		focused: false,
		dirty: false,
		setAnchorEl,
	};
};

export default useSearch;

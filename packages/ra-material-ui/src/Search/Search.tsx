import React, { useState } from "react";
import PropTypes, { InferProps } from "prop-types";
import { defineMessages, useIntl } from "react-intl";
import {
	Paper,
	InputBase,
	Divider,
	PaperProps,
	useAutocomplete,
	List,
	ListItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TuneIcon from "@mui/icons-material/Tune";
import { alpha, styled } from "@mui/material/styles";

// interface SearchRootProps extends PaperProps<"form", { component: "form" }> {
interface SearchRootProps extends PaperProps {
	focused?: boolean;
	// theme?: Theme;
}

const SearchRoot = styled(Paper, {
	shouldForwardProp: (prop) => prop !== "focused",
})<SearchRootProps>(({ focused, theme }) => ({
	borderRadius: theme.shape.borderRadius,
	backgroundColor: focused
		? theme.palette.common.white
		: alpha(theme.palette.common.black, 0.05),
	...(focused && { boxShadow: theme.shadows[2] }),
}));

const SearchListbox = styled(List)(({ theme }) => ({
	margin: 0,
	padding: 0,
	zIndex: 1,
	position: "absolute",
	listStyle: "disc",
	backgroundColor: theme.palette.background.paper,
	overflow: "auto",
	border: "1px solid rgba(0,0,0,.25)",
	'&[data-focus="true"]': {
		backgroundColor: "#4a8df6",
		color: "white",
		cursor: "pointer",
	},
	"& li:active": {
		backgroundColor: "red",
		color: "white",
	},
	"& .Mui-focused": {
		backgroundColor: "blue",
	},
}));

const SearchItem = styled(ListItem)(({ theme }) => ({}));

const SearchInputBaseTypes = {
	placeholderLabel: PropTypes.object,
	clearLabel: PropTypes.object,
	searchLabel: PropTypes.object,
	removeLabel: PropTypes.object,
	id: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onInputChange: PropTypes.func,
	width: PropTypes.number,
};

export type SearchTypes = InferProps<typeof SearchInputBaseTypes>;

interface SearchTypesWithoutDefaultProps
	extends Omit<
		SearchTypes,
		| "placeholderLabel"
		| "clearLabel"
		| "searchLabel"
		| "removeLabel"
		| "onInputChange"
		| "width"
	> {}

const Search = (props: SearchTypesWithoutDefaultProps) => {
	const intl = useIntl();
	const [inputValue, setInputValue] = useState<string | undefined>("");
	const [open, setOpen] = useState<boolean>(true);
	const [options, setOptions] = useState<string[]>([]);

	const {
		placeholderLabel = messages.placeholder,
		clearLabel = messages.clearLabel,
		searchLabel = messages.searchLabel,
		showSearchOptions = messages.showSearchOptions,
		options: optionProps,
		getOptionLabel = (option: typeof props.options[0]) =>
			option.label ?? option,
		onInputChange = (event: React.SyntheticEvent, value: string) => {
			if (value.length > 0) {
				// setOptions(searchOptions, [...optionProps, `More search for '${value}'`]);
				setOptions([...optionProps, value]);
			}
			setInputValue(value);
			setOpen(true);
		},
		onClose = () => setOpen(false),
		freeSolo = true,
		width = 0,
	} = { ...props };

	const {
		getRootProps,
		getClearProps,
		getInputProps,
		getListboxProps,
		getOptionProps,
		groupedOptions,
		focused,
		anchorEl,
		setAnchorEl,
	} = useAutocomplete({
		...props,
		options,
		getOptionLabel,
		value: inputValue,
		inputValue,
		onInputChange,
		freeSolo,
		open,
		onClose,
		componentName: "SearchComponent",
	});

	const renderHistoryOption = (props2: any, option: any) => (
		<li {...props2}>{getOptionLabel(option)}</li>
	);

	const renderDataOption = (props2: any, option: any) => (
		<li {...props2}>{getOptionLabel(option)}</li>
	);

	const renderTipOption = (props2: any, option: any) => (
		<li {...props2}>{getOptionLabel(option)}</li>
	);

	const renderListOption = (option: any, index: number) => {
		const optionProps = getOptionProps({ option, index });
		const length = groupedOptions.length;

		return <SearchItem>testas</SearchItem>;
		// if (index + 1 == length) {
		// 	return renderHistoryOption({ ...optionProps }, option);
		// } else {
		// 	return renderDataOption({ ...optionProps }, option);
		// }
	};

	console.log("width", width);
	console.log("anchorEl.clientWidth", anchorEl?.clientWidth);
	return (
		<React.Fragment>
			<SearchRoot
				ref={setAnchorEl}
				focused={focused}
				elevation={focused ? 1 : 0}
				sx={{
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					width: width || null,
				}}
				{...getRootProps()}
			>
				<IconButton
					sx={{ p: "10px" }}
					aria-label={intl.formatMessage(searchLabel)}
				>
					<SearchIcon />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder={intl.formatMessage(placeholderLabel)}
					inputProps={{
						...getInputProps(),
						"aria-label": intl.formatMessage(placeholderLabel),
					}}
				/>
				<IconButton
					{...getClearProps()}
					sx={{
						p: "10px",
						visibility: inputValue! ? "visible" : "hidden",
					}}
					aria-label={intl.formatMessage(clearLabel)}
				>
					<ClearIcon />
				</IconButton>
				<Divider
					sx={{
						height: 28,
						m: 0.5,
						visibility: inputValue! ? "visible" : "hidden",
					}}
					orientation="vertical"
				/>
				<IconButton
					sx={{ p: "10px" }}
					aria-label={intl.formatMessage(showSearchOptions)}
				>
					<TuneIcon />
				</IconButton>
			</SearchRoot>
			{anchorEl && inputValue! && focused ? (
				<SearchListbox
					{...getListboxProps()}
					sx={{
						width: anchorEl ? anchorEl.clientWidth : null,
					}}
				>
					{groupedOptions.length > 0
						? groupedOptions.map((option, index) =>
								renderListOption(option, index)
						  )
						: null}
				</SearchListbox>
			) : null}
		</React.Fragment>
	);
};

Search.propTypes = SearchInputBaseTypes;

const messages = defineMessages({
	placeholder: {
		id: "ra.defaultSearch.placeholder",
		defaultMessage: "Search...",
	},
	searchLabel: {
		id: "ra.defaultSearch.search.label",
		defaultMessage: "Search",
	},
	clearLabel: {
		id: "ra.defaultSearch.clear.label",
		defaultMessage: "Clear search",
	},
	showSearchOptions: {
		id: "ra.defaultSearch.show.search.options.label",
		defaultMessage: "Show search options",
	},
});

export default Search;

import React, { useState } from "react";
import PropTypes, { InferProps } from "prop-types";
import { defineMessages, useIntl } from "react-intl";
import {
	Paper,
	InputBase,
	Divider,
	PaperProps,
	useAutocomplete,
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

const Listbox = styled("ul")(({ theme }) => ({
	width: 200,
	margin: 0,
	padding: 0,
	zIndex: 1,
	position: "absolute",
	listStyle: "none",
	backgroundColor: theme.palette.background.paper,
	overflow: "auto",
	maxHeight: 200,
	border: "1px solid rgba(0,0,0,.25)",
	'& li[data-focus="true"]': {
		backgroundColor: "#4a8df6",
		color: "white",
		cursor: "pointer",
	},
	"& li:active": {
		backgroundColor: "red",
		color: "white",
	},
}));

const SearchInputBaseTypes = {
	placeholderLabel: PropTypes.object,
	clearLabel: PropTypes.object,
	searchLabel: PropTypes.object,
	focused: PropTypes.bool,
	id: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onInputChange: PropTypes.func,
};

export type SearchTypes = InferProps<typeof SearchInputBaseTypes>;

interface SearchTypesWithoutDefaultProps
	extends Omit<
		SearchTypes,
		| "placeholderLabel"
		| "clearLabel"
		| "searchLabel"
		| "removeLabel"
		| "PopperComponent"
		| "ListboxComponent"
		| "renderOption"
		| "focused"
		| "onInputChange"
	> {}

const Search = (props: SearchTypesWithoutDefaultProps) => {
	const {
		placeholderLabel = messages.placeholder,
		clearLabel = messages.clearLabel,
		searchLabel = messages.searchLabel,
		showSearchOptions = messages.showSearchOptions,
		getOptionLabel = (option) => option.label ?? option,
		onInputChange = (event, value) => setInputValue(value),
		freeSolo = true,
	} = { ...props };
	const [inputValue, setInputValue] = useState<string | null>("");
	const intl = useIntl();

	const {
		getRootProps,
		getClearProps,
		getInputProps,
		getListboxProps,
		getOptionProps,
		groupedOptions,
		focused,
		dirty,
	} = useAutocomplete({
		...props,
		getOptionLabel,
		value: inputValue,
		inputValue,
		onInputChange,
		freeSolo,
		componentName: "SearchComponent",
	});

	return (
		<React.Fragment>
			<SearchRoot
				focused={focused}
				elevation={focused ? 1 : 0}
				sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
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
					sx={{ p: "10px", visibility: inputValue.length > 0 ? "visible" : "hidden" }}
					aria-label={intl.formatMessage(clearLabel)}
				>
					<ClearIcon />
				</IconButton>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton
					sx={{ p: "10px" }}
					aria-label={intl.formatMessage(showSearchOptions)}
				>
					<TuneIcon />
				</IconButton>
			</SearchRoot>
			{groupedOptions.length > 0 ? (
				<Listbox {...getListboxProps()}>
					{(groupedOptions as typeof top100Films).map(
						(option, index) => (
							<li {...getOptionProps({ option, index })}>
								{option}
							</li>
						)
					)}
				</Listbox>
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

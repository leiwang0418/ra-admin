import React, { useState, useRef } from "react";
import PropTypes, { InferProps } from "prop-types";
import { defineMessages, useIntl } from "react-intl";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
import { makeStyles } from "@material-ui/styles";
import { styled, alpha } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";

const SearchRoot = styled(Paper)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.1),
	padding: "2px 4px",
	alignItems: "center",
}));

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		boxShadow: theme.shadows[2],
		backgroundColor: `${theme.palette.common.white} !important`,
	},
}));

const SearchPropTypes = {
	placeholderLabel: PropTypes.object,
	clearLabel: PropTypes.object,
	searchLabel: PropTypes.object,
};

export type SearchTypes = InferProps<typeof SearchPropTypes>;

const SearchInput = (props: SearchTypes) => {
	const {
		placeholderLabel = messages.placeholder,
		clearLabel = messages.clearLabel,
		searchLabel = messages.searchLabel,
	} = props;

	const intl = useIntl();
	const [value, setValue] = useState("");
	const classes = useStyles();
	const [focused, setFocused] = useState(false);
	const inputEl = useRef<HTMLInputElement | null>(null);

	const CancelIcon = (
		<IconButton
			sx={{ visibility: value ? "visible" : "hidden" }}
			aria-label={clearLabel ? intl.formatMessage(clearLabel) : ""}
			onClick={() => {
				setValue("");
				inputEl.current!.focus();
			}}
		>
			<CancelRoundedIcon onMouseDown={(e) => e.preventDefault()} />
		</IconButton>
	);
	const DividerIcon = (
		<Divider
			sx={{
				height: 20,
				m: 0.5,
				visibility: value ? "visible" : "hidden",
			}}
			orientation="vertical"
		/>
	);
	const BasicSearch = (
		<InputAdornment position="start">
			<IconButton
				aria-label={searchLabel ? intl.formatMessage(searchLabel) : ""}
				onClick={() => console.log("basic search")}
			>
				<SearchIcon onMouseDown={(e) => e.preventDefault()} />
			</IconButton>
		</InputAdornment>
	);
	const AdvancedSearch = (
		<IconButton
			onClick={() => console.log("advanced search")}
			sx={{ p: "5px" }}
			aria-label={searchLabel ? intl.formatMessage(searchLabel) : ""}
		>
			<TuneIcon />
		</IconButton>
	);

	return (
		<SearchRoot
			className={focused ? classes.root : ""}
			elevation={focused ? 1 : 0}
		>
			<InputBase
				fullWidth
				startAdornment={BasicSearch}
				endAdornment={
					<React.Fragment>
						{CancelIcon}
						{DividerIcon}
						{AdvancedSearch}
					</React.Fragment>
				}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				inputRef={inputEl}
				inputProps={{
					"aria-label": placeholderLabel
						? intl.formatMessage(placeholderLabel)
						: "",
					placeholder: placeholderLabel
						? intl.formatMessage(placeholderLabel)
						: "",
				}}
			/>
		</SearchRoot>
	);
};

SearchInput.propTypes = SearchPropTypes;

const messages = defineMessages({
	placeholder: {
		id: "ra.defaultSearch.placeholder",
		defaultMessage: "Search...",
	},
	clearLabel: {
		id: "ra.defaultSearch.clear.label",
		defaultMessage: "Clear",
	},
	searchLabel: {
		id: "ra.defaultSearch.search.label",
		defaultMessage: "Search",
	},
});

export default SearchInput;

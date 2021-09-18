// import PropTypes, { InferProps } from "prop-types";
// import { defineMessages, useIntl } from "react-intl";
// import {
// 	alpha,
// 	Divider,
// 	IconButton,
// 	InputAdornment,
// 	InputBase,
// 	Paper,
// 	PaperProps,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
// import TuneIcon from "@mui/icons-material/Tune";
// import { styled } from "@mui/system";
// import { Theme } from "@mui/material";

// interface StyledPaperProps extends PaperProps {
// 	focused?: boolean;
// 	theme?: Theme;
// }

// const SearchRoot = styled(Paper, {
// 	shouldForwardProp: (prop) => prop !== "focused",
// })<StyledPaperProps>(({ focused, theme }) => {
// 	return {
// 		borderRadius: theme.shape.borderRadius,
// 		padding: "2px 4px",
// 		alignItems: "center",
// 		backgroundColor: focused
// 			? theme.palette.common.white
// 			: alpha(theme.palette.common.black, 0.1),
// 		...(focused && { boxShadow: theme.shadows[2] }),
// 	};
// });

// const SearchEndAdornment = styled("div")({
// 	// We use a position absolute to support wrapping tags.
// 	position: "absolute",
// 	right: 0,
// 	display: "contents",
// });

// const SearchPropTypes = {
// 	placeholderLabel: PropTypes.object,
// 	clearLabel: PropTypes.object,
// 	searchLabel: PropTypes.object,
// 	showSearchOptions: PropTypes.object,
// 	// focus: PropTypes.bool.isRequired,
// 	params: PropTypes.object,
// };

// export type SearchTypes = InferProps<typeof SearchPropTypes>;

// const SearchInput = (props: SearchTypes) => {
// 	const {
// 		placeholderLabel = messages.placeholder,
// 		clearLabel = messages.clearLabel,
// 		searchLabel = messages.searchLabel,
// 		showSearchOptions = messages.showSearchOptions,
// 		focused,
// 		hasClearIcon,
// 		getClearProps,
// 		hasSearchOptions,
// 		getRootProps,
// 		getInputProps,
// 	} = props;

// 	console.log("getClearProps()", getClearProps());

// 	const intl = useIntl();

// 	const renderClearIcon = (
// 			<IconButton
// 				{...getClearProps()}
// 				aria-label={clearLabel ? intl.formatMessage(clearLabel) : ""}
// 			>
// 				<CancelRoundedIcon />
// 			</IconButton>
// 	);
// 	const renderDriver = (<Divider
// 				sx={{
// 					height: 20,
// 					m: 0.5,
// 				}}
// 				orientation="vertical"
// 			/>);


// 	const renderSearch = (
// 		<InputAdornment position="start">
// 			<IconButton
// 				aria-label={searchLabel ? intl.formatMessage(searchLabel) : ""}
// 				onClick={() => console.log("basic search")}
// 			>
// 				<SearchIcon onMouseDown={(e) => e.preventDefault()} />
// 			</IconButton>
// 		</InputAdornment>
// 	);
// 	const renderShowSearchOptions = (
// 		<IconButton
// 			onClick={() => console.log("ShowSearchOptions")}
// 			sx={{ p: "5px" }}
// 			aria-label={
// 				showSearchOptions ? intl.formatMessage(showSearchOptions) : ""
// 			}
// 		>
// 			<TuneIcon />
// 		</IconButton>
// 	);

// 	return (
// 		<SearchRoot
// 			{...getRootProps()}
// 			focused={focused}
// 			elevation={focused ? 1 : 0}
// 		>
// 			<InputBase
// 				fullWidth
// 				startAdornment={renderSearch}
// 				endAdornment={
// 					<SearchEndAdornment>
// 						{hasClearIcon ? renderClearIcon : null}
// 						{hasClearIcon ? renderDriver : null}
// 						{renderShowSearchOptions}
// 					</SearchEndAdornment>
// 				}
// 				inputProps={{
// 					"aria-label": placeholderLabel
// 						? intl.formatMessage(placeholderLabel)
// 						: "",
// 					placeholder: placeholderLabel
// 						? intl.formatMessage(placeholderLabel)
// 						: "",
// 					...getInputProps(),
// 				}}
// 			/>
// 		</SearchRoot>
// 	);
// };

// SearchInput.propTypes = SearchPropTypes;

// const messages = defineMessages({
// 	placeholder: {
// 		id: "ra.defaultSearch.placeholder",
// 		defaultMessage: "Search...",
// 	},
// 	searchLabel: {
// 		id: "ra.defaultSearch.search.label",
// 		defaultMessage: "Search",
// 	},
// 	clearLabel: {
// 		id: "ra.defaultSearch.clear.label",
// 		defaultMessage: "Clear search",
// 	},
// 	showSearchOptions: {
// 		id: "ra.defaultSearch.show.search.options.label",
// 		defaultMessage: "Show search options",
// 	},
// });

// export default SearchInput;

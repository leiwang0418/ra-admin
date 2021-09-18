// import { useState } from "react";
// import PropTypes, { InferProps } from "prop-types";
// import { defineMessages, useIntl } from "react-intl";
// import { styled } from "@material-ui/core/styles";
// import MenuList from "@material-ui/core/MenuList";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import CloseIcon from "@material-ui/icons/Close";
// import HistoryIcon from "@material-ui/icons/History";
// import SearchItem from "./SearchItem";
// import LightTooltip from "../LightTooltip";

// const RemoveItemIcon = styled(ListItemIcon)(() => ({
// 	cursor: "pointer",
// }));

// const HistoryListPropTypes = {
// 	items: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			content: PropTypes.string.isRequired,
// 		})
// 	),
// };

// export type HistoryListTypes = InferProps<typeof HistoryListPropTypes>;

// const HistoryList = (props: HistoryListTypes) => {
// 	// const { items } = props;
// 	const removeLabel = messages.removeLabel;
// 	const intl = useIntl();
// 	const [mouseEnter, setMouseEnter] = useState<boolean>(false);

// 	return (
// 		<>
// 			<SearchItem
// 				onMouseEnter={() => setMouseEnter(true)}
// 				onMouseLeave={() => setMouseEnter(false)}
// 			>
// 				<ListItemIcon>
// 					<HistoryIcon fontSize="small" />
// 				</ListItemIcon>
// 				<ListItemText>
// 					<Typography variant="inherit" noWrap>
// 						A very long text that overflows Add space after
// 						paragraphAdd space after paragraphAdd space after
// 						paragraphAdd space after paragraphAdd space after
// 						paragraphAdd space after paragraph
// 					</Typography>
// 				</ListItemText>
// 				<LightTooltip
// 					followCursor
// 					placement="right"
// 					title={removeLabel ? intl.formatMessage(removeLabel) : ""}
// 				>
// 					<RemoveItemIcon
// 						sx={{ visibility: mouseEnter ? "visible" : "hidden" }}
// 						onClick={() => console.log("remove history")}
// 					>
// 						<CloseIcon fontSize="small" />
// 					</RemoveItemIcon>
// 				</LightTooltip>
// 			</SearchItem>
// 		</>
// 	);
// };

// HistoryList.propTypes = HistoryListPropTypes;

// const messages = defineMessages({
// 	removeLabel: {
// 		id: "ra.defaultSearch.remove.label",
// 		defaultMessage: "Remove from history",
// 	},
// });

// export default HistoryList;

import { styled } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const SearchItem = styled(MenuItem)(({ theme }) => ({
	borderLeft: "2px solid #fff",
	cursor: "default",
	"&:hover": {
		borderLeftColor: theme.palette.primary.light,
	},
}));

export default SearchItem;
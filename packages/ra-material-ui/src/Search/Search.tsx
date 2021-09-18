import React from "react";
import { useAutocomplete } from "@mui/core/AutocompleteUnstyled";
import PropTypes, { InferProps } from "prop-types";
import { defineMessages, useIntl } from "react-intl";
import {
  alpha,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  ListItemIcon,
  MenuItem,
  Paper,
  PaperProps,
  ListItemText,
  Typography,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Popper,
} from "@mui/material";
import {
  Search as SearchIcon,
  CancelRounded as CancelRoundedIcon,
  Tune as TuneIcon,
  History as HistoryIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { Theme } from "@mui/material";
import useSearch from "../SearchUnstyled/userSearch";
import setDefaults from "../utils/setDefaults";

interface StyledPaperProps extends PaperProps {
  focused?: boolean;
  theme?: Theme;
}

const SearchRoot = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "focused",
})<StyledPaperProps>(({ focused, theme }) => {
  return {
    borderRadius: theme.shape.borderRadius,
    padding: "2px 4px",
    alignItems: "center",
    backgroundColor: focused
      ? theme.palette.common.white
      : alpha(theme.palette.common.black, 0.1),
    ...(focused && { boxShadow: theme.shadows[2] }),
  };
});

const SearchEndAdornment = styled("div")({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  display: "contents",
});

const SearchItem = styled(MenuItem)(({ theme }) => ({
  borderLeft: "2px solid #fff",
  cursor: "default",
  "&:hover": {
    borderLeftColor: theme.palette.primary.light,
  },
}));

const RemoveItemIcon = styled(ListItemIcon)(() => ({
  cursor: "pointer",
}));

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))<StyledPaperProps>(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const SearchPopper = styled(Popper)<StyledPaperProps>(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  backgroundColor: "red",
  border: "1px solid blue",
}));

const SearchPropTypes = {
  placeholderLabel: PropTypes.object,
  clearLabel: PropTypes.object,
  searchLabel: PropTypes.object,
  showSearchOptions: PropTypes.object,
  removeLabel: PropTypes.object,
  open: PropTypes.bool,
  PopperComponent: PropTypes.elementType,
};

export type SearchTypes = InferProps<typeof SearchPropTypes>;

interface SearchTypesWithoutDefaultProps
  extends Omit<
    SearchTypes,
    | "placeholderLabel"
    | "clearLabel"
    | "searchLabel"
    | "showSearchOptions"
    | "removeLabel"
    | "PopperComponent"
  > {}

const Search = (props: SearchTypesWithoutDefaultProps) => {
  const {
    placeholderLabel = messages.placeholder,
    clearLabel = messages.clearLabel,
    searchLabel = messages.searchLabel,
    showSearchOptions = messages.showSearchOptions,
    removeLabel = messages.removeLabel,
    open,
    PopperComponent = Popper,
  } = { ...props };

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    dirty: hasClearIcon,
    getClearProps,
    popupOpen,
    anchorEl,
    setAnchorEl,
  } = useAutocomplete({
    id: "defaultSearch",
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  console.log("getRootProps()", getRootProps());

  const intl = useIntl();

  const renderClearIcon = (
    <IconButton
      {...getClearProps()}
      sx={{ p: 0 }}
      aria-label={clearLabel && intl.formatMessage(clearLabel)}
    >
      <CancelRoundedIcon />
    </IconButton>
  );
  const renderDriver = (
    <Divider
      sx={{
        height: 20,
        m: 0.5,
      }}
      orientation="vertical"
    />
  );

  const renderSearch = (
    <InputAdornment position="start">
      <IconButton
        aria-label={intl.formatMessage(searchLabel)}
        onClick={() => console.log("basic search")}
      >
        <SearchIcon onMouseDown={(e) => e.preventDefault()} />
      </IconButton>
    </InputAdornment>
  );
  const renderShowSearchOptions = (
    <IconButton
      onClick={() => console.log("ShowSearchOptions")}
      sx={{ p: "5px" }}
      aria-label={intl.formatMessage(showSearchOptions)}
    >
      <TuneIcon />
    </IconButton>
  );

  return (
    <React.Fragment>
      <SearchRoot
        {...getRootProps()}
        focused={focused}
        elevation={focused ? 1 : 0}
      >
        <InputBase
          fullWidth
          startAdornment={renderSearch}
          endAdornment={
            <SearchEndAdornment>
              {hasClearIcon && renderClearIcon}
              {hasClearIcon && renderDriver}
              {renderShowSearchOptions}
            </SearchEndAdornment>
          }
          ref={setAnchorEl}
          inputProps={{
            "aria-label": intl.formatMessage(placeholderLabel),
            placeholder: intl.formatMessage(placeholderLabel),
            ...getInputProps(),
          }}
        />
      </SearchRoot>
      {popupOpen && anchorEl ? (
        <SearchPopper as={PopperComponent} anchorEl={anchorEl} open>
          SearchPopperaaaaaaaaaa
        </SearchPopper>
      ) : null}
      {/*   {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <SearchItem {...getOptionProps({ option, index })}>
              <ListItemIcon>
                <HistoryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="inherit" noWrap>
                  {option.title}
                </Typography>
              </ListItemText>
              <LightTooltip
                followCursor
                placement="right"
                title={removeLabel ? intl.formatMessage(removeLabel) : ""}
              >
                <RemoveItemIcon>
                  <CloseIcon fontSize="small" />
                </RemoveItemIcon>
              </LightTooltip>
            </SearchItem>
          ))}
        </Listbox>
      ) : null}*/}
      {/*{groupedOptions.length > 0 ? (
        <ul {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </ul>
      ) : null}*/}
    </React.Fragment>
  );
};

Search.propTypes = SearchPropTypes;

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
  removeLabel: {
    id: "ra.defaultSearch.remove.label",
    defaultMessage: "Remove from history",
  },
});

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default Search;

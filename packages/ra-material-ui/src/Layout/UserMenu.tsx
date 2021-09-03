import { useState, Children, isValidElement, cloneElement } from "react";
import { IconButton, Menu } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import { defineMessage, useIntl, MessageDescriptor } from "react-intl";

const UserMenu = (props: UserMenuProps) => {
	const { icon = <AccountCircle />, label = message, children } = props;

	const intl = useIntl();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	if (!children) return null;

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>): void =>
		setAnchorEl(event.currentTarget);
	const open = Boolean(anchorEl);
	const handleClose = () => setAnchorEl(null);

	const DefaultIcon = (<IconButton
				aria-label={label && intl.formatMessage(label)}
				onClick={handleMenu}
				color="inherit"
			>
				{icon}
			</IconButton>);
	return (
		<>
			{DefaultIcon}
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				PaperProps={arrowPaperProps}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{Children.map(children, (menuItem) =>
					isValidElement(menuItem)
						? cloneElement(menuItem, {
								onClick: handleClose,
						  })
						: null
				)}
			</Menu>
		</>
	);
};

const message = defineMessage({
	id: "ra.userMenu",
	defaultMessage: "Profile",
});

UserMenu.propTypes = {
	icon: PropTypes.node,
	label: PropTypes.object,
	children: PropTypes.node,
	logout: PropTypes.element,
};

export interface UserMenuProps {
	icon?: React.ReactNode;
	label?: MessageDescriptor;
	children?: React.ReactNode;
	logout?: React.ReactNode;
}

const arrowPaperProps = {
	elevation: 0,
	sx: {
		overflow: "visible",
		filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
		mt: 1.5,
		"& .MuiAvatar-root": {
			width: 32,
			height: 32,
			ml: -0.5,
			mr: 1,
		},
		"&:before": {
			content: '""',
			display: "block",
			position: "absolute",
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			bgcolor: "background.paper",
			transform: "translateY(-50%) rotate(45deg)",
			zIndex: 0,
		},
	},
};

export default UserMenu;

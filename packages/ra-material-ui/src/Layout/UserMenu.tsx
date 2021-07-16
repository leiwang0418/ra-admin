import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";

/*
<Tooltip title={label && translate(label, { _: label })}>
    <IconButton
        aria-label={label && translate(label, { _: label })}
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup={true}
        color="inherit"
        onClick={handleMenu}
    >
        {icon}
    </IconButton>
</Tooltip>
*/

const DefaultUserMenu = (props: DefaultUserMenuProps) => {
	const { icon = <AccountCircle />, handleMenu } = props;

	return (
		<Tooltip title="title">
			<IconButton aria-label="" aria-owns="" color="inherit" onClick={handleMenu}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};

DefaultUserMenu.propTypes = {
	icon: PropTypes.node,
	handleMenu: PropTypes.func.isRequired,
};

interface DefaultUserMenuProps {
	icon?: React.ReactNode;
	handleMenu: () => void;
}

const UserMenu = () => {
	const handleMenu = () => console.log("test");
	return (
		<div>
			<DefaultUserMenu handleMenu={handleMenu} />
		</div>
	);
};

export default UserMenu;

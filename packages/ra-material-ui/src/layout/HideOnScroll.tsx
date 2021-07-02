import { Slide, useScrollTrigger } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";


const HideOnScroll = (props: HideOnScrollProps) => {
	const { children } = props;
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
};

HideOnScroll.propTypes = {
	children: PropTypes.node.isRequired,
};

export interface HideOnScrollProps {
	children: React.ReactElement;
}

export default HideOnScroll;

const video = {
  play() {
    return false;
  },
};

export {video};
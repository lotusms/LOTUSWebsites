/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, children, nofollow = false, ...props }) => {
  const rel = `noopener noreferrer${nofollow ? ' nofollow' : ''}`;

  return (
    <a href={href} target="_blank" rel={rel} {...props}>
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
  nofollow: PropTypes.bool,
};

export default ExternalLink;

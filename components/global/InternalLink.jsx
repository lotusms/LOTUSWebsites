import React from 'react'
import Link from "next/link";
import PropTypes from 'prop-types';

const InternalLink = ({ href, text }) => {
  return (
    <Link className="text-blue-600 hover:text-blue-800" href={href}>{text}</Link>
  )
}

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default InternalLink

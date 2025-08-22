import React from "react";
import PropTypes from "prop-types";

const EmailObfuscatedLink = ({
  user = "info",
  domain = "lotusmarketingsolutions.com",
  className = "",
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    // assemble from pieces (harder for simple scrapers)
    const u = user; // could also do atob("aW5mbw==")
    const d = domain; // or atob("bG90dXNtYXJrZXRpbmdzb2x1dGlvbnMuY29t")
    window.location.href = `mailto:${u}@${d}`;
  };

  return (
    <>
      <a
        href="#email"
        onClick={handleClick}
        rel="nofollow"
        className={className}
        aria-label="Send us an email"
      >
        {children}
      </a>
      <noscript>
        <a
          href="mailto:%69%6E%66%6F%40%6C%6F%74%75%73%6D%61%72%6B%65%74%69%6E%67%73%6F%6C%75%74%69%6F%6E%73%2E%63%6F%6D"
          rel="nofollow"
        >
          {children}
        </a>
      </noscript>
    </>
  );
};

EmailObfuscatedLink.propTypes = {
  user: PropTypes.string,
  domain: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default EmailObfuscatedLink;

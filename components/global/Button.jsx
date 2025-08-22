"use client"

import React from "react"
import Link from "next/link"
import clsx from "clsx"
import PropTypes from "prop-types"

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-sm transition duration-300 focus:outline-none"

const variants = {
  primary:
    "bg-lime-500 text-black/80 hover:bg-white hover:border-2 hover:border-lime-700 focus:border-2 focus:border-lime-700",
  secondary:
    "bg-white text-black/80 hover:bg-lime-500 hover:border-2 hover:border-white focus:border-2 focus:border-white",
}

export default function Button({
  as = "button", // "button", "link", or "a"
  href,
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = clsx(baseStyles, variants[variant], className)

  if (as === "link") {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(["button", "link", "a"]),
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

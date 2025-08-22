'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { useRouter } from "next/navigation";

const variantClasses = {
  light: 'bg-slate-50 text-slate-700 hover:bg-white transition duration-300',
  dark: 'bg-slate-950 text-slate-50 hover:bg-slate-600 transition duration-300',
  primary: 'bg-blue-600 text-slate-50 hover:bg-blue-700 transition duration-300',
  link: 'text-blue-500 hover:text-blue-600 p-0 text-sm text-left m-0 transition duration-300',
};

const LinkButton = ({
  text = "",
  href,
  isHeaderBtn = false,
  variant,
  onClick,
  className = "",
  link,
  fab,
  icon = null,
  target = '_self',
  isExternalLink,
  disabled = false 
}) => {
  const variantClass = variantClasses[variant] || variantClasses.primary;

  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {link 
        ? 
          (
            isExternalLink 
            ? (
                <a
                  href={href}
                  target={target}
                  rel="noopener noreferrer"
                  className={` ${variantClass ? "p-0" : "px-4 py-1.5"} transition ${variantClass} ${className}`}>
                  <span className='inline-flex items-center'>{icon}{text}</span>
                </a>
              ) 
            : 
              (
                <Link
                  href={href}
                  legacyBehavior
                  className={`flex-1 px-4 py-1.5 ${variantClass ? "px-4 py-1.5" : "p-0"} text-base font-SFMedium transition ${variantClass} ${className}`}>
                  <span className='inline-flex items-center'>{icon}{text}</span>
                </Link>
              )
          ) 
        : 
          (
            <button
              className={`${fab ? "p-1.5" : "px-4 py-1.5"} 
                text-base font-SFMedium hover:cursor-pointer transition 
                ${variantClass} ${className}
                ${disabled ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer"}`}
              disabled={disabled}
              type="button"
              onClick={
                disabled
                  ? undefined
                  : isHeaderBtn
                  ? onClick
                  : () => handleNavigate(href)
              } >
              {fab 
                ? (
                    <span className='flex items-center justify-center'>
                      {icon}
                      <span className='sr-only'>{text}</span>
                    </span>
                  )
                : (
                  <span className='inline-flex items-center'>
                    {icon}
                    {text}
                  </span>
                )
              }              
            </button>
          )
      }
    </>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark', 'primary', 'link']),
  className: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  target: PropTypes.string,
  isExternalLink: PropTypes.bool,
  fab: PropTypes.bool,
  isHeaderBtn: PropTypes.bool,
  disabled: PropTypes.bool
};

export default LinkButton;

'use client';

import React from 'react';
import PropTypes from 'prop-types';

const Fab = ({ onClick, transparent, reverse, children, forceLight }) => {
  return (
    <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
      <button
        onClick={onClick}
        type="button"
        className={`
          relative rounded-full p-1
          ${forceLight 
            ? 'bg-sky-600 text-slate-800 hover:bg-sky-500' 
            : transparent 
              ? 'bg-transparent dark:bg-transparent text-slate-950 dark:text-slate-50' 
              : reverse 
                ? 'bg-slate-50 hover:bg-sky-500 text-sky-900 dark:bg-sky-600 dark:hover:bg-sky-500 dark:text-slate-50' 
                : 'bg-sky-600 dark:bg-slate-50 hover:bg-sky-500 dark:hover:bg-sky-500 text-slate-50 dark:text-sky-600'
          }           
        `}
      >
        {children}
      </button>
    </div>
  );
};

Fab.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  forceLight: PropTypes.bool, // New prop
};

export default Fab;

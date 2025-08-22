'use client';

import React from 'react'

const Offices = () => {
  return (
    <div className='p-4'>
      <h2 className="font-display text-base font-semibold text-slate-50">
        Our offices
      </h2>
      <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <li>
          <address className="text-sm not-italic text-slate-300">
            <strong className="text-slate-300">Boston HQ</strong>
            <br />123 Main St
            <br />
            Boston, MA 02129
          </address>
        </li>
        <li>
          <address className="text-sm not-italic text-slate-300">
            <strong className="text-slate-300">Philadepelphia</strong>
            <br />
            324 Market St
            <br />
            Philadelphia, PA 19107
          </address>
        </li>
      </ul>
    </div>
  )
}
export default Offices

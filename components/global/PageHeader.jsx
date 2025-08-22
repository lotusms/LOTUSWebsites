'use client';

import React from 'react'
import PropTypes from 'prop-types'
import LinkButton from './LinkButton'
import Section from './Section'

const PageHeader = ({pagetitle, button}) => {
  return (
    <div>
      <Section className="relative z-20 mt-[90px]" variant="dark">
        {button && <LinkButton text="Back to Products" href="/our-products" link variant="light" />}
        <h1 className='text-5xl text-center sm:text-left pt-12'>
          {pagetitle}
        </h1>
      </Section>
    </div>
  )
}

PageHeader.propTypes = {
  pagetitle: PropTypes.string,
  button: PropTypes.bool,
}

export default PageHeader

import React from 'react'
import PropTypes from 'prop-types'
import FullWidthSection from './FullWidthSection'

const PageIntro = ({ children }) => {
  return (
    <FullWidthSection variant="lime" className='pb-24'>
      <div className="mx-auto max-w-7xl pt-12 px-8">
        {children}
      </div>
    </FullWidthSection> 
  )
}

PageIntro.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageIntro
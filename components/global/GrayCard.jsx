'use client';

import React from 'react'
import Card from '@/components/global/Card'
import LinkButton from '@/components/global/LinkButton'
import PropTypes from 'prop-types'

const GrayCard = ({title, subtitle, description, features, price, hasLinkButton = false, link, linktitle}) => {
  return (
    <Card className='text-slate-50 ' variant="custom" >
      <h4 className="text-3xl font-sfHeavy">{title}</h4>
      {subtitle && <h4 className="text-amber-700 text-xl font-playball font-bold tracking-wider mb-4">{subtitle}</h4>}
      {description && <p>{description}</p>}
      {features && features.length > 0 && (
        <ul className="list-disc list-inside my-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      {hasLinkButton && (
        <LinkButton 
          className=''
          href={link} 
          text={linktitle} 
          variant="link" 
          isExternalLink 
          target='_blank' />
      )}
      {price && <p className="text-lg font-SFBold mt-4">{price}</p>}
    </Card>
  )
}

GrayCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  hasLinkButton: PropTypes.bool,
  link: PropTypes.string,
  linktitle: PropTypes.string,
}

export default GrayCard

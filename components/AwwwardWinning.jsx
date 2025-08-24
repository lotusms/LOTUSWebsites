import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'


const AwardCard = ({ src, url, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={url} target="_blank" rel="noreferrer">
        <Image
          src={src}
          alt={title}
          className="w-full object-cover mb-4 rounded-lg border-2 border-lime-500 border-spacing-2 p-2"
          width={500}
          height={300}
        />
        <h3 className="text-2xl font-sfBlack tracking-tight text-center text-lime-500/80">{title}</h3>
      </Link>
    </div>
  )
}

AwardCard.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const AwwwardWinning = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12'>
      <AwardCard 
        src="https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/websites%2Fwestyork.webp?alt=media&token=fe330936-bf88-4965-a6ea-677efe393449" 
        url="https://www.wybpd.org/" 
        title="West York Borough Police Department"/>
      <AwardCard 
        src="https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/websites%2Fvolair-2.webp?alt=media&token=48df76a7-cb8c-4e8f-ab4e-5e522681bb00" 
        url="https://volairdronesolutions.com/" 
        title="Volair Drone Solutions"/>
    </div>
  )
}

export default AwwwardWinning

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
          className="w-full object-cover mb-4 rounded-lg border border-amber-500 border-spacing-2 p-2"
          width={500}
          height={300}
        />
        <h4 className="text-2xl font-playball tracking-wider text-center">{title}</h4>
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
        src="https://firebasestorage.googleapis.com/v0/b/cobalt-badge-187102.firebasestorage.app/o/westyork.webp?alt=media&token=80c71e64-874c-43e9-8b73-02ef1e486bf9" 
        url="https://www.wybpd.org/" 
        title="West York Borough Police Department"/>
      <AwardCard 
        src="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/clients/volair-jw3e2FhR3W1GcSqBCq8OXSsiWKhwsr.webp" 
        url="https://volairdronesolutions.com/" 
        title="Volair Drone Solutions"/>
    </div>
  )
}

export default AwwwardWinning

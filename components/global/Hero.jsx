'use client';

import PropTypes from 'prop-types'
import Text from './Text'
import Image from 'next/image';

const Hero = ({src, pageName, pagedescription}) => {
  return (
    <>
      <div className="relative isolate overflow-hidden h-[450px]">
        <Image 
          src={src} 
          alt={pageName} 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL={src}
          className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="flex items-center justify-center size-full">
          <div className="text-center">
            <Text className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
              {pageName}
            </Text>
            <Text className="text-base font-base text-slate-50 sm:text-xl">
              {pagedescription}
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  pagedescription: PropTypes.string,
}

export default Hero

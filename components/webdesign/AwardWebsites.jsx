import React from 'react'
import AwwwardWinning from '@/components/AwwwardWinning';
import Section from '../global/Section';
import Cta from '../global/Cta';

const AwardWebsites = () => {
  return (
    <Section className="pb-20" variant="slate">
      <div className="mx-auto w-full px-6 lg:px-8">
        <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-slate-200 text-left max-w-4xl">
          Award Nominees <br/>Web Design
        </h3>
        <AwwwardWinning />
        <Cta label="Interested in an Award-Winning Website?" readmore={false} />
      </div>
    </Section>
  )
}

export default AwardWebsites
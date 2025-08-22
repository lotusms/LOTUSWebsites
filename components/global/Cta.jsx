'use client';

import { PhoneIcon } from '@heroicons/react/24/solid';
import Section from './Section'
import Link from 'next/link'

const Cta = () => {
  return (
    <>
      <Section className="py-[70px]" variant="light">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-playball text-center mb-4">Reach out to us for a free consultation and quote</h3> 
            <Link 
              href="tel:(717) 945-8132" 
              passHref 
              className="mt-4 text-xl font-sfBlack border border-black bg-black hover:bg-slate-300 hover:text-slate-800 transition ease-in-out duration-1000 px-3 py-1 rounded-md flex items-center justify-center">
              <PhoneIcon className="size-5 me-2" />
              (717) 945-8132
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Cta

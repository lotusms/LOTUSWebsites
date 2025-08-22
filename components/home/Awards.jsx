import React from 'react'
import Section from '@/components/global/Section';
import Image from 'next/image';

const Awards = () => {
  return (
    <Section className="pt-20 pb-24" variant="gradientdark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12">
        <h1 className="text-3xl font-sfHeavy mb-8">            
          Award-Winning Web & Mobile App Development Agency
        </h1>
        <p className="text-lg">
          Looking for expert web design and app development services? We specialize in building custom, high-performance websites and mobile applications that drive business growth. As a top-rated web design and mobile app development agency, we combine creativity, user-focused design, and cutting-edge technology to deliver results.
        </p>

        <p className="text-lg mt-4 p-2 bg-slate-300 rounded-lg text-slate-800 font-sfSemiBold">
          We don’t use templates or WordPress. Every website and app we build is 100% custom—designed from the ground up to match your brand, business goals, and user experience expectations.
        </p>

        <p className="text-lg mt-4">
          Whether you need a new website, a custom mobile app, or a complete digital strategy, our team delivers powerful, scalable solutions. From responsive web design to SEO-friendly development, we help businesses stand out and convert more users online.
        </p>
      </div>
      <hr className="border-1 border-white/40 w-full mx-auto my-12" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
        <div>
          <Image 
            src="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/GRA-logo2.webp"
            alt="2025 Global Recognition Award"
            className="w-24 md:w-36 mx-auto mb-4"
            width={150}
            height={150}
            sizes="(max-width: 768px) 96px, 144px"
          />
          <p className="text-sm md:text-base text-center font-sfSemiBold">2025 Global Recognition Award</p>
        </div>
        <div>
          <Image
            src="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/Awwards-Volair.webp"
            alt="2024 Awwwards Nomination"
            className="w-24 md:w-36 mx-auto mb-4"
            width={150}
            height={150}
            sizes="(max-width: 768px) 96px, 144px"
          />
          <p className="text-sm md:text-base text-center font-sfSemiBold">Best Design Nomination</p>
        </div>
        <div>
          <Image
            src="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/Awwards-WYBPD.webp"
            alt="2024 Awwwards Nomination"
            className="w-24 md:w-36 mx-auto mb-4"
            width={150}
            height={150}
            sizes="(max-width: 768px) 96px, 144px"
          />
          <p className="text-sm md:text-base text-center font-sfSemiBold">Best Design Nomination</p>
        </div>
        <div>
          <Image
            src="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/certs/TopTenWebDev.webp"
            alt="Top 10 Agency Award"
            className="w-24 md:w-36 mx-auto mb-4"
            width={150}
            height={150}
            sizes="(max-width: 768px) 96px, 144px"
          />
          <p className="text-sm md:text-base text-center font-sfSemiBold">Top 10 Agency Award</p>
        </div>
      </div>
    </Section> 
  )
}

export default Awards

'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from "@/components/global/PageHead";
import Section from "@/components/global/Section"
import FullWidthSection from '@/components/global/FullWidthSection';
import Button from "@/components/global/Button";
import Cta from '@/components/global/Cta';

const About = () => {
  const meta = pageMetadata["/about"];
  
  return (
    <>
      <PageHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
        ogimage={meta.ogimage}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LOTUS Marketing Solutions",
              "image": bannerImages.defaultImage,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Harrisburg",
                "addressRegion": "PA",
                "postalCode": "17101",
                "addressCountry": "US"
              },
              "url": "https://your-domain.com/about",
              "telephone": "+1-xxx-xxx-xxxx",
              "description": "Web design and digital marketing agency in Harrisburg, PA offering SEO, branding, mobile app development, and web solutions for businesses nationwide.",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourhandle",
                "https://www.linkedin.com/company/yourcompany"
              ]
            }),
          }}
        />
      </Head>
      
      <FullWidthSection variant="slate" className="mt-[90px]">
        <div className="mx-auto max-w-7xl p-12 pb-24">
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-4xl sm:text-7xl lg:text-8xl text-center font-sfBlack mb-8 text-slate-200">About Us</h1> 
          </div>
          <p>LOTUS Websites is just a dedicated web platform for LOTUS Marketing Solutions and its web design and app development services. LOTUS Marketing Solutions is a full-service digital marketing agency based in Harrisburg, PA. We specialize in web design, SEO, branding, mobile app development, and comprehensive digital marketing solutions for businesses nationwide. Our mission is to help businesses grow their online presence and achieve their marketing goals through innovative strategies and cutting-edge technology.
          <br /><br />
          Founded in 2016, LOTUS Marketing Solutions has quickly established itself as a trusted partner for businesses looking to enhance their digital footprint. Our team of experienced professionals is passionate about delivering exceptional results and providing personalized service to each of our clients. We believe in building long-term relationships based on trust, transparency, and mutual success.
          <br /><br />
          At LOTUS Marketing Solutions, we understand that every business is unique, and we take the time to understand our clients' needs and goals. Whether you're a small startup or a large corporation, we have the expertise and resources to help you succeed in today's competitive digital landscape.
          <br /><br />
          Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your marketing goals. We look forward to working with you!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <Button as="a" href="https://www.lotusmarketingsolutions.com/" target="_blank">
              Learn More About LOTUS Marketing Solutions
            </Button>
          </div>
        </div>
      </FullWidthSection>

      <Section variant="light" className="rounded-3xl pb-20 -mt-16 ring-2 ring-lime-500 ring-offset-4 ring-offset-slate-800 z-30 mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl pt-12">
          <div className="flex flex-col items-center">
            <h2 className="uppercase text-4xl sm:text-7xl lg:text-8xl text-center font-sfBlack mb-8 text-lime-600">The Symbolism <br/>Of The Lotus</h2> 
          </div>
          <p>
            The lotus flower is a symbol of victory above adversity. It defies all of the natural floral laws. Its head is too large for its stem and its stem is too long relative to its width. It grows out of the mud in the depths of murky waters, doesn't receive sufficient sunlight, and yet, it blooms. It fights all the obstacles and adversities and makes its way through four feet of water or more to surface. This is the vibe and principle we want to bring to our clients.
            <br /><br />
            We believe that everyone has a lotus within them and given the right environment, it will bloom. We want to help our clients bloom and reach their full potential by providing them with affordable solutions that will help them grow their business. 
            <br /><br />
            I know that everyone makes similar claims, but we are different. Over the years, we have spent countless hours refining our processes and services to ensure that they are affordable yet effective and profitable for us as well as our clients. And one of the main steps we have taken is to focus on providing our clients with an a-la-cart system that allows them to select only the services they need and not entire enterprise systems that they will never use. Which brings us back to the LOTUS name. If you ever wondered why it is uppercased, it's because it's not a word, but an acronym that stands for "Leaving Out The Unnecessary Stuff".
          </p>
          <h3 className="text-xl sm:text-2xl text-center font-sfBlack mt-8 text-slate-800">
            "The Lotus flower blooms most beautifully from the deepest and thickest mud."
          </h3>
        </div>
      </Section>
            
      <FullWidthSection variant="slate" className="-mt-16 ">
        <div className="mx-auto max-w-7xl pt-24 pb-12 px-8">      
          <Cta label='So?...Are You Ready to Start Your Project?' readmore={false}  />
        </div>
      </FullWidthSection> 
    </>
  )
}

export default About
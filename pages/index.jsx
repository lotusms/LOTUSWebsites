'use client';

import React from 'react';
import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from '@/components/global/PageHead';
import WebBuilders from '@/components/home/WebBuilders';
import VideoHero from '@/components/home/VideoHero';
import Awards from '@/components/home/Awards';
import Websites from '@/components/home/Websites';
import Local from '@/components/home/Local';

export default function Home() {
  const meta = pageMetadata["/"];
  
  return (
    <>      
      <PageHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        ogimage={meta.ogimage}
        canonical="/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Web Design & App Development in Harrisburg, PA",
              "url": "https://www.lotuswebsites.com",
              "logo": bannerImages.logoImage,
              "description": "LOTUS Marketing Solutions provides award-winning web design, app development, branding, and digital marketing services across Harrisburg and Central PA.",
              "image": bannerImages.defaultImage,
            }),
          }}
        />
      </Head>

      <VideoHero />
      <Awards />
      <Websites />      
      <Local />
      <WebBuilders />

      {/* <Section className="pt-10 pb-20" variant="light">
        <div className="mx-auto w-full px-6 lg:px-8">
          <h3 className="font-sfHeavy text-wrap:balance] text-4xl sm:text-5xl mt-16 mb-12 flex justify-center">
            Some of Our Clients
          </h3>
          <ImageSlider 
            slides={clients} 
            bgOffsetColor="dark"
            getImageSrc={(slide) => slide.src} 
            imageWidth="w-[94%]"
            link={(slide) => slide.url}
            arrows={false} />

          <p className="text-pretty text-center mx-auto max-w-5xl mt-8">
            We have had the pleasure of working with a variety of clients across different industries. Our team is dedicated to providing exceptional service and delivering results that exceed expectations. We take pride in our ability to build strong relationships with our clients and help them achieve their goals. We look forward to working with you and helping you grow your business.
          </p>
          <h4 className="text-4xl font-sfHeavy sm:text-5xl mt-16 mb-12 flex justify-center">
            Join The Family!
          </h4>
        </div>
      </Section> */}
    </>
  );
}

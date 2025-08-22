'use client';

import React from 'react';
import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from '@/components/global/PageHead';
import VideoHero from '@/components/home/VideoHero';
import Awards from '@/components/home/Awards';
import Websites from '@/components/home/Websites';
import MobileApps from '@/components/home/MobileApps';

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
      <MobileApps />
      {/* <WebBuilders /> */}
    </>
  );
}

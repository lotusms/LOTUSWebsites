// NotFound.jsx
import React from 'react';
import Head from 'next/head';
import PageHead from '@/components/global/PageHead';
import { pageMetadata, bannerImages } from "@/data/metadata";

const NotFound = () => {
  const meta = pageMetadata["/not-found"];
  return (
    <>
      <PageHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        ogimage={meta.ogimage}
        canonical={meta.canonical}
      />
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "404 Not Found",
              "description": "The page you are looking for does not exist.",
              "url": `${meta.canonical}`,
              "image": bannerImages.logoImage,
              "mainEntity": {
                "@type": "WebPage",
                "@id": `${meta.canonical}`
              }
            }),
          }}
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-7xl text-center">Oops! Nothing Here</p>
        <a href="/" className="text-sky-500 mt-4">Go back to Home</a>
      </div>
    </>
  );
};

export default NotFound;

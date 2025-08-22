'use client';

import PropTypes from "prop-types";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { globalMetadata, bannerImages } from "@/data/metadata";

const DOMAIN = "https://www.lotuswebsites.com"; 

const PageHead = ({ title, description, keywords, ogimage, canonical }) => {
  const pathname = usePathname();
  const fullUrl =
    canonical && canonical.startsWith("http")
      ? canonical
      : `${DOMAIN}${canonical || pathname}`;

  const ogImage = bannerImages.defaultImage;

  const disallowedPaths = [
    "/not-found",
  ];
  const showCanonical = !disallowedPaths.includes(pathname);

  return (
    <>
      <Head>
        <title>{title || globalMetadata.title}</title>
        <meta name="description" content={description || globalMetadata.description} />
        <meta name="keywords" content={keywords || globalMetadata.keywords} />
        {showCanonical && <link rel="canonical" href={fullUrl} />}

        <meta property="fb:app_id" content="1644400616185207" />

        {/* ✅ Open Graph (Facebook) Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogimage || ogImage} />
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
    </>
  );
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogimage: PropTypes.string.isRequired,
  canonical: PropTypes.string,
};

export default PageHead;

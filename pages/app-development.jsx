'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import ImageHeader from '@/components/global/ImageHeader'
import PageHead from '@/components/global/PageHead';
import PageIntro from '@/components/global/PageIntro';
import Cost from '@/components/app-development/Cost';
import Why from '@/components/app-development/Why';
import Apps from '@/components/app-development/Apps';
import Cta from '@/components/global/Cta';
import FullWidthSection from '@/components/global/FullWidthSection';

const banner = bannerImages.appDevelopmentImage;

const AppDevelopment = () => {
  const meta = pageMetadata["/app-development"];

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
              "@type": "Service",
              "serviceType": "Mobile App Development",
              "name": "App Development Services | LOTUS Marketing Solutions",
              "description": "Seamless app development services for iOS and Android. Build high-performance, cross-platform, native, or hybrid apps with LOTUS Marketing Solutions.",
              "provider": {
                "@type": "Organization",
                "name": "LOTUS Marketing Solutions",
                "url": "https://www.lotuswebsites.com",
                "logo": bannerImages.logoImage,
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-717-945-8132",
                  "contactType": "Customer Support",
                  "areaServed": "US"
                },
                "sameAs": [
                  "https://www.facebook.com/lotusmarketingsolutionsLLC",
                  "https://www.instagram.com/lotusmarsol/",
                  "https://www.youtube.com/@codingNerd",
                  "https://x.com/LotusMarketingS"
                ]
              },
              "areaServed": {
                "@type": "Place",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile App Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Progressive Web App Development",
                      "description": "Custom PWA with offline functionality, mobile responsiveness, and push notifications."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 7800
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cross Platform App Development",
                      "description": "Cost-effective app using a single codebase for iOS and Android."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 12400
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hybrid Mobile App Development",
                      "description": "Web and mobile functionality combined in a single hybrid application."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 27500
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Native Mobile App Development",
                      "description": "High-performance app for iOS and Android with advanced features.",
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "Contact for quote"
                    }
                  }
                ]
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.lotuswebsites.com/app-development"
              },
              "image": bannerImages.appDevelopmentImage,
            }),
          }}
        />
      </Head>

      <ImageHeader 
        backgroundImage={banner}
        overlay
        wordone='Mobile App'
        wordtwo='Development'
        subtitle='Seamless app development for the App Store and Play Store that you can rely on. Put your business in the hands of your consumers.'
        className='mt-20' />
      <PageIntro>
        <p>
          Having your app available on both the Apple App Store and Google Play Store is essential for successful mobile app development. With millions of active users on iOS and Android, publishing on both platforms significantly expands your reach and ensures your business connects with customers wherever they are. This dual-platform approach also strengthens your brand’s visibility, credibility, and competitive edge.<br /><br />

          A well-developed mobile app offers a highly personalized and engaging user experience. Through features like push notifications, in-app messaging, and real-time updates, you can stay connected with your audience, boost user engagement, and build long-term customer loyalty. These interactive tools are key to driving repeat business and enhancing customer satisfaction.<br /><br />

          App stores also provide robust analytics and user feedback tools that are vital in the mobile app development lifecycle. These insights help you understand user behavior, optimize performance, and continuously improve your app based on real-world data. Investing in mobile app development with a strong app store presence is a smart, scalable way to grow and future-proof your business.
        </p>
      </PageIntro>
      
      <Cost />
      <Why />
      <Apps />
      
      <FullWidthSection variant="slate">
        <div className="mx-auto max-w-7xl py-12 px-8">      
          <Cta label='So?...Ready to Start Your Project?'  readmore={false} />
        </div>
      </FullWidthSection>
    </>
  )
}

export default AppDevelopment

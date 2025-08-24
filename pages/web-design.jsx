'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import ImageHeader from '@/components/global/ImageHeader'
import Cta from '@/components/global/Cta'
import PageHead from '@/components/global/PageHead';
import PageIntro from '@/components/global/PageIntro';
import Cost from '@/components/webdesign/Cost';
import AwardWebsites from '@/components/webdesign/AwardWebsites';
import WebBuilders from '@/components/webdesign/WebBuilders';
import FinancedSolutions from '@/components/webdesign/FinancedSolutions';

const banner = bannerImages.webDesignImage;

const factors = [
  {
    title: "Website Functionality",
    description: "The more complex your website's functionality needs are, the more time and resources it will take to build. This includes features like e-commerce capabilities, Artificial Intelligence integration, custom integrations, and advanced user interactions."
  },
  {
    title: "Project Timeline",
    description: "If you need your website completed quickly, it may require additional resources and overtime work, which can increase the overall cost. But in general, a website takes 3-6 months to complete, depending on its complexity and how quickly you can provide feedback and materials."
  },
  {
    title: "Digital Marketing",
    description: "Depending on your digital marketing needs, additional features such as SEO optimization, content creation, and social media integration may be required, which can impact the overall cost. On-Page SEO is automatically included in all of our websites."
  }
]

const WebDesign = () => {
  const meta = pageMetadata["/web-design"];
  
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Custom Web Design",
              "provider": {
                "@type": "Organization",
                "name": "LOTUS Marketing Solutions",
                "url": "https://www.lotuswebsites.com",
                "logo": bannerImages.logoImage,
                "areaServed": {
                  "@type": "Place",
                  "name": "Harrisburg, PA"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-717-945-8132",
                  "contactType": "Customer Support"
                },
                "sameAs": [
                  "https://www.facebook.com/lotusmarketingsolutionsLLC",
                  "https://www.youtube.com/@codingNerd",
                  "https://www.instagram.com/lotusmarsol/",
                  "https://x.com/LotusMarketingS"
                ]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Starter Package",
                    "description": "Custom-designed website (up to 5 pages), mobile responsive, basic SEO, and contact form.",
                    "price": "2500.00",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "name": "Marketing Package",
                    "description": "Custom website (up to 20 pages), advanced SEO, lead gen tools, and blog setup.",
                    "price": "3200.00",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "name": "Sales Package",
                    "description": "Unlimited pages, premium SEO, CRM integrations, e-commerce features.",
                    "price": "5700.00",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "name": "Enterprise Package",
                    "description": "Bespoke app, custom integrations, enterprise-level security, strategic consulting.",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "0",
                      "priceCurrency": "USD",
                    },
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              "url": "https://www.lotuswebsites.com/web-design",
              "description": "Get custom web design solutions that reflect your brand identity. Avoid cookie-cutter templates and build a website that drives results.",
              "areaServed": {
                "@type": "Place",
                "name": "Harrisburg, PA"
              },
              "image": bannerImages.webDesignImage,
            }),
          }}
        />
      </Head>
      
      <ImageHeader 
        backgroundImage={banner}
        overlay
        wordone='Custom'
        wordtwo='Web Design'
        subtitle='Avoid falling into cookie-cutter designs. Express your company vibe through your own design and bring emphasis to where it matters most.'
        className='mt-[110px]' />
      <PageIntro>
        <p>
          Your website is the face of your business in the online world, and it's essential that it leaves a lasting impression on your potential customers. At our web design service, we specialize in creating custom websites that not only look great but also function seamlessly and effectively.<br /><br />

          We understand that every business has unique needs and goals, which is why we take a personalized approach to web design. Our team of experienced designers and developers work collaboratively to create a website that is tailored to meet the specific needs of your business. From the initial consultation to the final launch, we'll be with you every step of the way to ensure that your website is visually stunning, user-friendly, and optimized for search engines.<br /><br />

          We're committed to delivering exceptional results and providing our clients with a website that not only looks great but also delivers measurable results. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and expertise to bring your vision to life. Let us help you build a website that will make a lasting impression on your audience and help your business grow in the digital age.
        </p> 
      </PageIntro>

      <Cost data={factors} />

      <AwardWebsites />

      <WebBuilders />

      <FinancedSolutions />

      <Cta />
    </>
  )
}

export default WebDesign

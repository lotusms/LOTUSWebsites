'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import ImageHeader from '@/components/global/ImageHeader'
import Section from '@/components/global/Section'
import Cta from '@/components/global/Cta'
import Alert from '@/components/global/Alert'
import PageHead from '@/components/global/PageHead';
import Link from 'next/link';
import AwwwardWinning from '@/components/AwwwardWinning';
import GrayCard from '@/components/global/GrayCard';
const banner = bannerImages.webRedesignImage

const cards = [
  {
    title: "Outdated Design",
    description: "First impressions matter. If your website looks old, cluttered, or unprofessional, it can hurt your credibility and drive visitors away. A common sign of an outdated design is the use of generic templates or themes that don’t reflect your brand or industry, overuse of animations, non-cohesive color schemes, non-responsive to mobile.",
    linktitle: "Read More About Outdated Design",
    link:"https://www.wearestudio77.com/blog/outdated-website-design-practices-to-leave-behind"
  },
  {
    title: "Poor User Experience",
    description: "Slow load times, difficult navigation, or a lack of mobile-friendliness frustrate users and increase bounce rates. A redesign ensures a seamless, user-friendly experience. A common sign of poor user experience is a high bounce rate, low time on page, and low conversion rates. Difficulty navigating the site and finding your way back.",
    linktitle: "Read More About User Experience",
    link:"https://www.interaction-design.org/literature/topics/ux-design?srsltid=AfmBOoo5kV0k7X-GnVZEXzSqvjMHp5ETCXL1Bjbao80zwgAMAAAUKBO3"
  },
  {
    title: "Low SEO & Traffic",
    description: "An outdated site struggles to rank on search engines, leading to declining traffic and missed opportunities. A redesign improves SEO and boosts visibility. A common sign of low SEO is a lack of organic traffic, low keyword rankings, and poor search engine visibility. It may take some time to see results, but in the end, a redesign will increase your organic presence.",
    linktitle: "Read More About SEO",
    link:"https://www.searchenginejournal.com/seo-guide/"
  },
]

const packages = [
  {
    title: 'Starter',
    subtitle: 'For Small Businesses & Startups',
    description: 'Ideal for small businesses looking to establish a professional online presence. This package includes a custom-designed, high-performance website with up to 5 pages, mobile responsiveness, and basic on-page SEO to improve search visibility.',
    features: [
      'Custom-designed website (up to 5 pages)',
      'Mobile & tablet responsive',
      'Basic on-page SEO optimization',
      'Google Analytics setup',
      'Contact form integration'
    ],
    price: 'Staring at $1,900'
  },
  {
    title: 'Marketing',
    subtitle: 'For Growing Businesses & Lead Generation',
    description: 'Designed for businesses looking to expand their online reach and convert visitors into customers. This package includes a custom website with up to 20 pages, advanced on-page SEO, and conversion-focused design elements.',
    features: [
      'Custom website design (up to 20 pages)',
      'Mobile-first design & optimization',
      'Advanced on-page SEO (keyword optimization, meta tags, site speed)',
      'Google My Business setup/optimization',
      'Lead generation forms',
      'Basic blog setup'
    ],
    price: 'Staring at $2,700'
  },
  {
    title: 'Sales',
    subtitle: 'For Established Businesses & E-commerce',
    description: 'Perfect for businesses that want a powerful website optimized for sales and conversions. Includes a custom-designed website with unlimited pages, premium on-page SEO, and integrated lead capture tools.',
    features: [
      'Custom-designed website (unlimited pages)',
      'Premium on-page SEO (schema markup, advanced keyword research)',
      'CRM & email marketing integrations',
      'E-commerce functionality (if needed)',
      'Basic blog setup',
      'Conversion-focused design & sales funnel integration'
    ],
    price: 'Staring at $5,200'
  },
  {
    title: 'Enterprise',
    subtitle: 'For Large Businesses with Custom Needs',
    description: 'A fully customized website and digital strategy tailored to your specific business needs. We provide bespoke design solutions, advanced integrations, and ongoing strategic support to help you achieve your business goals.',
    features: [
      'Bespoke web app design & development',
      'Custom API & third-party integrations',
      'Enterprise-level security & performance optimization',
      'Ongoing strategic support & digital growth consulting',
      'Intended for software-like functionality',
    ],
    price: 'Contact Us for a Quote'
  }
]

const WebDesign = () => {
  const meta = pageMetadata["/web-redesign"];

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
              "serviceType": "Custom Web Redesign",
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
                "name": "Web Redesign Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Starter Package",
                    "description": "Custom website redesign (up to 5 pages), mobile responsive, basic SEO, contact form.",
                    "price": "1900.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Marketing Package",
                    "description": "Custom redesign (up to 20 pages), advanced SEO, lead gen forms, blog setup.",
                    "price": "2700.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Sales Package",
                    "description": "Unlimited pages, premium SEO, CRM integrations, e-commerce ready.",
                    "price": "5200.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Enterprise Package",
                    "description": "Custom app redesigns, API integrations, strategic consulting, advanced security.",
                    "availability": "https://schema.org/PreOrder"
                  }
                ]
              },
              "url": "https://www.lotuswebsites.com/web-redesign",
              "description": "Avoid cookie-cutter redesigns. Get a high-performing, mobile-friendly, and SEO-optimized site to boost engagement and conversions.",
              "areaServed": {
                "@type": "Place",
                "name": "Harrisburg, PA"
              },
              "image": bannerImages.webRedesignImage,
            }),
          }}
        />
      </Head>

      <ImageHeader 
        backgroundImage={banner}
        overlay
        wordone='Custom'
        wordtwo='Web Redesign'
        subtitle='Ditch the generic and stale look. If you already have a website that is outdated and under-performing, we can help and save you money.'
        className='mt-20' />
      <Section variant="dark" className='pb-24'>
        <div className="mx-auto max-w-7xl py-12">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-4">Our Web Redesign Services</h2>
          <p> 
            Your website is more than just an online presence—it’s a powerful business tool. But if it’s outdated, slow, or not converting, it signals neglect, frustrates users, and costs you money in lost opportunities. A custom web redesign can turn that around, improving performance, engagement, and SEO—all while cutting inefficiencies.
            <br /><br />

            We specialize in tailored website redesigns that enhance user experience, boost search rankings, and optimize for conversions—without breaking the bank. Rather than settling for a generic template, we craft designs that reflect your brand, reduce friction, and ensure mobile responsiveness.
            <br /><br />

            Our data-driven approach modernizes your site with performance and ROI in mind, whether it’s a portfolio, landing page, or e-commerce store. An outdated website repels visitors—let’s create one that attracts and converts them.
          </p>
        </div>
      </Section> 
      <Section variant="light" className='rounded-t-3xl -mt-12'>  
        <div className="mx-auto max-w-7xl py-12">
          <p className="text-pretty text-center mb-4">
            The process is very simple to a custom website made from the ground up. The main difference is the cost. Because we are using your existing content, we can save you money. Also keep in mind that the more you add to the project, it can drive the cost up. But we will do our best to keep it as low as possible.
          </p>
          <p className="text-xl text-pretty font-sfHeavy text-center">
            To make it simple, we have grouped our services into four packages that are sure to fit your online strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">            
            {packages.slice(0,4).map((item, index) => (
              <div key={index} className="mx-auto max-w-7xl">
                <GrayCard
                  title={`${item.title} Package`}
                  subtitle={item.subtitle}
                  description={item.description}
                  features={item.features}
                  price={item.price}
                />
              </div>
            ))}            
          </div>
        </div>
      </Section>

      <Section className="rounded-3xl pb-20 -mt-8 ring-1 ring-amber-500 ring-offset-4 text-sky-50 z-30" variant="light">
        <div className="mx-auto w-full px-6 lg:px-8">
          <h4 className="font-sfHeavy text-wrap:balance] text-4xl sm:text-5xl mt-16 mb-12 flex justify-center">
            Some of Our Clients
          </h4>
          <AwwwardWinning />
        </div>
      </Section>

      <Section variant="light">  
        <div className="mx-auto max-w-7xl py-12">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl mb-4">Outdated Websites Impact Your Business</h3> 
          </div>
          <p>
            An outdated website can have a negative impact on your business in several ways. It can hurt your credibility, reduce your search engine rankings, and drive potential customers away. Here are some common signs that your website needs a redesign:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">            
            {cards.map((item, index) => (
              <div key={index} className="mx-auto max-w-7xl">
                <GrayCard
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  features={item.features}
                  price={item.price}
                  hasLinkButton={true}
                  link={item.link}
                  linktitle={item.linktitle}
                />
              </div>
            ))}
          </div>
          <p className="text-center">
            Read <Link href="/blog/tips-for-creating-a-stunning-online-presence" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noreferrer">this article </Link>to learn more about the benefits of having a modern website.
          </p>
        </div>
      </Section>

      <Section variant="dark">
        <div className="mx-auto max-w-7xl py-12">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl mb-4">What Do I Do Then? I Can't Afford A Lot</h3> 
            <p>
              We have crafted an in-house financing program to help you afford an amazing website build with all the functionality and design intricacies you could need. We will work with you to create a payment plan that fits your budget and allows you to get the website you need to grow your business. Here is how it works.
            </p>
            <ul className="list-disc list-inside my-4">
              <li>A minimum of a $2500 budget total project cost - This nullifies the $1900 starter point for the Starter package.</li>
              <li>A 25% down payment</li>
              <li>Monthly payments for the to 11 months.</li>
              <li>0% interest</li>
              <li>Anything you add that wasn't agreed upon beforehand, you pay as you go</li>
              <li>You will have access to the site the entire time, not when it's paid off</li>
              <li>If the credit card on file fails or declines, and we do not receive a replacement within 10 days, your website will be put under maintenance and inaccessible to users, owners, or browsers.</li>
              <li>If no payment is captured on 2 consecutive months, the project is considered abandoned. Please reach out to us so that we may find a way to help.</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <p className='text-amber-500 text-left mb-2'>Let's look at an example</p>
            <table className="min-w-full divide-y divide-slate-900">
              <tbody className="divide-y divide-slate-900 bg-blue-600">
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Total Estimated Amount</strong></td>
                  <td className="px-3 py-4 text-sm text-slate-50">This could be higher if an e-commerce system is requested</td>
                  <td className="px-3 py-4 text-sm text-slate-50">$2500</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>25% Down Payment</strong></td>
                  <td className="px-3 py-4 text-sm text-slate-50">This hires us and initiates the work order</td>
                  <td className="px-3 py-4 text-sm text-slate-50">$625*</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Remainder</strong></td>
                  <td className="px-3 py-4 text-sm text-slate-50">The amount left to pay after the down payment has been paid</td>
                  <td className="px-3 py-4 text-sm text-slate-50">$1875</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Monthly Obligation (11 months)</strong></td>
                  <td className="px-3 py-4 text-sm text-slate-50">You may choose to pay off at any time. This does not include a maintenance package.</td>
                  <td className="px-3 py-4 text-sm text-slate-50">$170.45*</td>
                </tr>
              </tbody>
            </table>            
          </div>
          <div className="mt-8">
            <Alert content="* Payment processing fees of 3% + $1.30 applies to all credit card processing payments"/>  
          </div> 
        </div>
      </Section>

      <Cta />
    </>
  )
}

export default WebDesign

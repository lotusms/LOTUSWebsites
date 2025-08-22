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
const banner = bannerImages.webDesignImage;

const cards = [
  {
    title: "Cookie Cutter Designs",
    description: "Cookie-cutter websites lack uniqueness, personalization, and differentiation, which can negatively impact your brand's credibility and online presence. Because you probably searched for a template related to your industry, chances are that others have as well. Then clients visiting your site will find similar websites between competitors.",
    linktitle: "Read More About Cookie Cutter Designs",
    link:"https://www.getfoundquick.com/what-is-a-cookie-cutter-website/"
  },
  {
    title: "Bloated Code Stack",
    description: "Since you are expected not to have coding knowledge, and also these websites are not customized for your business functions, they will cram as much functionality as they can to make it useful for as many people as they can. The more code your website contains, the more your server has to process and the longer it takes for it to display in the browser. ",
    linktitle: "Read More About Code Bloat",
    link:"https://cariadmarketing.com/what-is-code-bloat-and-how-to-avoid-it/"
  },
  {
    title: "Dunning-Kruger Effect",
    description: "Many of these page builders offer you the option to lay out your website as you wish, choose the colors you want, and where you put a piece of content. However, there is an entire science behind User Experience and marketing. While you are an expert in your field, and you know your product better than anyone, you still don't possess the skills to deliver it in the most effective way through web content and design. Putting stuff where you think makes sense might actually be the wrong place for it.",
    linktitle: "Read More About User Experience",
    link:"https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users"
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
    price: 'Staring at $2,500'
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
    price: 'Staring at $3,200'
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
    price: 'Staring at $5,700'
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
        className='mt-20' />
      <Section variant="dark" className='pb-24'>
        <div className="mx-auto max-w-7xl py-12">
          <p>
            Your website is the face of your business in the online world, and it's essential that it leaves a lasting impression on your potential customers. At our web design service, we specialize in creating custom websites that not only look great but also function seamlessly and effectively.<br /><br />

            We understand that every business has unique needs and goals, which is why we take a personalized approach to web design. Our team of experienced designers and developers work collaboratively to create a website that is tailored to meet the specific needs of your business. From the initial consultation to the final launch, we'll be with you every step of the way to ensure that your website is visually stunning, user-friendly, and optimized for search engines.<br /><br />

            We're committed to delivering exceptional results and providing our clients with a website that not only looks great but also delivers measurable results. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and expertise to bring your vision to life. Let us help you build a website that will make a lasting impression on your audience and help your business grow in the digital age.
          </p> 
        </div>
      </Section> 

      <Section variant="light" className='rounded-t-3xl -mt-12'>  
        <div className="mx-auto max-w-7xl py-12">
          <h2 className="text-4xl mb-4 text-pretty font-sfHeavy text-center">
            Our Web Design Packages
          </h2>
          <p className="text-xl text-pretty font-sfMediumHeavy text-center">
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
          <h3 className="font-sfHeavy text-wrap:balance] text-4xl sm:text-5xl mt-16 mb-12 flex justify-center">
            Award Nominees Web Design
          </h3>
          <AwwwardWinning />
        </div>
      </Section>

      <Section variant="light">  
        <div className="mx-auto max-w-7xl py-12">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl mb-4">What About Web Builders?</h3> 
          </div>
          <p>
            A web builder is an online application where anyone without web development or design knowledge can make their own website for a monthly subscription that is often inexpensive or free. Some of these are Squarespace, Wix, and Shopify.<br /><br />

            While web builders may seem like a convenient and inexpensive option for building websites, they often lack the customization and functionality required for a professional and effective online presence. Custom web design and development allows for greater flexibility, scalability, and search engine optimization, ultimately resulting in a more successful website.
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
            Read <Link href="/blog/diy-website-builders-vs-custom-made-websites-which-one-is-right-for-you" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noreferrer">this article </Link>to learn more about the pros and cons of web builders.
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
              <li>A minimum of a $2500 budget total project cost</li>
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

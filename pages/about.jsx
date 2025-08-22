'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from "@/components/global/PageHead";
import Section from "@/components/global/Section"
import LinkButton from "@/components/global/LinkButton";
import Phase0Icon from "@/components/icons/Phase0Icon";
import Phase1Icon from "@/components/icons/Phase1Icon";
import Phase2Icon from "@/components/icons/Phase2Icon";
import Phase3Icon from "@/components/icons/Phase3Icon";
import Phase4Icon from "@/components/icons/Phase4Icon";
import Phase5Icon from "@/components/icons/Phase5Icon";
import Phase6Icon from "@/components/icons/Phase6Icon";
import Phase7Icon from "@/components/icons/Phase7Icon";

const steps = [
  {
    "side":true,
    "name":"Initial Consultation",
    "desc": "It all starts with a call and analysis of business requirements. We will discuss and estimate size, complexity, and cost; either in person or via email, phone, or online meeting.",
    "icon": <Phase0Icon />
  },
  {
    "side":false,
    "name":"Mock Designs",
    "desc": "Once we have agreed, we will collect an initial retainer payment (50% of total work or 33% for Specialty and Enterprise Designs. This step kicks off the initial design mock ups that will demonstrate the web design proposed look & feel.",
    "icon": <Phase1Icon />
  },
  {
    "side":true,
    "name":"Web Development",
    "desc": "Once the web design has been reviewed and approved (this may need several revisions), the designs are developed to perform the functions needed. These can include page navigation, element transitions, database connections, dynamic processing, and more.",
    "icon": <Phase2Icon />
  },
  {
    "side":false,
    "name":"Process Iteration",
    "desc": "Large projects such as Specialty and Enterprise web designs and business solutions are too large to develop in one phase. If the project is large enough, it will be divided in iterations of web design and web development targeting a few screens at a time. At some point, payment will be required during these iterations.",
    "icon": <Phase3Icon />
  },
  {
    "side":true,
    "name":"Testing",
    "desc": "At the end of phase 2 for every iteration, we will conduct a stress testing process that ensures the web design is compatible with all browsers, mobile devices, and operating systems. The testing phase also includes debugging of all errors found and UI/UX inconsistencies.",
    "icon": <Phase4Icon />
  },
  {
    "side":false,
    "name":"Content Copywrite",
    "desc": "Once the website or business solution is working as expected, the content is written to ensure the information is correct. The content will be submitted by the client.",
    "icon": <Phase5Icon />
  },
  {
    "side":true,
    "name":"Delivery",
    "desc": "At the end of the project or the end of every iteration for large projects, a payment will be required before the design is migrated to a live domain and server. These screens will be considered “finalized.” Any changes to these pages can be taken care of during an enhancement phase.",
    "icon": <Phase6Icon />
  },
  {
    "side":false,
    "name":"Enhancements",
    "desc": "This phase is not always needed; however, there are times when a client would like to re-design a page or set of pages that have already been finalized. The enhancement phase facilitates further improvement to the site.",
    "icon": <Phase7Icon />
  }
]

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
      
      <Section variant="dark" className="mt-[90px]">
        <div className="mx-auto max-w-7xl pt-12 pb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl mb-4">About LOTUS Marketing Solutions</h1> 
          </div>
          <p>LOTUS Marketing Solutions is a full-service digital agency based in Harrisburg, Pennsylvania, specializing in custom web design, branding, SEO, and online marketing strategies for businesses across the U.S. and globally. Whether you're a local business in Central PA or an international brand, our expert team delivers cost-effective solutions tailored to your goals—with flexible payment plans available.
          <br /><br />
          Beyond web design and marketing, we offer comprehensive digital services including brand development, website maintenance, technical SEO, and performance optimization. Our goal is to elevate your brand visibility and drive conversions through tailored strategies and cutting-edge technology.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <LinkButton text="Learn More About Our Web Design Services" href="/web-design" className="" />
            <LinkButton text="Explore Our Brand Design Packages" href="/brand-design" className="" />
            <LinkButton text="Explore Our PPC Marketing Services" href="/ppc-marketing" className="" />
          </div>
        </div>
      </Section>
      <Section variant="light" className="rounded-3xl pb-20 -mt-16 ring-1 ring-amber-500 ring-offset-4 ring-offset-slate-800 z-30 mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl pt-12">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-playball mb-4 text-amber-700">The Symbolism Of The Lotus</h2> 
          </div>
          <p>The lotus flower is a symbol of victory above adversity. It defies all of the natural floral laws. Its head is too large for its stem and its stem is too long relative to its width. It grows out of the mud in the depths of murky waters, doesn't receive sufficient sunlight, and yet, it blooms. It fights all the obstacles and adversities and makes its way through four feet of water or more to surface. This is the vibe and principle we want to bring to our clients.</p>
        </div>
      </Section>
      <Section variant="dark" className="-mt-24 pt-24">
        <div className="mx-auto max-w-7xl py-12">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl mb-4">How It Works</h3> 
          </div>
          <p>Our process is simple and most of all, effective! To pinpoint the web design accurately, we implement an agile system that allows us to gather information, design, and develop in a matter that clients will be able to understand the website or business solution as it grows. The process involves the client's input and feedback to ensure we are delivering the designs according to the business rules and demands.<br /><br />

          The web design and development takes shape in a dedicated test server. This allows us to design without causing any interruptions to the current website the client may have in place. Startup clients without a website will follow the same process so that their end users do not land accidentally on a website that is not finished.</p>

          {steps.map((step, index) => {
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-center md:justify-between py-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="ring ring-amber-600 ring-offset-4 ring-offset-slate-800 bg-amber-500/80 p-4 w-full md:w-1/2 flex flex-col items-center md:items-start rounded-lg shadow-lg">
                  <div className="w-24 h-24 mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-2xl mb-4 text-slate-800">{step.name}</h4>
                  <p className="text-center md:text-left text-slate-800">{step.desc}</p>
                </div>
              </div>
            )
          })}


        </div>
      </Section>      
    </>
  )
}

export default About
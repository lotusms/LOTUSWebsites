'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from '@/components/global/PageHead';
import PageHeader from '@/components/global/PageHeader'
import Section from '@/components/global/Section'
import Link from "next/link";

const RefundPolicy = () => {
  const meta = pageMetadata["/refund-policy"];
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
              "@type": "WebPage",
              "name": "Refund Policy",
              "description": meta.description,
              "url": meta.canonical,
              "image": bannerImages.defaultImage,
              "mainEntity": {
                "@type": "WebPage",
                "@id": meta.canonical
              }              
            }),
          }}
        />
      </Head>
      
      <PageHeader pagetitle="Refund Policy" />

      <Section variant="dark">
        <h2 className="text-lg font-semibold mt-8 mb-2">Introduction to Our Refund Policy</h2>
        <p className="text-base mb-4">
          At LOTUS Marketing Solutions, we are committed to delivering high-quality web design and digital marketing services tailored to each client’s unique needs. As a service-based business, our time, resources, and expertise are invested upfront, which means we do not offer refunds once a project has begun or services have been rendered.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-2">Service Satisfaction & Issue Resolution</h3>
        <p className="text-base mb-4">
          While we do not provide monetary refunds, we stand behind our work and will make every reasonable effort to address and resolve any concerns you may have. If you’re not fully satisfied with a design, development, or marketing deliverable, please notify us in writing within 7 business days. We will work closely with you to correct any errors or revise the work within the scope of the original agreement.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-2">Non-Refundable Scenarios</h3>
        <ul className="list-disc ml-8 mt-2 mb-6 text-base">
          <li>Change of mind after project initiation or payment.</li>
          <li>Delays caused by lack of client communication or required assets.</li>
          <li>Requests that fall outside the scope of the originally agreed-upon services.</li>
          <li>Third-party service costs (e.g., domain names, hosting, ad spend, plugins).</li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-2">Policy Updates</h3>
        <p className="text-base mb-4">
          We reserve the right to update this refund policy at any time. Any updates will be reflected on this page. This policy was last updated on June 22nd, 2024.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-2">Contact Us</h3>
        <p className="text-base">
          If you have any questions or concerns regarding this refund policy, please reach out to us:
        </p>

        <Link href="/" className="flex text-yellow-500 mt-4">
          https://www.lotusmarketingsolutions.com/
        </Link>
        <Link href="mailto:info@lotusmarketingsolutions.com" className="flex text-yellow-500 mt-2">
          info@lotusmarketingsolutions.com
        </Link>
      </Section>
    </>
  )
}

export default RefundPolicy
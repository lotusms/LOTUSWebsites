'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import ImageHeader from '@/components/global/ImageHeader';
import Section from '@/components/global/Section';
import Divider from '@/components/global/Divider';
import Cta from '@/components/global/Cta';
import MaintenanceCard from '@/components/MaintenanceCard';
import packages from '@/data/packages';
import maintenanceServices from '@/data/maintenance-services'; 
import PageHead from '@/components/global/PageHead';
import Card from '@/components/global/Card';
const banner = bannerImages.webMaintenanceImage;

const WebMaintenance = () => {
  const meta = pageMetadata["/web-maintenance"];

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
              "serviceType": "Website Maintenance",
              "provider": {
                "@type": "Organization",
                "name": "LOTUS Marketing Solutions",
                "url": "https://www.lotuswebsites.com",
                "logo": bannerImages.logoImage,
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-717-945-8132",
                  "contactType": "Customer Support"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Harrisburg, PA"
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
                "name": "Website Maintenance Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Basic Maintenance",
                    "description": "Monthly updates, plugin patches, uptime monitoring.",
                    "priceCurrency": "USD",
                    "price": "75.00",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Standard Maintenance",
                    "description": "Includes basic + performance optimization and SEO health monitoring.",
                    "priceCurrency": "USD",
                    "price": "150.00",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Premium Maintenance",
                    "description": "Full stack support with analytics reporting and security checks.",
                    "priceCurrency": "USD",
                    "price": "300.00",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              "url": "https://www.lotuswebsites.com/web-maintenance",
              "description": "Affordable and proactive web maintenance services to keep your site updated, secure, and running at full performance.",
              "areaServed": {
                "@type": "Place",
                "name": "Harrisburg, PA"
              },
              "image": bannerImages.webMaintenanceImage,
            }),
          }}
        />
      </Head>

      <ImageHeader
        backgroundImage={banner}
        overlay
        wordone="Web"
        wordtwo="Maintenance"
        subtitle="The last thing you’d want to do is walk away from the things you love doing to update your website…and it will need it."
        className="mt-20"
      />

      <Section variant="dark">
        <div className="mx-auto max-w-7xl py-12">
          <h2 className="text-4xl font-black mb-4 text-center">Our Web Maintenance Services</h2>
          <p>
            Contrary to widespread belief, websites are not self-sustained. They need updates for
            code, browsers, search engines, and security to avoid breaches. Choose one of our web
            maintenance packages for peace of mind. We handle the technical stuff so you can
            focus on your business.
          </p>
          <Divider />

          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-black mb-4">Our Maintenance Packages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <MaintenanceCard
                key={index}
                variant={pkg.variant}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="rounded-t-3xl -mt-12 pb-32" variant="light">        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-4xl font-sfHeavy sm:text-5xl mt-16 mb-12 text-center">
            What is covered in the Maintenance Service?
          </h3>
          <p className="text-center">
            We understand that a website is not just a digital storefront—it’s the heart of your online presence. To ensure it runs smoothly and delivers value, our website maintenance services focus on five critical areas:
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className='text-slate-50 ' variant="custom" >
                <h4 className="text-2xl font-bold mb-4 text-slate-600">{service.title}</h4>
                <p className="mb-4 text-sm">{service.description}</p>
                <h4 className="text-md font-semibold mb-2 text-amber-600">Why It's Important</h4>
                <ul className="list-disc list-inside mb-4">
                  {service.importance.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
                <h4 className="text-md font-semibold mb-2 text-amber-600">Our Approach</h4>
                <p className="text-sm">
                  {service.approach.text}
                  <strong className="text-amber-700">{service.approach.bold}</strong>
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section> 

      <Cta />
    </>
  );
};

export default WebMaintenance;

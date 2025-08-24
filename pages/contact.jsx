'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import Card from "@/components/global/Card";
import FormGroup from "@/components/global/FormGroup";
import LinkButton from "@/components/global/LinkButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/header/Logo";
import Section from "@/components/global/Section";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import PageHead from "@/components/global/PageHead";
import areas from '@/data/areas';
import faqs from '@/data/faqs';
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const initialFormData = {
  name: "",
  email: "",
  message: "",
  business: ""
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const meta = pageMetadata["/contact"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (formData.business) {
      setShowSuccess(true);
      setErrorMessage('');
      setTimeout(() => {
        setShowSuccess(false);
        setFormData(initialFormData);
        router.push('/');
      }, 5000);
      return;
    }


    try {
      // ✅ Dynamic imports
      const { collection, addDoc } = await import('firebase/firestore');
      const db = await import('@/firebase/firebase-db').then(mod => mod.default);
      
      const hostmail = "info@lotusmarketingsolutions.com";

      await addDoc(collection(db, 'mail'), {
        from: formData.email,
        replyTo: formData.email,
        to: [hostmail],
        message: {
          subject: `Message from ${formData.name}`,
          text: 'Thank you for your submission request. We will get back to you as soon as possible.',
          html: `<div>
            <p><label>Name: </label>${formData.name}</p>
            <p><label>Email Address: </label>${formData.email}</p>
            <p><label>Message: </label>${formData.message}</p>
          </div>`,
        },
      });

      setFormData(initialFormData);
      setShowSuccess(true);
      setErrorMessage('');
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/');
      }, 5000);
    } catch (error) {
      console.error("Error sending email: ", error.message, error.stack);
      setErrorMessage("Error sending email: " + error.message);
    }
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.message;
  };

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
              "@type": "ContactPage",
              "name": "Contact LOTUS Marketing Solutions",
              "url": "https://www.lotuswebsites.com/contact",
              "description": "Contact LOTUS Marketing Solutions for web design, branding, and digital marketing services. Based in Harrisburg, PA, we serve clients nationwide.",
              "image": bannerImages.defaultImage,
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "LOTUS Marketing Solutions",
                "telephone": "+1-717-945-8132",
                "email": "info@lotusmarketingsolutions.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Harrisburg",
                  "addressRegion": "PA",
                  "postalCode": "17101",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-717-945-8132",
                  "contactType": "customer service",
                  "availableLanguage": ["English"],
                  "areaServed": "US"
                }
              }
            }),
          }}
        />
      </Head>

      <Section variant="slate" className="mt-[90px]">
        <div className="mx-auto max-w-7xl pt-12 pb-2">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">Contact Us</h1>
          </div>
          <p className="mb-8">
            At LOTUS Marketing Solutions, your success is our priority. Whether you're reaching out for a new web design project, branding consultation, or SEO analysis, our team is here to help. Based in Harrisburg, PA, we proudly serve businesses nationwide with expert digital marketing services.
            <br /><br />
            Contact us today with no obligation. Our professional designers, developers, and strategists are ready to evaluate your project and deliver creative, results-driven solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <LinkButton text="Learn More About Our Web Design Services" href="/web-design" className="" />
            <LinkButton text="Explore Our Brand Design Packages" href="/brand-design" className="" />
            <LinkButton text="Explore Our PPC Marketing Services" href="/ppc-marketing" className="" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-12">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {showSuccess && (
                <div className="bg-green-600 text-slate-50 p-4 mb-4 rounded success-message">
                  Email sent successfully!
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-600 text-slate-50 p-4 mb-4 rounded">
                  {errorMessage}
                </div>
              )}

              <Card className="p-4" variant="dark">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <FormGroup label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    
                    <FormGroup label="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <FormGroup label="Message" type="text" id="message" name="message" textarea value={formData.message} onChange={handleChange} required />

                    <FormGroup label="Leave this field empty" type="text" id="business" name="business" value={formData.business} onChange={handleChange} placeholder="Only a spambot would try to fill this field. If you add anything here, your email will not be sent and your IP address will be blocked" />
                    
                    <LinkButton type="submit" primary large text="Send Message" disabled={!isFormValid()} />
                  </div>
                </form>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <div>
                <Card className="p-4" variant="dark">
                  <div className="grid gap-4">
                    <Logo
                      className="size-full" 
                      fillLotus="fill-slate-50" 
                      fillFlowerLeft="fill-blue-600"  
                      fillFlowerRight="fill-green-600"
                    />
                    <div className="flex items-center justify-start">
                      <EnvelopeIcon className="size-5 mr-3 text-yellow-500" />
                      <Link href="mailto:info@lotusmarketingsolutions.com" link="true">Email Us</Link>
                    </div>
                    <div className="flex items-center justify-start">
                      <PhoneIcon className="size-5 mr-3 text-yellow-500" />
                      <Link href="tel:717-945-8132" link="true">717-945-8132</Link>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 mt-4" variant="dark">
                  <p className="text-center font-sfHeavy text-4xl">
                    Office Hours
                  </p>
                  <p className="text-center mt-4">
                    Monday - Friday: 8am - 5pm
                    <br />
                    Saturday - 8am - 12pm
                    <br />
                    Sunday - Closed
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-8">
        <div className="mx-auto max-w-7xl py-6">
          <h2 className="text-3xl mb-4">Why Contact LOTUS Marketing Solutions?</h2>
          <p>
            Whether you're looking for a new website, SEO strategy, or digital branding support, our team is here to help. At LOTUS, we take pride in offering personalized, results-driven solutions for small and mid-sized businesses across the U.S. Reach out today and take the first step toward online success.
          </p>
        </div>
      </Section>

      <Section variant="slate" className="mt-8">
        <div className="mx-auto max-w-7xl py-6">
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4">
            Frequently Asked Questions
          </h3>
          <dl className="mt-8 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-400">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="pt-10 pb-20" variant="light">
        <div className="mx-auto w-full px-6 lg:px-8">
          <h3 className="text-center text-4xl font-sfHeavy sm:text-5xl mt-16 mb-12">
            Local Marketing Services in<br/> Harrisburg, Lancaster, York & Carlisle
          </h3>
          <p className="text-lg text-pretty mb-12">
            Looking to grow your business in Harrisburg, Lancaster, York, Carlisle, and surrounding areas? We specialize in targeted digital marketing campaigns designed to generate high-quality leads for local businesses. Our team understands the unique challenges of marketing in Central Pennsylvania and helps businesses like yours attract and convert more customers through strategic SEO, paid advertising, social media marketing, and web design. 
            <br /><br />
            Let us connect you with your ideal customers in your target area. Let’s put your business on the map and drive real results!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {areas.map((area, index) => (
              <div key={index} className="relative group">
                <Image 
                  src={area.src} 
                  alt={area.city} 
                  width={600}
                  height={350}
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg ring-1 ring-amber-500 ring-offset-8 ring-offset-blue-900" />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-lg shadow-lg"></div>
                <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
                  {area.city}
                </h4>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-pretty text-center mt-12">
            If you are not located in these areas, don't worry! We work with clients all over the United States and beyond. Our team is equipped to handle projects of any size, no matter where you are located.
          </p>
        </div>
      </Section>

    </>
  );
};

export default Contact;

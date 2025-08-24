'use client';

import Link from "next/link";
import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from '@/components/global/PageHead';
import Section from '@/components/global/Section'
import PageHeader from '@/components/global/PageHeader_bck'

const PrivacyPolicy = () => {
  const meta = pageMetadata["/privacy-policy"];

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
              "name": "Privacy Policy",
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
      
      <PageHeader pagetitle="Privacy Policy" />  
      <Section variant="slate">
        <h2 className="text-lg font-semibold mt-8 mb-2">Introduction to Our Privacy Policy</h2>
        <p className="text-base">
          At LOTUS Marketing Solutions, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services. By using our site, you consent to the practices outlined in this policy.
        </p>
        <p className="text-lg font-semibold mt-8 mb-2">What information do we collect?</p>

        <p className="text-base">
          We collect information from you when you respond to a survey.
          <br /><br />
          When ordering or registering on our site, as appropriate, you may be asked to enter your name, e-mail address, phone number or name. You may, however, visit our site anonymously.
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">What do we use your information for?</p>
        <p className="text-base">Any of the information we collect from you may be used in one of the following ways:</p>
        <ul className="list-disc ml-6">
          <li>To personalize your experience – (your information helps us to better respond to your individual needs)</li>
          <li>To process transactions</li>
        </ul>

        <p className="text-base">
          Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">How do we protect your information?</p>
        <p className="text-base">
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          <br /><br />
          We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
          <br /><br />
          After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">Do we use cookies?</p>
        <p className="text-base">We do not use cookies.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Do we disclose any information to outside parties?</p>
        <p className="text-base">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Third party links</p>
        <p className="text-base">Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

        <p className="text-lg font-semibold mt-8 mb-2">California Online Privacy Protection Act Compliance</p>
        <p className="text-base">
          Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.
          <br /><br />
          As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at any time by logging into their control panel and going to the ‘Edit Profile’ page.
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">Childrens Online Privacy Protection Act Compliance</p>
        <p className="text-base">We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Online Privacy Policy Only</p>
        <p className="text-base">This online privacy policy applies only to information collected through our website and not to information collected offline.</p>


        <p className="text-lg font-semibold mt-8 mb-2">Terms and Conditions</p>
        <p className="text-base">Please also visit our Terms and Conditions div establishing the use, disclaimers, and limitations of liability governing the use of our website at Terms of Use</p>

        <p className="text-lg font-semibold mt-8 mb-2">Your Consent</p>
        <p className="text-base">By using our site, you consent to our web site privacy policy.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Changes to our Privacy Policy</p>
        <p className="text-base">If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on Jun 22nd, 2024</p>

        <p className="text-lg font-semibold mt-8 mb-2">Contacting Us</p>
        <p className="text-base">If there are any questions regarding this privacy policy you may contact us using the information below.</p>        

        <Link href="/" className="flex text-yellow-500 mt-4">https://www.lotusmarketingsolutions.com/</Link>
        <Link href="mailto:info@lotusmarketingsolutions.com" className="flex text-yellow-500 mt-2">info@lotusmarketingsolutions.com</Link>
      </Section>
    </>
  )
}

export default PrivacyPolicy
'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import PageHead from '@/components/global/PageHead';
import PageHeader from '@/components/global/PageHeader_bck'
import Section from '@/components/global/Section'
import Link from "next/link";

const TermsOfUse = () => {
  const meta = pageMetadata["/terms-of-use"];
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
              "name": meta.title,
              "description": meta.description,
              "url": meta.canonical,
              "publisher": {
                "@type": "Organization",
                "name": "LOTUS Marketing Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": bannerImages.defaultImage
                }
              }              
            }),
          }}
        />
      </Head>

      <PageHeader pagetitle="Terms Of Use" />  

      <Section variant="slate">
        <h2 className="text-lg font-semibold mt-8 mb-2">Introduction to Our Terms of Use</h2>
        <p className="text-base">By continuing to browse and use this website you are agreeing to comply with and be bound by the terms and conditions described below, which governs LOTUS Marketing Solutions’s relationship with you in relation to this website. The term “us” or “we” refers to LOTUS Marketing Solutions whose registered office is lotusmarketingsolutions.com. The term “you” refers to the user or visitor of this website. The use of this website is subject to the following terms of use. </p>

        <p className="text-lg font-semibold mt-8 mb-2">Age</p>
        <p className="text-base">You must be at least 18 years of age to use this website for business operations. Visitors under 18 years of age may use this website for school research material only, if applies. By using this website for business purposes, and by agreeing to these terms and conditions, you warrant and represent that you are at least 18 years of age.</p>

        <p className="text-lg font-semibold mt-8 mb-2">License to Use This Website</p>
        <p className="text-base">
          Unless otherwise stated, LOTUS Marketing Solutions and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved. You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          <br /><br />
          You must not:
        </p>
        <ul className="list-disc ml-6">
          <li>republish material from this website (including republication on another website);</li>
          <li>sell, rent or sub-license material from the website;</li>
          <li>show any material from the website in public;</li>
          <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;</li>
          <li>edit or otherwise modify any material on the website; or</li>
          <li>redistribute material from this website, except for content specifically and expressly made available for redistribution.</li>
        </ul>

        <p className="text-lg font-semibold mt-8 mb-2">Acceptable Use</p>
        <p className="text-base">You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity. You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software. You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without LOTUS Marketing Solutions’s express written consent. You must not use this website to transmit or send unsolicited commercial communications. You must not use this website for any purposes related to marketing without LOTUS Marketing Solutions’s express written consent.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Restricted Access</p>
        <p className="text-base">Access to certain areas of this website is restricted. LOTUS Marketing Solutions reserves the right to restrict access to the Admin area of this website at LOTUS Marketing Solutions’s discretion. If LOTUS Marketing Solutions provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential. LOTUS Marketing Solutions may disable your user ID and password in LOTUS Marketing Solutions’s sole discretion without notice or explanation.</p>

        <p className="text-lg font-semibold mt-8 mb-2">User Content</p>
        <p className="text-base">In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose. You grant to LOTUS Marketing Solutions a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to LOTUS Marketing Solutions the right to sub-license these rights, and the right to bring an action for infringement of these rights. Your user content must not be illegal or unlawful, must not infringe any third party’s legal rights, and must not be capable of giving rise to legal action whether against you or LOTUS Marketing Solutions or a third party (in each case under any applicable law). You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint. LOTUS Marketing Solutions reserves the right to edit or remove any material submitted to this website, or stored on LOTUS Marketing Solutions’s servers, or hosted or published upon this website. Not withstanding LOTUS Marketing Solutions′s rights under these terms and conditions in relation to user content, LOTUS Marketing Solutions does not undertake to monitor the submission of such content to, or the publication of such content on, this website.</p>

        <p className="text-lg font-semibold mt-8 mb-2">No Warranties</p>
        <p className="text-base">This website is provided “as is” without any representations or warranties, express or implied. LOTUS Marketing Solutions makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, LOTUS Marketing Solutions does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading. Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial or medical matter you should consult an appropriate professional.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Limitations Of Liabilities</p>
        <p className="text-base">LOTUS Marketing Solutions will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>
        <ul className="list-disc ml-6">
          <li>to the extent that the website is provided free-of-charge, for any direct loss;</li>
          <li>for any indirect, special or consequential loss; or</li>
          <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
        </ul>
        <p className="text-base">These limitations of liability apply even if LOTUS Marketing Solutions has been expressly advised of the potential loss.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Exceptions</p>
        <p className="text-base">Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit LOTUS Marketing Solutions’s liability in respect of any:</p>
        <ul className="list-disc ml-6">
          <li>death or personal injury caused by LOTUS Marketing Solutions’s negligence;</li>
          <li>fraud or fraudulent misrepresentation on the part of LOTUS Marketing Solutions; or</li>
          <li>matter which it would be illegal or unlawful for LOTUS Marketing Solutions to exclude or limit, or to attempt or purport to exclude or limit, its liability.</li>
        </ul>

        <p className="text-lg font-semibold mt-8 mb-2">Reasonableness</p>
        <p className="text-base">By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think they are reasonable, you must not use this website.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Other Parties</p>
        <p className="text-base">
          You accept that, as a limited liability entity, LOTUS Marketing Solutions has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against LOTUS Marketing Solutions’s officers or employees in respect of any losses you suffer in connection with the website.
          <br /><br />
          Without prejudice to the foregoing paragraph, you agree that the limitations of warranties and liability set out in this website disclaimer will protect LOTUS Marketing Solutions’s officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as LOTUS Marketing Solutions.
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">Unenforceable Provisions</p>
        <p className="text-base">If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforcement of the other provisions of this website disclaimer.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Indemnity</p>
        <p className="text-base">You hereby indemnify LOTUS Marketing Solutions and undertake to keep LOTUS Marketing Solutions indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by LOTUS Marketing Solutions to a third party in settlement of a claim or dispute on the advice of LOTUS Marketing Solutions’s legal advisers) incurred or suffered by LOTUS Marketing Solutions arising out of any breach by you of any provision of these terms and conditions, or arising out of any claim that you have breached any provision of these terms and conditions.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Breaches Of These Terms And Conditions</p>
        <p className="text-base">Without prejudice to LOTUS Marketing Solutions’s other rights under these terms and conditions, if you breach these terms and conditions in any way, LOTUS Marketing Solutions may take such action as LOTUS Marketing Solutions deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your Internet service provider to request that they block your access to the website and/or bringing court proceedings against you.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Variation</p>
        <p className="text-base">LOTUS Marketing Solutions may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Assignment</p>
        <p className="text-base">LOTUS Marketing Solutions may transfer, sub-contract or otherwise deal with LOTUS Marketing Solutions’s rights and/or obligations under these terms and conditions without notifying you or obtaining your consent. You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Severability</p>
        <p className="text-base">If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Entire Agreement</p>
        <p className="text-base">These terms and conditions constitute the entire agreement between you and LOTUS Marketing Solutions in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Law &amp; Jurisdiction</p>
        <p className="text-base">These terms and conditions will be governed by and construed in accordance with your local state’s law and federal laws whenever they may override, and any disputes relating to these terms and conditions will be subject to the non-exclusive jurisdiction of the courts.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Your Consent</p>
        <p className="text-base">By using our site, you consent to our web site privacy policy.</p>

        <p className="text-lg font-semibold mt-8 mb-2">Changes to our Terms of Use</p>
        <p className="text-base">
          If we decide to change our terms of use policy, we will post those changes on this page. This policy was last modified on Jun 22nd, 2024
        </p>

        <p className="text-lg font-semibold mt-8 mb-2">Contacting Us</p>
        <p className="text-base">If there are any questions regarding this terms of use you may contact us using the information below.</p>
        

        <Link href="/" className="flex text-yellow-500 mt-4">https://www.lotusmarketingsolutions.com/</Link>
        <Link href="mailto:info@lotusmarketingsolutions.com" className="flex text-yellow-500 mt-2">info@lotusmarketingsolutions.com</Link>
      </Section>
    </>
  )
}

export default TermsOfUse
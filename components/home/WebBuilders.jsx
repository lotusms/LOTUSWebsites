import React from 'react'
import ImageSection from '@/components/global/ImageSection'
import GradientOverlay from '@/components/global/GradientOverlay'
import Link from 'next/link'
import LinkButton from '@/components/global/LinkButton'
import Image from 'next/image'

const compare = [
  { 
    title: "Custom Web Design", 
    theirPromise: "They use cookie-cutter website builders like WordPress, Wix, and Squarespace, often recycling code with other projects.", 
    ourPromise: "We don’t rely on WordPress templates or web builders full of security vulnerabilities. Every website we build is 100% custom-coded for performance, security, and scalability." 
  },
  { 
    title: "Security", 
    theirPromise: "They often outsource your project overseas, putting your data, and your clients’ data at risk. Some outright sell your info to data warehouses.", 
    ourPromise: "We are local, in your timezone, and bound to following our federal laws of protection of privacy and identity." 
  },
  { 
    title: "Fair Pricing", 
    theirPromise: "They fail to disclose hidden fees or large down payments that allow them to charge you the small monthly subscription they advertise.", 
    ourPromise: "Our rates are competitive — often lower than our competition offering similar high-end services. Plus, we offer financing options to make your project more affordable." 
  },
  { 
    title: "Google First Page", 
    theirPromise: "Their ‘guaranteed first-page rankings’ come only through paid Google Ads (AdWords), not organic SEO.", 
    ourPromise: "Same as them — with AdWords. But we are transparent about it. No marketing agency can ethically guarantee organic rankings overnight. SEO takes strategy and time." 
  },
  { 
    title: "Fast Turnaround", 
    theirPromise: "They promise a fast turnaround, but you’ll be lucky to get a response within 24 hours.", 
    ourPromise: "Quality Over Speed. We take the time to create flawless, results-driven websites that truly represent your brand. But we will always be in touch." 
  }
]

const WebBuilders = () => {
  return (
    <ImageSection 
      className="rounded-3xl pt-20 pb-32 -mt-8 ring-1 ring-amber-500 ring-offset-4 text-sky-50 z-30" 
      image="https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/2997.webp">
      <GradientOverlay className="rounded-3xl" opacity='opacity-70'/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 relative z-10">
        <h3 className="flex justify-center sm:justify-start font-sfHeavy text-amber-600 text-pretty text-4xl sm:text-5xl -mt-12 mb-4">
          Beware of Marketing Gimmicks When Contacting a Web Designer Near You
        </h3>
        <p className="text-lg text-pretty">Many companies make bold claims. They promise instant first-page Google rankings, ultra-fast website builds, and unbelievably low prices. But the reality? Most of these promises are misleading or outright scams.</p>
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/cobalt-badge-187102.firebasestorage.app/o/webbuilderads.webp?alt=media&token=61047d53-f142-40dd-8c86-0be4f14bc166" 
          alt="Lotus Marketing Solutions" 
          width={1920}
          height={1080}
          className="mx-auto md:w-3/4 mt-8 mb-12" />

        <div className="mt-8 space-y-6 lg:hidden">
          {compare.map((item, index) => (
            <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-300/50">
              <h3 className="text-amber-500 font-bold text-xl">{item.title}</h3>
              <p className="text-red-400 font-semibold mt-2">Their Promise:</p>
              <p className="text-pretty">{item.theirPromise}</p>
              <p className="text-green-400 font-semibold mt-2">Our Promise:</p>
              <p className="text-pretty">{item.ourPromise}</p>
            </div>
          ))}
        </div>

        <table className="hidden lg:table mt-8 w-full text-left border border-slate-300">
          <thead className="bg-slate-900/50 text-amber-500">
            <tr className="text-pretty *:p-2 ">
              <th></th>
              <th className="text-pretty font-bold text-lg">Their Promise</th>
              <th className="text-pretty font-bold text-lg">Our Promise</th>
            </tr>
          </thead>
          <tbody>
            {compare.map((item, index) => (
              <tr key={index} className="text-pretty *:p-2 *:border *:border-slate-300/50">
                <td className="text-pretty font-bold">{item.title}</td>
                <td className="text-pretty">{item.theirPromise}</td>
                <td className="text-pretty">{item.ourPromise}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-center font-bold text-lg mt-8 text-amber-500">We are not a marketing gimmick. We are a local web design company that cares about your business. Before you hire a web designer or marketing agency, ask these questions and read their terms and conditions before you offer any form of payment or subscription</h3>

        <ul role="list" className="text-base mt-8 list-disc list-inside text-pretty"> 
          <li>Can they guarantee first-page Google results without an AdWords campaign? (If yes, they’re lying!)</li>
          <li>Do you use templates? Can you share a portfolio of some of your recent work? - Then call us. We will gladly let you know in seconds if a web builder/template was used.</li>
          <li>Are your websites outsourced overseas? Can you share access to a GitHub, Bitbucket, AWS project? - Then call us. We will gladly review the code ownership and let you know if it's being outsourced.</li>
          <li>Do I need to put in a deposit? Can I see your project's contract? If they do, this is normal. But they hid it initially.</li>
          <li>What happens if I don't like your design? How many revisions do you offer? - For contrast, we offer unlimited revisions until you are 100% satisfied.</li>
        </ul>

        <div className="flex justify-center mt-8">
          <div className="inline-block">
            <Link href="/contact/" legacyBehavior>
              <a>
                <LinkButton text="Contact Us" href="/contact/" className="mt-8 px-4 py-1.5"/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ImageSection> 
  )
}

export default WebBuilders

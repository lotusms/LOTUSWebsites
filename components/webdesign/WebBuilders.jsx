"use client"

import Link from "next/link"
import FullWidthSection from "../global/FullWidthSection"
import SvgDivider from "../global/SvgDivider"
import CookieCutterCard from "./CookieCutterCard"
import BloatedCodeCard from "./BloatedCodeCard"
import UserExperienceCard from "./UserExperienceCard"
import VulnerabilityCard from "./VulnerabilityCard"

const WebBuilders = () => {
  return (
    <FullWidthSection variant="lime">
      <SvgDivider color="#1e293b" />
      <div className="py-12 px-8">
        <div className="flex flex-col items-end max-w-4xl ms-auto mb-12">
          <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-slate-800 text-right">
            What About Web Builders?
          </h3>
          <p className="text-right">
            A web builder is an online application where anyone without web
            development or design knowledge can make their own website for a
            monthly subscription that is often inexpensive or free. Some of
            these are <strong>Squarespace, Wix, Shopify, Weebly, and WordPress.</strong>
            <br />
            <br />
            While web builders may seem like a convenient and inexpensive
            option for building websites, they often lack the customization and
            functionality required for a professional and effective online
            presence. Custom web design and development allows for greater
            flexibility, scalability, and search engine optimization, ultimately
            resulting in a more successful website.
          </p>
        </div>

        <div className="mx-auto max-w-7xl flex flex-col gap-6">
          <CookieCutterCard />
          <BloatedCodeCard />
          <UserExperienceCard />
          <VulnerabilityCard />
        </div>

        <p className="text-center">
          Read{" "}
          <Link
            href="/blog/diy-website-builders-vs-custom-made-websites-which-one-is-right-for-you"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            this article{" "}
          </Link>
          to learn more about the pros and cons of web builders.
        </p>
      </div>
    </FullWidthSection>
  )
}

export default WebBuilders

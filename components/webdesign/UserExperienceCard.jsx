"use client"

import Card from "@/components/global/Card"
import Image from "next/image"

const UserExperienceCard = () => {

  return (
    <Card variant="dark" className="p-6">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-4">
        {/* Text Side */}
        <div className="text-slate-100 w-full md:w-1/2">
          <h4 className="font-sfHeavy text-slate-100 tracking-tight mb-4 text-left">
            User Experience
          </h4>
          <p>
            Page builders let you drag, drop, and customize your site, but that doesn’t guarantee a great User Experience (UX). Good UX is about more than looks — it’s about guiding visitors and making your website easy to use.
          </p>

          <p>
            Here’s why professional UX design matters:
          </p>

          <ul className="list-disc list-inside my-4">
            <li>Helps visitors find what they need quickly</li>
            <li>Guides users toward taking action (like contacting you or making a purchase)</li>
            <li>Avoids confusion from poor content placement</li>
            <li>Keeps people on your site longer, reducing drop-offs</li>
          </ul>

          <p>
            In short, thoughtful UX design ensures your site works for your business, not against it.
          </p>

          <div className="mt-4">
            <a
              href="https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users"
              className="text-blue-500 hover:underline text-sm/9" >
              Read More About User Experience
            </a>
          </div>
          
        </div>

        {/* Image Side */}
          <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Ftemplate-1.png?alt=media&token=6e33e270-42c9-4f08-b15a-a6820ee6920d"
              alt="Bloated Code example"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
      </div>
    </Card>
  )
}

export default UserExperienceCard

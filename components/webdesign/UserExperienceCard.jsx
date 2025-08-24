"use client"

import { useEffect, useState } from "react"
import Card from "@/components/global/Card"
import Image from "next/image"

const UserExperienceCard = () => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Fgoodui.png?alt=media&token=6bf0f6bc-4c30-415b-a2df-900bbe09eb04",
    "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Fbadux.png?alt=media&token=c544a113-43e8-456d-bd53-ca455f3cf62e",
  ]

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
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`User Experience example ${idx + 1}`}
              width={800}
              height={600}
              className={`transition-opacity duration-700 ease-in-out rounded-lg ${
                activeImage === idx ? "opacity-100 relative" : "opacity-0 absolute inset-0"
              } object-contain`}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default UserExperienceCard

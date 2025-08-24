"use client"

import { useEffect, useState } from "react"
import Card from "@/components/global/Card"
import Image from "next/image"

const CookieCutterCard = () => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Ftemplate-1.png?alt=media&token=6e33e270-42c9-4f08-b15a-a6820ee6920d",
    "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Ftemplate-2.png?alt=media&token=904c2925-74d8-423a-9935-fb5964cc2046",
  ]

  return (
    <Card variant="dark" className="p-6">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-4">
        {/* Text Side */}
        <div className="text-slate-100 w-full md:w-1/2">
          <h4 className="font-sfHeavy text-slate-100 tracking-tight mb-4 text-left">
            Cookie Cutter Designs
          </h4>
          <p>
            Cookie-cutter websites all look the same — they lack personality, uniqueness, and a true reflection of your brand. If you found a template for your industry, chances are your competitors did too. That means visitors will quickly notice that your site looks just like everyone else’s.
            <br /><br />
            Take a look at these two websites — see how similar they feel?
          </p>

          <ul className="list-disc list-inside my-4">
            <li>Same header layout</li>
            <li>Same hero image slider</li>
            <li>Similar icon sections with short descriptions</li>
          </ul>

          <p>
            They’re using the exact same template, only swapping out the colors, images, and text. The result? - Two websites that look nearly identical.
          </p>

          <div className="mt-4">
            <a
              href="https://www.getfoundquick.com/what-is-a-cookie-cutter-website/"
              className="text-blue-500 hover:underline text-sm/9" >
              Read More About Cookie Cutter Designs
            </a>
          </div>
          
        </div>

        {/* Image Side */}
        <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Cookie Cutter Design example ${idx + 1}`}
              width={600}
              height={400}
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

export default CookieCutterCard

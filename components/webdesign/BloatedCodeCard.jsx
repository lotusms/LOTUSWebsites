"use client"

import Card from "@/components/global/Card"
import Image from "next/image"

const BloatedCodeCard = () => {
  return (
    <Card variant="dark" className="p-6">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-4">

        {/* Image Side */}
        <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/webbuilders%2Ftemplate-1.png?alt=media&token=6e33e270-42c9-4f08-b15a-a6820ee6920d"
            alt="Bloated Code example"
            width={600}
            height={400}
            className="rounded-lg object-contain"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          />
        </div>

        {/* Text Side */}
        <div className="text-slate-100 w-full md:w-1/2">
          <h4 className="font-sfHeavy text-slate-100 tracking-tight mb-4 text-left">
            Overloaded Website Code
          </h4>
          <p>
            Page builders are designed for people without coding knowledge, so they pack in as many features as possible to appeal to everyone. The problem? - Extra features mean extra code, which slows your site down and frustrates visitors.
          </p>

          <p>
            Here’s how overloaded website code affects your website:
          </p>

          <ul className="list-disc list-inside my-4">
            <li>Unnecessary features you may never use</li>
            <li>More code for your server to process</li>
            <li>Slower loading times in the browser</li>
            <li>Poorer user experience and higher bounce rates</li>
          </ul>

          <p>
            A custom-built site avoids this by including only what your business actually needs.
          </p>

          <div className="mt-4">
            <a
              href="https://cariadmarketing.com/what-is-code-bloat-and-how-to-avoid-it/"
              className="text-blue-500 hover:underline text-sm/9" >
              Read More About Overloaded Code
            </a>
          </div>
          
        </div>
      </div>
    </Card>
  )
}

export default BloatedCodeCard

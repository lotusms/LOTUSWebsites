"use client"

import React, { useRef, useEffect, useState } from "react"
import { VscLinkExternal } from "react-icons/vsc"
import { motion, useMotionValue, animate } from "framer-motion"
import websites from "@/data/websites"
import FullWidthSection from "../global/FullWidthSection"
import Cta from "../global/Cta"

const Websites = () => {
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0) 

  const slides = [websites[websites.length - 1], ...websites, websites[0]]
  const total = websites.length
  const indexRef = useRef(0)

  // Measure card + container width
  const measure = () => {
    if (carouselRef.current && containerRef.current) {
      const firstCard = carouselRef.current.querySelector(".card")
      if (firstCard) {
        const gap = parseInt(getComputedStyle(carouselRef.current).gap) || 0
        const cardW = firstCard.offsetWidth + gap
        const containerW = containerRef.current.offsetWidth
        setCardWidth(cardW)
        setContainerWidth(containerW)
      }
    }
  }

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Center once widths are ready
  useEffect(() => {
    if (cardWidth && containerWidth) {
      animateToIndex(0, true)
    }
  }, [cardWidth, containerWidth])

  const handleDragEnd = (_, info) => {
    const delta = info.offset.x
    const direction = delta < 0 ? 1 : -1
    let newIndex = indexRef.current + direction

    if (Math.abs(delta) < cardWidth / 4) {
      newIndex = indexRef.current
    }

    indexRef.current = newIndex
    setActiveIndex(newIndex) // ✅ update active card
    animateToIndex(newIndex)
  }

  const animateToIndex = (idx, instant = false) => {
    const offset = (containerWidth - cardWidth) / 2
    const targetX = -(idx + 1) * cardWidth + offset

    if (instant) {
      x.set(targetX)
    } else {
      animate(x, targetX, { duration: 0.35, ease: "easeInOut" })
    }
  }

  // Loop reset
  useEffect(() => {
    const unsubscribe = x.on("animationComplete", () => {
      if (indexRef.current >= total) {
        indexRef.current = 0
        setActiveIndex(0)
        animateToIndex(0, true)
      }
      if (indexRef.current < 0) {
        indexRef.current = total - 1
        setActiveIndex(total - 1)
        animateToIndex(total - 1, true)
      }
    })
    return () => unsubscribe()
  }, [cardWidth, containerWidth, total, x])

  return (
    <div className="p-4 md:p-8 md:pb-12 bg-slate-700">
      <FullWidthSection className="rounded-2xl" variant="lime" border="lime_on_dark">
        <div className="mx-auto px-4 md:px-12 py-8">
          <h2 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack mb-8 text-black/60">
            Web Design <br/>That Turns <span className="text-white ps-4">Clicks</span> <br/>into
            <span className="text-white ps-4">Clients</span>
          </h2>
          <p className="text-lg text-pretty mb-12 md:max-w-4xl">
            We craft custom, responsive websites that not only look stunning but
            perform flawlessly. From intuitive user interfaces to SEO-friendly
            architecture, our web design services are tailored to grow your brand
            online and convert visitors into customers.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative" ref={containerRef}>
          <motion.div
            ref={carouselRef}
            className={`flex gap-8 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: Infinity }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false)
              handleDragEnd(e, info)
            }}
          >
            {slides.map((site, idx) => {
              const isActive = idx - 1 === activeIndex // account for padding slides
              return (
                <motion.div
                  key={`${site.name}-${idx}`}
                  className="card min-w-[375px] md:min-w-[520px] lg:min-w-[800px] bg-slate-800 text-slate-300 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="w-full aspect-[800/477]"> 
                    {isActive ? (
                      <video
                        src={site.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={site.image}
                        alt={site.name}
                        draggable={false}
                        width="800"
                        height="310"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="px-4 py-2 flex items-center justify-between">
                    <h3 className="font-sfMedium uppercase">{site.name}</h3>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-500 hover:text-white transition duration-700"
                    >
                      <VscLinkExternal className="inline-block mr-1" />
                    </a>
                  </div>
                </motion.div>

              )
            })}
          </motion.div>
        </div>
      </FullWidthSection>
      <Cta link="/web-design" /> 
    </div>
  )
}

export default Websites

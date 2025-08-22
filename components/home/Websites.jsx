"use client"

import React, { useRef, useEffect, useState } from "react"
import Section from "@/components/global/Section"
import { VscLinkExternal } from "react-icons/vsc"
import { motion, useMotionValue, animate } from "framer-motion"
import websites from "@/data/websites"

const Websites = () => {
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const slides = [websites[websites.length - 1], ...websites, websites[0]]
  const total = websites.length
  const indexRef = useRef(0)

  // 🔑 Measure card + container width
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

  // Measure on mount + resize
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
        animateToIndex(indexRef.current, true)
      }
      if (indexRef.current < 0) {
        indexRef.current = total - 1
        animateToIndex(indexRef.current, true)
      }
    })
    return () => unsubscribe()
  }, [cardWidth, containerWidth, total, x])

  return (
    <div className="p-4 md:p-8 bg-slate-700">
      <Section
        className="mx-auto px-0 md:px-12 py-24 rounded-2xl"
        variant="lime"
        border="lime_on_dark"
      >
        <h2 className="flex justify-center sm:justify-start uppercase text-4xl font-sfBlack sm:text-8xl mb-8 text-black/60">
          Web Design
        </h2>
        <p className="text-lg text-pretty mb-12">
          We craft custom, responsive websites that not only look stunning but
          perform flawlessly. From intuitive user interfaces to SEO-friendly
          architecture, our web design services are tailored to grow your brand
          online and convert visitors into customers.
        </p>

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
            {slides.map((site, idx) => (
              <motion.div
                key={`${site.name}-${idx}`}
                className="card min-w-[400px] lg:min-w-[520px] bg-slate-800 text-slate-300 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={site.image}
                  alt={site.name}
                  draggable={false}
                  className="h-[420px] lg:h-[520px] w-full object-cover"
                />
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
            ))}
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Websites

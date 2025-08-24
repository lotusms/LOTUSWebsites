"use client"

import React, { useState } from "react"
import Dropdown from "@/components/global/Dropdown" // adjust path

const WebsiteCostCalculator = () => {
  const pricing = {
    complexity: {
      "Static": 1000,
      "Database Integration": 1500,
      "E-commerce": 2000,
      "AI integration": 3000,
    },
    size: {
      "10 - 15": 1000,
      "16 - 50": 2200,
      "51 - 150": 2800,
      "151 - 250": 3200,
      "Over 251": 3800,
    },
    cms: { "Yes": 1500, "No": 0 },
    design: { "Custom": 1000, "Re-Use": 500 },
    content: { "Copyrighted": 1200, "Re-Use": 500 },
    media: { "In-house": 800, "Provided": 0 },
    graphics: { "In-house": 800, "Provided": 0 },
  }

  const labels = {
    complexity: "Website Complexity",
    size: "Number of Pages",
    cms: "Content Management System (CMS)",
    design: "Design Approach",
    content: "Content Strategy",
    media: "Media Assets",
    graphics: "Graphic Design",
  }

  const [selections, setSelections] = useState({
    complexity: "Static",
    size: "10 - 15",
    cms: "No",
    design: "Re-Use",
    content: "Re-Use",
    media: "Provided",
    graphics: "Provided",
  })

  const total = Object.keys(selections).reduce(
    (acc, key) => acc + pricing[key][selections[key]],
    0
  )

  const handleChange = (category, value) => {
    setSelections((prev) => ({ ...prev, [category]: value }))
  }

  return (
    <div className="mx-auto mt-8">
      <div className="space-y-6">
        {Object.keys(pricing).map((category) => (
          <Dropdown
            key={category}
            label={labels[category]}
            options={Object.keys(pricing[category]).map(
              (option) => `${option} (+$${pricing[category][option].toLocaleString()})`
            )}
            selected={`${selections[category]} (+$${pricing[category][selections[category]].toLocaleString()})`}
            onChange={(val) => {
              const optionName = val.split(" (+$")[0]
              handleChange(category, optionName)
            }}
          />
        ))}
      </div>

      <div className="mt-8 p-6 bg-lime-600 text-center ">
        <h3 className="text-2xl font-sfHeavy">Estimated Cost:</h3>
        <h3 className="text-4xl font-sfHeavy ">
          ${total.toLocaleString()}
        </h3>
      </div>
    </div>
  )
}

export default WebsiteCostCalculator

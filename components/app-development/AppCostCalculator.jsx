"use client"

import React, { useState } from "react"
import Dropdown from "@/components/global/Dropdown" 

const AppCostCalculator = () => {
  const pricing = {
    complexity: {
      "Single Platform (iOS or Android)": 3500,
      "Cross Platform (iOS & Android)": 8100,
      "Hybrid EcoSystem (Web + Mobile)": 23200,      
      "Native Mobile App": 40500,    
    },    
    size: {
      "10 - 15": 2000,
      "16 - 50": 2800,
      "51 - 150": 4000,
      "151 - 250": 6000,
      "Over 251": 8000             
    },    
    cms: { 
      "Yes": 3200,
      "No": 0 
    },    
    design: { 
      "Custom": 2000,
      "Re-Use": 800                
    },    
    content: { 
      "Copyrighted": 2000,
      "Re-Use": 500 
    },    
    media: { 
      "In-house": 1800,
      "Provided": 500 
    },    
    graphics: { 
      "In-house": 1800,
      "Provided": 500 
    }
  }


  const labels = {
    complexity: "App Complexity",
    size: "Number of Screens",
    cms: "Content Management System (CMS)",
    design: "Design Approach",
    content: "Content Strategy",
    media: "Media Assets",
    graphics: "Graphic Design",
  }

  const [selections, setSelections] = useState({
    complexity: "Single Platform (iOS or Android)",
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

export default AppCostCalculator

"use client"

import { useState, useEffect } from "react"

export default function useContactLinks() {
  const [phoneLink, setPhoneLink] = useState("")
  const [emailLink, setEmailLink] = useState("")

  useEffect(() => {
    // Construct phone number and email on the client only
    const phone = "+1" + "717" + "945" + "8132"
    const email = "info" + "@" + "lotusmarketingsolutions.com"

    setPhoneLink(`tel:${phone}`)
    setEmailLink(`mailto:${email}`)
  }, [])

  return { phoneLink, emailLink }
}

"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function MangomintOverlay() {
  useEffect(() => {
    // Ensure Mangomint object exists
    window.Mangomint = window.Mangomint || {}; 
    window.Mangomint.CompanyId = 741141;
  }, [])

  return (
    <>
      <Script id="mangomint-overlay-init" strategy="afterInteractive">
        {`
          window.Mangomint = window.Mangomint || {};
          window.Mangomint.CompanyId = 741141;
        `}
      </Script>
      <Script 
        src="https://booking.mangomint.com/app.js" 
        strategy="afterInteractive"
        async
      />
    </>
  )
}

// Add type declaration for window.Mangomint to avoid TS errors
declare global {
  interface Window {
    Mangomint: {
      CompanyId?: number;
      [key: string]: any;
    };
  }
}


"use client"

import Script from "next/script"

export default function MangomintScript() {
  return (
    <>
      <Script id="mangomint-init" strategy="afterInteractive">
        {`
          window.Mangomint = window.Mangomint || {};
          window.Mangomint.CompanyId = 804281;
        `}
      </Script>
      <Script 
        src="https://booking.mangomint.com/app.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}


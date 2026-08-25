import { cn } from "@/lib/utils"
import { SALON_LANGUAGES } from "@/lib/languages"

type LanguagesSpokenProps = {
  variant?: "footer" | "light"
  className?: string
}

function FlagIcon({
  code,
  variant,
}: {
  code: (typeof SALON_LANGUAGES)[number]["flag"]
  variant: "footer" | "light"
}) {
  return (
    <span
      className={cn(
        "inline-flex h-3 w-[1.05rem] shrink-0 overflow-hidden rounded-[1px] ring-1",
        variant === "footer" ? "ring-white/25" : "ring-black/15"
      )}
      aria-hidden
    >
      <svg viewBox="0 0 21 15" className="block h-full w-full" focusable="false">
        {code === "us" && (
          <>
            <rect width="21" height="15" fill="#B22234" />
            {[1, 3, 5, 7, 9, 11].map((row) => (
              <rect key={row} y={row * (15 / 13)} width="21" height={15 / 13} fill="#fff" />
            ))}
            <rect width="8.4" height={(15 / 13) * 7} fill="#3C3B6E" />
          </>
        )}
        {code === "es" && (
          <>
            <rect width="21" height="15" fill="#AA151B" />
            <rect y="4" width="21" height="7" fill="#F1BF00" />
          </>
        )}
        {code === "ru" && (
          <>
            <rect width="21" height="5" fill="#fff" />
            <rect y="5" width="21" height="5" fill="#0039A6" />
            <rect y="10" width="21" height="5" fill="#D52B1E" />
          </>
        )}
        {code === "pl" && (
          <>
            <rect width="21" height="7.5" fill="#fff" />
            <rect y="7.5" width="21" height="7.5" fill="#DC143C" />
          </>
        )}
        {code === "gr" && (
          <>
            <rect width="21" height="15" fill="#0D5EAF" />
            {[1, 3, 5, 7].map((row) => (
              <rect key={row} y={row * (15 / 9)} width="21" height={15 / 9} fill="#fff" />
            ))}
            <rect width="8.4" height={(15 / 9) * 5} fill="#0D5EAF" />
            <rect x="3.2" width="2" height={(15 / 9) * 5} fill="#fff" />
            <rect y={(15 / 9) * 2} width="8.4" height={15 / 9} fill="#fff" />
          </>
        )}
        {code === "it" && (
          <>
            <rect width="7" height="15" fill="#009246" />
            <rect x="7" width="7" height="15" fill="#fff" />
            <rect x="14" width="7" height="15" fill="#CE2B37" />
          </>
        )}
      </svg>
    </span>
  )
}

export default function LanguagesSpoken({
  variant = "light",
  className,
}: LanguagesSpokenProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-3 gap-y-2",
        variant === "footer" && "justify-center md:justify-start",
        className
      )}
    >
      {SALON_LANGUAGES.map((language) => (
        <li
          key={language.name}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-light",
            variant === "footer" ? "text-white" : "text-gray-700"
          )}
        >
          <FlagIcon code={language.flag} variant={variant} />
          <span>{language.name}</span>
        </li>
      ))}
    </ul>
  )
}

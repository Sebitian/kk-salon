export const SALON_LANGUAGES = [
  { name: "English", flag: "us" },
  { name: "Spanish", flag: "es" },
  { name: "Russian", flag: "ru" },
  { name: "Polish", flag: "pl" },
  { name: "Greek", flag: "gr" },
  { name: "Italian", flag: "it" },
] as const

export const SALON_LANGUAGE_NAMES = SALON_LANGUAGES.map((language) => language.name)

export const SALON_LANGUAGES_SENTENCE =
  "English, Spanish, Russian, Polish, Greek, and Italian"

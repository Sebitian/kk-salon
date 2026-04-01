const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "YOUR_CLOUD_NAME"

const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`

export function cloudinaryImage(publicId: string, transforms = "f_auto,q_auto") {
  return `${BASE_URL}/image/upload/${transforms}/${publicId}`
}

export function cloudinaryVideo(publicId: string, transforms = "f_auto,q_auto:best") {
  return `${BASE_URL}/video/upload/${transforms}/${publicId}`
}

export const IMAGES = {
  gallery1: cloudinaryImage("gallery1_kt0qji"),
  gallery2: cloudinaryImage("gallery2_v0r6bc"),
  gallery3: cloudinaryImage("gallery3_v7xoq8"),
  gallery4: cloudinaryImage("gallery4_cdhy9i"),
  tymo: cloudinaryImage("tymo_f4k3ch"),
  aliPazani: cloudinaryImage("ali-pazani_gha7fa"),
  rosa: cloudinaryImage("rosa_kkvcqt"),
  mostafa: cloudinaryImage("mostafa_kfeeq9"),
  nathan: cloudinaryImage("nathan_p1awui"),
  kyAmy: cloudinaryImage("ky_amy_acowvc"),
  keeleyAmy: cloudinaryImage("keeley_amy_kr9inz"),
  faqBg: cloudinaryImage("faq_bg_qjxse4"),
  logoWhite: cloudinaryImage("logo-white_tbrhkx"),
  logoBlackNobg: cloudinaryImage("logo-black-nobg_an8p1f"),
  logoBold: cloudinaryImage("logo-bold_ujafyd"),
  klogo: cloudinaryImage("klogo"),
  gif1: cloudinaryImage("gif1_xzeqcx"),
} as const

export const VIDEOS = {
  services: cloudinaryVideo("services_nepyjr"),
  kossofProductsFinal: cloudinaryVideo("Kossof_Products_Final"),
  kossofProductsFinalAlt: cloudinaryVideo("Kossof.Products.Final_1_dvjdyq"),
  kossofMoroccanFinal: cloudinaryVideo("Kossof.Moroccan.Final"),
  kossofFarmhouseFreshFinal: cloudinaryVideo("Kossof.FarmhouseFresh.Final"),
} as const

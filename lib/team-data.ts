import { cloudinaryImage } from "@/lib/cloudinary"

/** Bios copied only from the previous meet-team-section; no placeholders for others. */
const LEGACY_BIOS: Record<string, string> = {
  Zack:
    "With over 44 years of experience, hairstyling has been part of my life from the very beginning. I grew up in a salon family—both of my parents were salon owners—so the art of hair has always been in my blood.\n\nI am a two-time winner of the Polish Hairdressing Championships and a finalist in the European Hairdressing Championships in Athens. My career has included advanced training in Germany, France, and Spain, and I served as Creative Director for Londa in Germany, appearing in national television campaigns for the brand.\n\nFor 22 years, I worked alongside Teddie Kossof in Northfield, Illinois, building lasting client relationships and delivering high-level, personalized hairstyling.\n\nI have judged international competitions, hosted a television program in Poland, and had my work featured in 12 Polish women's magazines. I've also created hairstyles for leading fashion designers and worked with international celebrities, including Mira Sorvino and Adriana Sklenarikova.\n\nWhile I'm proud of the awards and global experience, my greatest joy remains simple: helping every woman feel confident, radiant, and beautiful.",
  Grace:
    "I believe a great haircut is a masterpiece in motion. With over 30 years of experience, I have transformed my lifelong passion for hair into a dedicated craft. My journey began in my early twenties, and that same creative fire continues to inspire every transformation I create today.\n\nOriginally from Poland and fluent in both Polish and English, I bring an international, artistic perspective to my work behind the chair. While I enjoy all aspects of hairstyling, my true specialty is short, precision cutting. I see hair as a canvas and love the challenge of creating styles that are both bold and effortlessly wearable.\n\nFor me, it's not just about a haircut—it's about the artistry of helping you look and feel like your very best self.",
  Matt:
    "With over 10 years in innovative health and wellness industries, licensed massage therapist Matt Polakow helps clients effectively manage pain and boost wellbeing. He specializes in deep tissue and Swedish massage through a therapeutic lens that tackles discomfort head-on, minimizes stress, and promotes better mobility. Dedicated to personalized, results-oriented sessions, he enhances his practice with personal interests in exercise, reading books, and meditation for a truly holistic perspective.",
  "Carol Marie":
    "✨My new chapter begins at Kossof Salon Spa ✨\n\nHi, I'm Carol Marie Everett, and I'm thrilled to be joining the team! With 35 years of experience, I've dedicated my career to helping clients feel confident and refreshed through personalized skincare and beauty services.\n\nIn addition to skincare and waxing, I've had the privilege of working as a makeup artist for photoshoots, productions, television, film, and commercials, bringing both experience and creativity to every look.\n\nI'm excited to welcome new clients and would love to help you achieve your skincare goals.",
  Lissette:
    "Hi, I'm Lisette Norris.\n\nI'm a Master Hairstylist with over 40 years of experience, proudly serving the North Shore. My work blends timeless foundations with modern techniques, and I'm committed to continuous education and growth.\n\nI offer a full range of services including classic and creative haircuts for men and women, perms, relaxers, keratin treatments, extensions, special event styling, and wig services. I've also been honored with multiple industry awards throughout my career.\n\nI believe great hair starts with truly understanding each client. My goal is simple: to know your hair better than you do and help you look and feel your very best.",
  Brentley:
    "Your long hair is safe with me. I specialize in cutting and styling long hair and truly understand the journey it takes to grow it. I had hair past my waist and didn't get my first haircut until I was 18, so I know the time, patience, and care that goes into keeping it long, healthy, and beautiful.\n\nI'm certified in Brazilian Blowout and Keratin Complex treatments, helping you achieve smooth, manageable results while maintaining your length.\n\nWhen I'm not behind the chair, I'm usually into photography or working on cars—two passions that reflect my attention to detail and love for craftsmanship.",
  Anna:
    "Hi, my name is Anna! With over 19 years of experience, I love creating styles that help my clients feel confident and express who they are. After spending many years at Teddie Kossof Salon, I'm excited to continue my journey at Kossof Salon Spa. I offer women's, men's, and children's haircuts, along with everyday styling, and special-occasion hairstyling. I stay up to date with the latest trends through ongoing education. I can't wait to welcome both new and familiar faces into my chair!",
  Joanna:
    "Joanna is a highly skilled hairstylist with over two decades of experience, specializing in precision cuts, advanced color techniques, keratin treatments, hair extensions, and curly hair design. Her artistry with color includes balayage, foilyage, air touch, ombré, highlights, lowlights, color corrections, and creative transformations—all tailored to each client’s personality and style. She’s known for creating natural, multidimensional tones that make hair shine with life and movement.\n\nA true master of curly and textured hair, Joanna is certified in Ouidad, Advanced Rëzo, and Mizani AirCut cutting methods. She’s passionate about empowering clients to embrace their natural texture, offering expert techniques that define curls, enhance shape, and bring out their healthiest, most vibrant look. Whether it’s soft waves or tight ringlets, Joanna customizes every cut to highlight each client’s unique beauty.\n\nKnown for her warmth and professionalism, Joanna takes pride in her personalized approach—ensuring every guest leaves her chair not only loving their hair, but also feeling confident and renewed.",
}

export type TeamMember = {
  id: string
  name: string
  title: string
  publicId: string
  imageUrl: string
  description: string
  instagram?: string
}

export type TeamCategory = {
  id: string
  label: string
  members: TeamMember[]
}

function member(
  id: string,
  name: string,
  title: string,
  publicId: string,
  instagram?: string,
): TeamMember {
  const description = LEGACY_BIOS[name] ?? ""
  return {
    id,
    name,
    title,
    publicId,
    imageUrl: cloudinaryImage(publicId),
    description,
    ...(instagram ? { instagram } : {}),
  }
}

export const TEAM_CATEGORIES: TeamCategory[] = [
  {
    id: "owners",
    label: "Owners",
    members: [
      member("keeley", "Keeley", "Co-Founder", "keeley3_phihvr"),
      member("amy", "Amy", "Co-Founder", "amy_meorbn"),
    ],
  },
  {
    id: "client-service",
    label: "Client Service",
    members: [
      member("kirill", "Kirill", "Front Desk", "0G3A7333_ls2949"),
      member("lane", "Lani", "Front Desk", "lane_frontdesk_z6fzxu"),
      member("stephanie", "Stephanie", "Front Desk", "0G3A7343_wsdvvg"),
    ],
  },
  {
    id: "assistants",
    label: "Assistants",
    members: [
      member("connie", "Connie", "Assistant", "connie_assistant_yiqn8v"),
      member("dale", "Dale", "Assistant", "dale_assistant_diggrs"),
      member("gigi", "Gigi", "Assistant", "0G3A7005_o0kwyi"),
      member("suzy", "Suzy", "Assistant", "suzy_assistant_ztoueu"),
      member("yolanda", "Yolanda", "Assistant", "0G3A7362_bidhe6"),
    ],
  },
  {
    id: "colorists",
    label: "Colorists",
    members: [
      member("alena", "Alena", "Colorist", "alena_colorist_x5ztwa"),
      member("essie", "Essie", "Colorist", "essie_colorist_lrpf9h"),
      member("jenny", "Jenny", "Colorist", "Jenny_Kossof_vllfru"),
    ],
  },
  {
    id: "colorist-stylist",
    label: "Colorists / Stylists",
    members: [
      member(
        "joanna",
        "Joanna",
        "Colorist / Stylist / Curly Hair Specialist / Hair Extensions",
        "joanna2_ejwrac",
        "https://www.instagram.com/joanna_artistry?igsh=cGUxZ2I4YjhwZ2Fn&utm_source=qr",
      ),
      member("sari", "Sari", "Colorist / Stylist", "sari_colorist_stylist_pstjjz"),
      member("zack", "Zack", "Colorist / Stylist", "zack_colorist_stylist_zu3l5d"),
    ],
  },
  {
    id: "stylists",
    label: "Stylists",
    members: [
      member(
        "anna",
        "Anna",
        "Stylist",
        "anna_stylist_rp1pgw",
        "https://www.instagram.com/styleby_anna_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ),
      member("brentley", "Brentley", "Hair Stylist", "0G3A7377_cviz1i"),
      member("carole", "Carole", "Stylist", "carole_sttylist_gtdoqr"),
      member("diana", "Diana", "Stylist", "diana_stylist_l95hnw"),
      member(
        "donna",
        "Donna",
        "Stylist",
        "donna_stylist_wy1es9",
        "https://www.instagram.com/hairdesigner33/?utm_source=ig_web_button_share_sheet",
      ),
      member("grace", "Grace", "Stylist", "grace_stylist_vx9l6x"),
      member("ledia", "Ledia", "Stylist", "ledia_stylist_jkvcer"),
      member("lissette", "Lissette", "Stylist / Hair Extensions / Wigs & Hairpieces", "lissette_stylist_llmt30"),
      member("patty", "Patty", "Stylist", "patty_stylist_cavgkb"),
      // member("dylan", "Dylan", "Mens Hair Specialist", ""),
      // member("joe", "Joe", "Stylist", "joe_y0gir5"),
    ],
  },
  {
    id: "nails",
    label: "Nails",
    members: [
      member("galina", "Galina", "Nail Tech", "galina_nail_tech_cjaojy"),
      member("lana", "Lana", "Nail Tech", "lana_nail_tech_bqosyz"),
    ],
  },
  {
    id: "spa",
    label: "Spa",
    members: [
      member("carol-marie", "Carol Marie", "Esthetician / Makeup Artist", "carol_marrie_esthetician_rrcawz"),
      member("maria", "Maria Kelly", "Estethician / Massage & Neuro-muscular Therapist", "maria_kelley_esthetician_massage_therapist_er7ey7"),
      member("marie", "Marie", "Estethician", "marie_estethician_xrhmc9"),
      member("matt", "Matt", "Massage Therapist", "matt_massage_therapist_qtxfzl"),
      member("mirela", "Mirela", "Estethician / Massage", "mirela_estethician_massage_dhygsq"),
      member("natalie", "Natalie", "Estethician / Makeup Artist / Permanent Makeup / Microneedling", "natalie_estethician_y7eehm"),
      member("sheyla", "Sheyla", "Estethician", "sheyla_estethician_iq0xvb"),
    ],
  },
]

export function getAllTeamMembers(): TeamMember[] {
  return TEAM_CATEGORIES.flatMap((c) => c.members)
}

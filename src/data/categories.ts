export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  itemCount?: number;
}

export const categories: Category[] = [
  {
    id: "fit-menuler",
    slug: "fit-menuler",
    name: "Fit Menüler",
    shortDescription: "Dengeli makrolar ve zengin içerikler.",
    description: "Kalori ve protein dengesi titizlikle hesaplanmış, günlük rutinine mükemmel uyum sağlayan ana öğünler.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    icon: "Utensils",
  },
  {
    id: "bowl",
    slug: "bowl",
    name: "Bowl Çeşitleri",
    shortDescription: "Renkli, dengeli ve son derece doyurucu.",
    description: "Kompleks karbonhidratlar, taze yeşillikler, tohumlar ve yüksek protein kaynaklarıyla harmanlanmış zengin kaseler.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    icon: "Salad",
  },
  {
    id: "fit-kahvalti",
    slug: "fit-kahvalti",
    name: "Fit Kahvaltı",
    shortDescription: "Güne enerjik ve zinde bir başlangıç.",
    description: "Yumurta, avokado, tam tahıllar ve taze lezzetlerle hazırlanan yüksek proteinli hafif kahvaltı alternatifleri.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    icon: "Sun",
  },
  {
    id: "protein-sporcu",
    slug: "protein-sporcu",
    name: "Protein & Sporcu",
    shortDescription: "Yüksek protein ve kas gelişimi odaklı.",
    description: "Antrenman öncesi ve sonrası için özel formüle edilmiş, yüksek biyoyararlanıma sahip protein tabakları.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    icon: "Dumbbell",
  },
  {
    id: "detoks-shake",
    slug: "detoks-shake",
    name: "Detoks & Shake",
    shortDescription: "Soğuk sıkım içecekler ve whey protein shakeler.",
    description: "Doğal meyve-sebze karışımları, taze bitki çayları ve katkısız protein smoothie alternatifleri.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    icon: "GlassWater",
  },
  {
    id: "salatalar",
    slug: "salatalar",
    name: "Taze Salatalar",
    shortDescription: "Gevrek yeşillikler ve özel ev yapımı soslar.",
    description: "Mevsimin en taze sebzeleri, ızgara proteinler ve hafif zeytinyağlı soslarla hazırlanan ferahlatıcı porsiyonlar.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    icon: "Leaf",
  },
  {
    id: "fit-tatli",
    slug: "fit-tatli",
    name: "Fit Tatlı & Atıştırmalık",
    shortDescription: "Rafine şekersiz ve suçluluk hissettirmeyen lezzetler.",
    description: "Hurma, yulaf, kakao ve çiğ kuruyemişlerle hazırlanan doğal tatlı kaçamakları.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    icon: "Cookie",
  },
];

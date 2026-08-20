export interface Goal {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  filterKey: string;
  image: string;
  colorClass: string;
  accentBorder: string;
}

export const goals: Goal[] = [
  {
    id: "kilo-kontrolu",
    slug: "kilo-kontrolu",
    title: "Kilo Kontrolü",
    subtitle: "Düşük Kalori & Doyurucu Lif",
    description: "Porsiyon kontrollü, kompleks lif ve hafif proteinlerle uzun süre tokluk sağlayan dengeli lezzetler.",
    icon: "Scale",
    badge: "Kalori Kontrollü",
    filterKey: "kilo-kontrolu",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    colorClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentBorder: "hover:border-emerald-500",
  },
  {
    id: "protein-performans",
    slug: "protein-performans",
    title: "Protein & Performans",
    subtitle: "Kas Gelişimi & Hızlı Toparlanma",
    description: "Yüksek biyoyararlanıma sahip protein kaynakları ve antrenman performansını destekleyen zengin öğünler.",
    icon: "Zap",
    badge: "Yüksek Protein (30g+)",
    filterKey: "protein-performans",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    colorClass: "bg-amber-50 text-amber-900 border-amber-200",
    accentBorder: "hover:border-amber-500",
  },
  {
    id: "saglikli-yasam",
    slug: "saglikli-yasam",
    title: "Sağlıklı Yaşam",
    subtitle: "Doğal, Taze & Antioksidan",
    description: "Mevsim sebzeleri, süper gıdalar, tohumlar ve soğuk sıkım içeceklerle günlük enerjini zirveye taşıyan rutinler.",
    icon: "HeartPulse",
    badge: "Dengeli Beslenme",
    filterKey: "saglikli-yasam",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    colorClass: "bg-teal-50 text-teal-900 border-teal-200",
    accentBorder: "hover:border-teal-500",
  },
];

export const business = {
  name: "New Me",
  tagline: "Wellness Cafe",
  city: "Çorlu",
  fullLocation: "Çorlu / Tekirdağ",
  address: "Kazımiye Mah. Salih Omurtak Cad. No:142 Çorlu, Tekirdağ",
  mapsUrl: "https://maps.google.com/?q=Corlu+Tekirdag+New+Me",
  phone: "+90 530 000 0000",
  whatsapp: "905300000000", // Gerçek numara buraya girilir
  email: "info@newmecorlu.com",
  instagram: "@newmecorlu",
  instagramUrl: "https://instagram.com/newmecorlu",
  workingHours: [
    { days: "Pazartesi - Cuma", hours: "08:30 - 21:00" },
    { days: "Cumartesi", hours: "09:00 - 21:00" },
    { days: "Pazar", hours: "10:00 - 19:00" }
  ],
  workingHoursSummary: "Haftanın her günü taze ve özenle hazırlanır.",
};

export function createWhatsAppUrl(message?: string): string {
  const defaultMessage = "Merhaba, New Me web sitesinden geliyorum. Menü ve sipariş hakkında bilgi almak istiyorum.";
  const text = message || defaultMessage;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function createProductWhatsAppUrl(productName: string): string {
  const message = `Merhaba, New Me web sitesinden geliyorum. "${productName}" hakkında bilgi almak / sipariş vermek istiyorum.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function createGoalWhatsAppUrl(goalTitle: string): string {
  const message = `Merhaba, New Me web sitesinden geliyorum. "${goalTitle}" hedefime uygun beslenme seçenekleriniz hakkında bilgi almak istiyorum.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

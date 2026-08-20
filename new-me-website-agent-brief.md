# NEW ME ÇORLU — WEB SİTESİ AGENT BRIEF

## 0. ANA TALİMAT

New Me Çorlu / New Me Wellness Cafe için modern, premium, mobil öncelikli bir tanıtım ve dijital menü sitesi geliştir.

### Tasarım referansı
https://www.dietboxtr.com/

DietBox'u yalnızca şu açılardan referans al:

- sağlıklı yaşam / healthy food görsel dili
- güçlü hero alanı
- ürün ve kategori sunumu
- kart tasarımları
- bol beyaz alan
- güven veren kurumsal yapı
- sağlıklı beslenme odaklı içerik hiyerarşisi

**Birebir kopyalama yapma.**

- Kaynak kod kopyalama.
- Metin kopyalama.
- Görsel kopyalama.
- DietBox marka öğelerini kullanma.
- Aynı componentleri birebir yeniden üretme.

New Me için özgün, daha modern ve yerel bir yorum oluştur.

---

# 1. PROJENİN AMACI

Site, New Me markasını şu eksende konumlandırsın:

**Healthy Food + Wellness + Protein + Dengeli Beslenme**

Kullanıcı siteye girdiğinde ilk birkaç saniyede şunları anlamalı:

1. New Me nedir?
2. Ne tür yemekler sunuyor?
3. Ürünlerin farkı nedir?
4. Hangi ürün kendisine uygun?
5. WhatsApp üzerinden nasıl iletişime geçebilir?

Ana dönüşüm:

> **WhatsApp**

Sitedeki bütün önemli CTA'lar WhatsApp'a yönlensin.

---

# 2. E-TİCARET KESİNLİKLE YOK

Bu site e-ticaret sitesi değildir.

Aşağıdakileri EKLEME:

- Sepet
- Checkout
- Online ödeme
- Kartla ödeme
- Üyelik
- Kullanıcı hesabı
- Giriş / kayıt
- Sipariş takibi
- Kargo sistemi
- Teslimat formu
- WooCommerce tarzı mağaza sistemi
- Ödeme sağlayıcısı
- “Sepete Ekle”
- “Satın Al”

Ürünleri yalnızca sergile.

Ana CTA:

**WhatsApp'tan Sipariş Ver**

İkincil CTA gerekiyorsa:

**WhatsApp'tan Bilgi Al**

Başka dönüşüm sistemi kurma.

---

# 3. MARKA KONUMLANDIRMASI

Marka:

**New Me**

Alt kullanım:

**New Me Wellness Cafe**

Lokasyon:

**Çorlu / Tekirdağ**

Ana marka yaklaşımı:

> Sağlıklı beslenmeyi lezzetli, kolay ve günlük hayatın parçası haline getiren modern wellness cafe.

Ton:

- modern
- temiz
- genç
- enerjik
- premium
- samimi
- güven veren

Kaçınılacak dil:

- aşırı “diyet” baskısı
- korku temelli sağlık mesajları
- mucize sonuç vaatleri
- tıbbi iddialar

Tercih edilen kelimeler:

- dengeli
- protein
- taze
- hedefin
- günlük rutin
- iyi beslen
- içeriğini bil
- sana uygun
- lezzet
- enerji

---

# 4. NEW ME'NİN ANA FARKI

Ürünlerde varsa şu değerleri öne çıkar:

- Kalori
- Protein
- Karbonhidrat
- Yağ
- Lif

Örnek:

**340 kcal**  
**35g Protein**  
**30g Karbonhidrat**  
**5g Yağ**

Bu bilgiler küçük dipnot gibi görünmemeli.

Ürün kartlarının önemli görsel parçalarından biri olmalı.

---

# 5. GENEL TASARIM DİLİ

DietBox'tan healthy-food hissini referans al fakat daha modern uygula.

Hedef:

- açık ve ferah arka plan
- bol white-space
- yüksek kaliteli yemek fotoğrafları
- büyük başlıklar
- sade ikonlar
- yuvarlatılmış modern kartlar
- doğal tonlar
- premium cafe hissi
- hızlı okunabilir sayfa
- güçlü mobil deneyim

Site hazır WordPress teması gibi görünmemeli.

Aşırı animasyon kullanma.

Micro-interaction yeterli:

- hover
- opacity
- translate
- hafif scale
- smooth scroll

---

# 6. RENK SİSTEMİ

Markanın gerçek renkleri elde edilince kolayca değiştirilebilmesi için CSS variables / design tokens kullan.

Başlangıç paleti:

```css
:root {
  --background: #F8F7F3;
  --surface: #FFFFFF;

  --text: #172019;
  --muted: #697069;

  --primary: #2E6B48;
  --primary-dark: #1E4B32;
  --primary-soft: #E7F0E9;

  --accent: #D5A44C;

  --border: #E4E6E2;

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 30px;
}
```

Marka logosundan gerçek renkler çıkarılırsa sadece theme tokenları değiştirilsin.

---

# 7. TYPOGRAPHY

Önerilen:

Headings:

- Manrope
- Plus Jakarta Sans
- DM Sans

Body:

- Inter

Başlıklar:

- güçlü
- kısa
- yüksek font-weight
- hafif sıkı letter spacing

Hero desktop:

`clamp(44px, 6vw, 78px)`

Mobil:

yaklaşık `38px - 48px`

---

# 8. SITE MAP

Ana sayfalar:

```txt
/
 /menu
 /hakkimizda
 /iletisim
```

Opsiyonel:

```txt
/menu/[slug]
```

Ürün detay sayfası da tamamen bilgilendirme amaçlıdır.

---

# 9. HEADER

Desktop:

Sol:

**New Me Logo**

Orta:

- Anasayfa
- Menü
- Hedefine Göre
- Hakkımızda
- İletişim

Sağ:

**WhatsApp'tan Sipariş Ver**

Header:

- sticky
- sade
- 72–82 px yükseklik
- scroll sonrası hafif blur / solid background

Mobil:

- logo
- WhatsApp ikonu veya kısa CTA
- hamburger

---

# 10. HERO

Hero siteyi satmalı.

Eyebrow:

**HEALTHY FOOD • WELLNESS • ÇORLU**

Ana başlık için öneriler:

### Alternatif A

**Ne Yediğini Bil.  
Kendini İyi Hisset.**

### Alternatif B

**Lezzetten Vazgeçmeden  
Daha İyi Beslen.**

### Alternatif C

**Yeni Sen,  
Tabağında Başlar.**

Alt metin:

> Kalorisi ve makroları belli, yüksek proteinli ve dengeli seçeneklerle günlük rutinine uygun öğünleri keşfet.

Primary CTA:

**Menüyü Keşfet**

Secondary CTA:

**WhatsApp'tan Sipariş Ver**

Görsel:

- kaliteli bowl / fit öğün
- doğal ışık
- premium food photography
- iştah açıcı yakın plan

Floating bilgi kartları kullanılabilir:

- `35g Protein`
- `340 kcal`

Desktop:

50/50 split.

Mobil:

metin → CTA → büyük görsel.

---

# 11. GÜVEN / VALUE STRIP

Hero altında 4 kısa fayda:

### Taze Hazırlanır
Günlük ve özenle hazırlanan seçenekler.

### Makroları Belli
Ne yediğini daha kolay takip et.

### Hedefine Uygun
Farklı ihtiyaçlara uygun öğünler.

### Kolay Sipariş
WhatsApp üzerinden iletişime geç.

Desktop:

4 kolon.

Mobil:

2x2 veya yatay kaydırma.

---

# 12. HEDEFİN NE?

DietBox'un kategori mantığını New Me'ye uyarlayan ana bölüm.

Başlık:

**Hedefin Ne?**

Alt:

> Sana uygun seçenekleri daha hızlı keşfet.

3 büyük kart:

## Kilo Kontrolü

Dengeli ve porsiyon kontrollü seçenekler.

## Protein & Performans

Protein odaklı öğünler ve shake seçenekleri.

## Sağlıklı Yaşam

Bowl, kahvaltı ve dengeli günlük seçenekler.

Kartlar menü filtrelerine yönlensin.

Örnek:

```txt
/menu?goal=protein
```

---

# 13. MENÜ KATEGORİLERİ

Önerilen kategoriler:

- Fit Menüler
- Bowl
- Fit Kahvaltı
- Protein & Sporcu
- Detoks
- Shake & İçecekler
- Salatalar
- Keto / Düşük Karbonhidrat
- Sana Özel

Kart:

- büyük görsel
- hafif gradient
- kategori adı
- kısa açıklama
- “İncele”

Desktop:

3–4 kolon.

Mobil:

1–2 kolon veya horizontal snap.

---

# 14. ÖNE ÇIKAN ÜRÜNLER

Başlık:

**New Me Favorileri**

Yaklaşık 6 ürün göster.

Ürün kartında:

- fotoğraf
- kategori
- ürün adı
- kısa açıklama
- kcal
- protein
- opsiyonel makrolar

CTA:

**Detayları Gör**

Ürün fiyatı mevcutsa gösterilebilir.

Ama satış arayüzü oluşturma.

---

# 15. ÜRÜN VERİ MODELİ

Verileri hardcode etmek yerine yapılandırılmış şekilde tut.

Örnek:

```ts
type MenuItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;

  price?: number;

  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;

  ingredients?: string[];
  allergens?: string[];

  tags?: string[];
  featured?: boolean;
}
```

---

# 16. ÜRÜN DETAY SAYFASI

Desktop:

2 kolon.

Sol:

- büyük yemek fotoğrafı

Sağ:

- kategori
- ürün adı
- açıklama
- fiyat (varsa)
- kalori
- protein
- karbonhidrat
- yağ

Altında:

### İçindekiler

### Alerjen Bilgisi

### Besin Değerleri

### Kimler İçin Uygun?

Ana CTA:

**WhatsApp'tan Sipariş Ver**

Buton WhatsApp deep-link açsın.

Örnek otomatik mesaj:

```txt
Merhaba, New Me web sitesinden geliyorum.
[ÜRÜN ADI] hakkında bilgi almak / sipariş vermek istiyorum.
```

URL encode ederek oluştur.

---

# 17. BOWL EDITORIAL SECTION

Normal ürün grid'inden farklı, daha premium görünsün.

Layout:

Sol:

büyük bowl fotoğrafı.

Sağ:

## Renkli. Dengeli. Doyurucu.

3 özellik:

- Taze içerikler
- Dengeli kombinasyonlar
- Protein seçenekleri

CTA:

**Bowl'ları Keşfet**

---

# 18. DETOKS & SHAKE

Başlık:

**Gününe Ferah Bir Dokunuş.**

Alt:

> Meyve-sebze içerikli içecekleri ve protein shake seçeneklerini keşfet.

Kartlar:

- Green
- Red
- Yellow
- Berry
- Coffee
- Protein

Yanlış sağlık iddiası kullanma.

Örneğin:

“Vücudundaki toksinleri temizler.”

YAZMA.

---

# 19. MARKA HİKAYESİ

Başlık:

**Sadece Bir Öğün Değil,  
Daha İyi Bir Rutin.**

Geçici açıklama:

> New Me, sağlıklı beslenmenin lezzetten vazgeçmek anlamına gelmediğine inanır. Dengeli içerikleri ve günlük yaşamın temposuna uyum sağlayan seçenekleriyle daha iyi seçimleri kolaylaştırmayı hedefler.

İşletmeden gerçek marka hikayesi geldiğinde değiştir.

Kurucu, kuruluş yılı veya başarı hikayesi uydurma.

---

# 20. INSTAGRAM GÖRSEL ALANI

Sosyal kanıt amacıyla:

**@newmecorlu**

başlıklı görsel grid kullanılabilir.

Ancak Instagram'ı bir CTA olarak zorunlu hale getirme.

Sitenin ana dönüşüm noktası yine WhatsApp'tır.

Instagram API kullanılmıyorsa statik görsel veri yapısı oluştur.

Sahte post veya sahte yorum üretme.

---

# 21. MÜŞTERİ YORUMLARI

Gerçek yorumlar sağlanırsa testimonial alanı oluştur.

Gerçek yorum yoksa sahte yorum YAZMA.

Componenti veri gelene kadar gizle.

---

# 22. İLETİŞİM

Başlık:

**New Me'ye Ulaş.**

Gösterilebilecek bilgiler:

- adres
- çalışma saatleri
- harita

Ana CTA:

# WhatsApp'tan Yaz

İletişim bölümündeki en güçlü görsel öğe WhatsApp butonu olsun.

---

# 23. WHATSAPP SİSTEMİ

Site genelinde tek satış/iletişim kanalı:

**WhatsApp**

Telefon numarasını tek config üzerinden yönet:

```ts
export const business = {
  name: "New Me",
  whatsapp: "90XXXXXXXXXX",
  address: "",
  mapsUrl: "",
  workingHours: []
};
```

WhatsApp helper fonksiyonu oluştur:

```ts
export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
```

Ana mesaj:

```txt
Merhaba, New Me web sitesinden geliyorum. Menü hakkında bilgi almak istiyorum.
```

Ürün mesajı:

```txt
Merhaba, New Me web sitesinden geliyorum. [ÜRÜN ADI] hakkında bilgi almak / sipariş vermek istiyorum.
```

Mobilde floating WhatsApp butonu olabilir.

Desktop'ta da sağ altta küçük fixed WhatsApp CTA kullanılabilir.

Rahatsız edici popup kullanma.

---

# 24. FOOTER

Footer sade olsun.

Logo

Navigasyon:

- Menü
- Hakkımızda
- İletişim

Bilgiler:

- adres
- çalışma saatleri

CTA:

**WhatsApp**

Alt satır:

```txt
© New Me. Tüm hakları saklıdır.
```

---

# 25. MOBİL TASARIM

Mobil kullanım birinci önceliktir.

Özellikle:

- büyük dokunma alanları
- 44px minimum CTA
- menü kartları rahat okunmalı
- görseller kırpılmamalı
- CTA her zaman kolay ulaşılabilir olmalı
- horizontal overflow oluşmamalı
- hero ilk ekranda anlaşılmalı

Mobilde alt sticky bar kullanılabilir:

```txt
[ Menü ]       [ WhatsApp ]
```

Bu bar e-ticaret değildir.

WhatsApp butonu doğrudan sohbet açar.

---

# 26. RESPONSIVE BREAKPOINTS

Yaklaşık:

```css
mobile: < 640px
tablet: 640px - 1024px
desktop: > 1024px
wide: > 1440px
```

Tüm tasarım responsive olmalı.

---

# 27. PERFORMANS

Hedef:

- Lighthouse Performance 90+
- Accessibility 90+
- SEO 90+
- Best Practices 90+

Yap:

- WebP / AVIF
- responsive images
- lazy loading
- font optimization
- minimum JS
- image dimensions
- proper caching

Hero LCP görselini gereksiz lazy-load etme.

---

# 28. SEO

Temel SEO ekle.

Title:

```txt
New Me Çorlu | Sağlıklı & Protein Odaklı Lezzetler
```

Description örneği:

```txt
New Me Çorlu'da fit menüler, bowl çeşitleri, protein odaklı öğünler, sağlıklı kahvaltılar ve içecek seçeneklerini keşfet.
```

Sayfalarda:

- semantic HTML
- tek H1
- doğru H2/H3
- alt texts
- Open Graph
- sitemap
- robots.txt
- canonical

LocalBusiness / Restaurant uygun schema değerlendirilebilir.

Doğrulanmamış bilgi schema içine yazma.

---

# 29. ACCESSIBILITY

- kontrast yeterli olmalı
- keyboard navigation
- visible focus
- aria-label
- semantic button/link
- görsel alt text
- reduced-motion desteği

---

# 30. ANİMASYON

Hafif kullan.

Önerilen:

- fade-up
- stagger
- card hover
- button micro-interaction
- image scale max 1.03

Süre:

150–400 ms.

Aşırı parallax, sürekli hareket veya ağır 3D efekt kullanma.

---

# 31. CONTENT DATA

Site içerikleri mümkün olduğunca ayrı dosyalarda yönetilsin.

Örnek:

```txt
src/
  data/
    menu.ts
    categories.ts
    business.ts
    testimonials.ts
```

Bu sayede işletme daha sonra:

- ürün
- makro
- fotoğraf
- açıklama
- fiyat

değerlerini kolayca güncelleyebilir.

---

# 32. TEKNİK YAPI

Tercih edilen:

**Astro + TypeScript + Tailwind CSS**

Alternatif olarak mevcut repo farklı framework kullanıyorsa onun yapısına uy.

Öncelikler:

- hızlı
- static-first
- temiz component mimarisi
- SEO friendly
- maintainable

React yalnızca gerektiği yerde island olarak kullanılabilir.

---

# 33. COMPONENT ÖNERİSİ

```txt
components/
  Header
  MobileMenu
  Hero
  ValueStrip
  GoalCards
  CategoryGrid
  MenuCard
  MacroBadge
  FeaturedMenu
  BowlFeature
  DrinksSection
  AboutSection
  InstagramGrid
  LocationSection
  WhatsAppButton
  FloatingWhatsApp
  Footer
```

---

# 34. WHATSAPP CTA KURALI

Sitedeki conversion CTA'lar mümkün olduğunca aynı davranışı göstermeli.

Örneğin:

- Hero → WhatsApp
- Ürün detay → WhatsApp
- Footer → WhatsApp
- Floating button → WhatsApp
- Contact → WhatsApp

Kullanıcı farklı satış sistemlerine dağıtılmamalı.

---

# 35. TASARIMIN HİSSETTİRMESİ GEREKEN ŞEY

Siteye giren biri şunu düşünmeli:

> “Burası sıradan bir diyet yemekçisi değil. Modern, temiz, güvenilir ve ne yediğimi bildiğim kaliteli bir healthy-food markası.”

DietBox referansının ana faydası:

- kategori organizasyonu
- healthy-lifestyle positioning
- güven
- ürün keşfi

New Me'nin farkı:

- daha modern görsel dil
- daha lokal
- daha cafe hissi
- daha güçlü food photography
- makro bilgilerinin daha görünür olması
- çok daha basit kullanıcı akışı
- yalnızca WhatsApp dönüşümü

---

# 36. AGENT İÇİN KRİTİK KURALLAR

1. DietBox'u birebir kopyalama.
2. E-ticaret sistemi oluşturma.
3. Sepet oluşturma.
4. Ödeme oluşturma.
5. Kullanıcı hesabı oluşturma.
6. Sipariş takip sistemi oluşturma.
7. Sahte müşteri yorumu yazma.
8. Sahte işletme bilgisi uydurma.
9. Sağlık konusunda kesin/tıbbi iddia yazma.
10. Tüm conversion akışını WhatsApp'a bağla.
11. Mobil tasarımı desktop'tan sonra düşünme; mobile-first ilerle.
12. Makroları görsel hiyerarşinin önemli parçası yap.
13. Görselleri kolay değiştirilebilir veri yapısında tut.
14. Tasarımı premium ve sade tut.
15. Siteyi restoran katalog teması gibi değil, modern wellness brand site gibi tasarla.

---

# 37. SON HEDEF

Ortaya çıkan ürün:

**DietBox'un sağlıklı yaşam ve kategori organizasyonundan ilham alan; ancak New Me'ye özel, daha modern, premium, hızlı ve WhatsApp odaklı bir wellness cafe web sitesi olmalıdır.**

Kullanıcı akışı mümkün olduğunca basit:

```txt
Siteye Gir
    ↓
New Me'yi Anla
    ↓
Hedef / Kategori Seç
    ↓
Ürünleri İncele
    ↓
Ürün Detayını Gör
    ↓
WhatsApp'tan Sipariş Ver
```

Başka satış akışı oluşturma.

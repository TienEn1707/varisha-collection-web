// ========================================
// VARISHA - Mock Data Store
// All product data, categories, contact info, and links
// ========================================

export const BRAND = {
  name: "Varisha",
  tagline: "Elegance in Every Drape",
  description: "Varisha hadir untuk menemani setiap langkah Anda dengan koleksi hijab yang elegan, nyaman, dan berkualitas. Kami percaya bahwa setiap wanita berhak tampil percaya diri dengan gaya yang timeless.",
  shortDescription: "Koleksi hijab premium yang dirancang khusus untuk wanita modern Indonesia.",
  foundedYear: 2020,
};

export const SOCIAL_LINKS = {
  shopee: "https://shopee.co.id/varishaofficialshop",
  tokopedia: "https://www.tokopedia.com/varishacollectionid/",
  tiktok: "https://www.tiktok.com/@varishaofficiall",
  instagram: "https://www.instagram.com/varishaofficiall/",
};

export const MARKETPLACE_LINKS = {
  shopee: "https://shopee.co.id/varishaofficialshop",
  tokopedia: "https://www.tokopedia.com/varishacollectionid/",
  tiktokshop: "https://www.tiktok.com/@varishaofficiall",
};

export const CONTACT_INFO = {
  address: "Ruko Pasar Tanah Abang Blok F No. 96",
  phone: "+62 852-8007-1275",
  email: "vh.varishaofficial@gmail.com",
  operationalHours: "Senin – Sabtu, 08:00 – 17:00",
};

// export const CONTACT_INFO = {
//   address: "Ruko Pasar Tanah Abang Blok F \n Jl. Kebon Jati No.96, Kampung Bali, \n Jakarta Pusat, DKI Jakarta 10250",
//   phone: "+62 852-8007-1275 \n +62 811-8185-266",
//   email: "vh.varishaofficial@gmail.com",
//   operationalHours: "Senin – Sabtu, 08:00 – 17:00",
// };

export const STORE_RULES = [
  "Tidak melayani pesanan melalui chat atau catatan.",
  "Wajib video unboxing sebelum membuka paket.",
];

export const CONTACT_SUBJECTS = [
  "Masalah Produk",
  "Kendala Teknis",
  "Informasi Produk",
  "Kerjasama Bisnis",
  "Lainnya",
];

export const FOOTER_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Returns & Exchanges", href: "#" },
  { label: "Shipping Information", href: "#" },
  { label: "About", href: "#" },
  { label: "Konfirmasi Pembayaran", href: "#" },
  { label: "Cara Belanja", href: "#" },
  { label: "FAQ", href: "#" },
];

export const CATEGORIES = [
  {
    id: "paris-polos",
    name: "Paris Polos",
    description: "Hijab segi empat polos dengan bahan premium yang ringan dan nyaman digunakan sehari-hari.",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=600&h=600&fit=crop&crop=center",
  },
  {
    id: "pashmina-crinkle",
    name: "Pashmina Crinkle",
    description: "Pashmina dengan tekstur crinkle yang unik, memberikan dimensi dan gaya berbeda pada penampilan Anda.",
    image: "https://images.unsplash.com/photo-1457545195570-67f207084966?w=600&h=600&fit=crop&crop=center",
  },
  {
    id: "pashmina-polos",
    name: "Pashmina Polos",
    description: "Pashmina polos dengan pilihan warna lengkap, cocok untuk gaya formal maupun kasual.",
    image: "https://images.unsplash.com/photo-1623832101940-647285e32a58?w=600&h=600&fit=crop&crop=center",
  },
  {
    id: "bergo-instan",
    name: "Bergo Instan",
    description: "Hijab instan praktis yang siap pakai, ideal untuk Anda yang aktif dan dinamis.",
    image: "https://images.unsplash.com/photo-1581430420317-48eeec37e928?w=600&h=600&fit=crop&crop=center",
  },
  {
    id: "voal-premium",
    name: "Voal Premium",
    description: "Hijab voal premium dengan sentuhan akhir yang mewah, nyaman, dan mudah dibentuk.",
    image: "https://images.unsplash.com/photo-1613909707776-098e961198dc?w=600&h=600&fit=crop&crop=center",
  },
];

export const PRODUCTS = [
  // Paris Polos
  {
    id: "pp-001",
    categoryId: "paris-polos",
    name: "Paris Polos Sahara",
    description: "Hijab segi empat polos berbahan voal premium dengan pinggiran jahit tepi rapi.",
    material: "Voal Premium",
    size: "110 x 110 cm",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=500&h=500&fit=crop&crop=top",
  },
  {
    id: "pp-002",
    categoryId: "paris-polos",
    name: "Paris Polos Almond",
    description: "Hijab segi empat dengan warna almond yang lembut, cocok untuk tampilan sehari-hari.",
    material: "Cotton Voal",
    size: "115 x 115 cm",
    image: "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pp-003",
    categoryId: "paris-polos",
    name: "Paris Polos Dusty Rose",
    description: "Hijab segi empat berwarna dusty rose yang feminin dan elegan.",
    material: "Voal Super",
    size: "110 x 110 cm",
    image: "https://images.unsplash.com/photo-1623832101940-647285e32a58?w=500&h=500&fit=crop&crop=top",
  },
  {
    id: "pp-004",
    categoryId: "paris-polos",
    name: "Paris Polos Navy",
    description: "Hijab segi empat polos warna navy, pilihan sempurna untuk tampilan formal.",
    material: "Voal Premium",
    size: "110 x 110 cm",
    image: "https://images.unsplash.com/photo-1581430420317-48eeec37e928?w=500&h=500&fit=crop&crop=top",
  },
  // Pashmina Crinkle
  {
    id: "pc-001",
    categoryId: "pashmina-crinkle",
    name: "Pashmina Crinkle Ivory",
    description: "Pashmina crinkle berbahan rayon dengan tekstur unik yang tidak mudah kusut.",
    material: "Rayon Crinkle",
    size: "175 x 75 cm",
    image: "https://images.unsplash.com/photo-1457545195570-67f207084966?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: "pc-002",
    categoryId: "pashmina-crinkle",
    name: "Pashmina Crinkle Sage",
    description: "Pashmina crinkle warna sage green yang natural dan menenangkan.",
    material: "Rayon Crinkle Premium",
    size: "180 x 75 cm",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=500&h=500&fit=crop&crop=bottom",
  },
  {
    id: "pc-003",
    categoryId: "pashmina-crinkle",
    name: "Pashmina Crinkle Mocca",
    description: "Pashmina crinkle warna mocca yang hangat dan cocok untuk segala kesempatan.",
    material: "Rayon Crinkle",
    size: "175 x 75 cm",
    image: "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pc-004",
    categoryId: "pashmina-crinkle",
    name: "Pashmina Crinkle Lilac",
    description: "Pashmina crinkle warna lilac yang lembut dan feminin.",
    material: "Rayon Crinkle Premium",
    size: "180 x 75 cm",
    image: "https://images.unsplash.com/photo-1623832101940-647285e32a58?w=500&h=500&fit=crop&crop=center",
  },
  // Pashmina Polos
  {
    id: "ppl-001",
    categoryId: "pashmina-polos",
    name: "Pashmina Polos Caramel",
    description: "Pashmina polos berbahan diamond crepe yang jatuh sempurna.",
    material: "Diamond Crepe",
    size: "175 x 75 cm",
    image: "https://images.unsplash.com/photo-1623832101940-647285e32a58?w=500&h=500&fit=crop&crop=bottom",
  },
  {
    id: "ppl-002",
    categoryId: "pashmina-polos",
    name: "Pashmina Polos Mauve",
    description: "Pashmina polos warna mauve yang elegan untuk acara spesial.",
    material: "Satin Silk",
    size: "180 x 75 cm",
    image: "https://images.unsplash.com/photo-1457545195570-67f207084966?w=500&h=500&fit=crop&crop=top",
  },
  {
    id: "ppl-003",
    categoryId: "pashmina-polos",
    name: "Pashmina Polos Cream",
    description: "Pashmina polos warna cream yang timeless dan serbaguna.",
    material: "Diamond Crepe",
    size: "175 x 75 cm",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: "ppl-004",
    categoryId: "pashmina-polos",
    name: "Pashmina Polos Black",
    description: "Pashmina polos hitam yang wajib dimiliki setiap wanita.",
    material: "Satin Silk Premium",
    size: "180 x 75 cm",
    image: "https://images.unsplash.com/photo-1581430420317-48eeec37e928?w=500&h=500&fit=crop&crop=center",
  },
  // Bergo Instan
  {
    id: "bi-001",
    categoryId: "bergo-instan",
    name: "Bergo Instan Nadia",
    description: "Bergo instan jersey premium dengan pet antem yang praktis dan nyaman.",
    material: "Jersey Premium",
    size: "All Size",
    image: "https://images.unsplash.com/photo-1581430420317-48eeec37e928?w=500&h=500&fit=crop&crop=bottom",
  },
  {
    id: "bi-002",
    categoryId: "bergo-instan",
    name: "Bergo Instan Salwa",
    description: "Bergo instan dengan desain sporty dan bahan yang breathable.",
    material: "Jersey Zoya",
    size: "All Size",
    image: "https://images.unsplash.com/photo-1613909707776-098e961198dc?w=500&h=500&fit=crop&crop=top",
  },
  {
    id: "bi-003",
    categoryId: "bergo-instan",
    name: "Bergo Instan Zahra",
    description: "Bergo instan elegan dengan aksen rempel yang cantik.",
    material: "Jersey Premium",
    size: "All Size",
    image: "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bi-004",
    categoryId: "bergo-instan",
    name: "Bergo Instan Layla",
    description: "Bergo instan simpel dengan bahan yang adem untuk aktivitas harian.",
    material: "Jersey Adem",
    size: "All Size",
    image: "https://images.unsplash.com/photo-1623832101940-647285e32a58?w=500&h=500&fit=crop&crop=top",
  },
  // Voal Premium
  {
    id: "vp-001",
    categoryId: "voal-premium",
    name: "Voal Premium Azalea",
    description: "Voal premium segi empat dengan finishing laser cut yang rapi.",
    material: "Voal Import",
    size: "120 x 120 cm",
    image: "https://images.unsplash.com/photo-1613909707776-098e961198dc?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: "vp-002",
    categoryId: "voal-premium",
    name: "Voal Premium Dahlia",
    description: "Voal premium dengan motif subtle yang elegan dan mewah.",
    material: "Voal Ultrafine",
    size: "120 x 120 cm",
    image: "https://images.unsplash.com/photo-1457545195570-67f207084966?w=500&h=500&fit=crop&crop=bottom",
  },
  {
    id: "vp-003",
    categoryId: "voal-premium",
    name: "Voal Premium Orchid",
    description: "Voal premium dengan warna-warna pastel yang lembut.",
    material: "Voal Import",
    size: "115 x 115 cm",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=500&h=500&fit=crop",
  },
  {
    id: "vp-004",
    categoryId: "voal-premium",
    name: "Voal Premium Magnolia",
    description: "Voal premium eksklusif dengan sentuhan satin di permukaannya.",
    material: "Voal Satin",
    size: "120 x 120 cm",
    image: "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1640154852340-9de73a0643a8?w=1400&h=700&fit=crop&crop=top",
  secondary: "https://images.unsplash.com/photo-1619545307432-9fc73f8135ff?w=800&h=1000&fit=crop&crop=top",
  lifestyle: "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const BRAND_FEATURES = [
  {
    title: "Bahan Premium",
    description: "Kami hanya menggunakan bahan terbaik untuk kenyamanan Anda sepanjang hari.",
    icon: "sparkles",
  },
  {
    title: "Desain Elegan",
    description: "Setiap produk dirancang dengan detail untuk tampilan yang timeless dan modern.",
    icon: "palette",
  },
  {
    title: "Harga Terjangkau",
    description: "Kualitas premium dengan harga yang ramah di kantong.",
    icon: "tag",
  },
  {
    title: "Pengiriman Cepat",
    description: "Pesanan Anda akan diproses dan dikirim dengan cepat dan aman.",
    icon: "truck",
  },
];

export const GOOGLE_MAPS_EMBED = '<iframe class="embed-map-frame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.1006547163197!2d106.81231825664733!3d-6.187151639658552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70f2a07b19b%3A0x2e6fd59d1bebb651!2svarisha%20collection!5e1!3m2!1sid!2sid!4v1771167220375!5m2!1sid!2sid" style="width:100%;height:100%;border:0;"></iframe>';

export const getProductsByCategory = (categoryId) => {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
};

export const getProductById = (productId) => {
  return PRODUCTS.find((p) => p.id === productId);
};

export const getCategoryById = (categoryId) => {
  return CATEGORIES.find((c) => c.id === categoryId);
};

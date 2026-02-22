import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Tag, Truck } from "lucide-react";
import { BRAND, CATEGORIES, BRAND_FEATURES, HERO_IMAGES } from "../data/mock";

const iconMap = {
  sparkles: Sparkles,
  palette: Palette,
  tag: Tag,
  truck: Truck,
};

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-[#F5F0EB]">
        <div className="v-container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[85vh] py-12 lg:py-0">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center lg:pr-16">
              <FadeInSection>
                <p className="v-caption mb-4">New Collection 2025</p>
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <h1 className="v-heading-xl mb-6">
                  Elegance in
                  <br />
                  <span style={{ color: "var(--v-primary)" }}>Every Drape</span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p className="v-body max-w-[440px] mb-8">
                  {BRAND.description}
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link to="/products" className="v-btn-primary no-underline">
                    Lihat Koleksi
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="v-btn-secondary no-underline">
                    Hubungi Kami
                  </Link>
                </div>
              </FadeInSection>
            </div>

            {/* Right Image */}
            <div className="relative">
              <FadeInSection delay={0.15}>
                <div className="relative">
                  <div className="overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-xl">
                    <img
                      src={HERO_IMAGES.secondary}
                      alt="Varisha Hijab Collection"
                      className="w-full h-[400px] lg:h-[600px] object-cover"
                      loading="eager"
                    />
                  </div>
                  {/* Subtle decorative accents */}
                  <div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-br-[30px] border-2 border-[#C89B6B] opacity-40"
                    style={{ zIndex: -1 }}
                  />
                  <div
                    className="absolute -top-4 -right-4 w-20 h-20 rounded-tl-[25px] bg-[#C89B6B] opacity-10"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRAND FEATURES ===== */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#F0E8DD]">
        <div className="v-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {BRAND_FEATURES.map((feature, index) => {
              const IconComp = iconMap[feature.icon];
              return (
                <FadeInSection key={feature.title} delay={index * 0.08}>
                  <div className="text-center px-3 py-6 lg:px-5 lg:py-8 rounded-lg border border-[#F0E8DD] bg-[#FAFAFA] hover:border-[#E8DDD1] hover:bg-white" style={{ transition: "background-color 0.25s ease, border-color 0.25s ease" }}>
                    <div className="w-12 h-12 rounded-full bg-[#F5EDE2] flex items-center justify-center mx-auto mb-4">
                      {IconComp && (
                        <IconComp size={20} color="#C89B6B" strokeWidth={1.5} />
                      )}
                    </div>
                    <h3
                      className="text-[14px] font-semibold mb-1.5 text-[#252525]"
                      style={{ fontFamily: "var(--v-font-sans)" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[13px] text-[#6B6B6B] leading-relaxed m-0"
                      style={{ fontFamily: "var(--v-font-sans)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT BRAND ===== */}
      <section className="v-section bg-[#FAFAFA]">
        <div className="v-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
                <img
                  src={HERO_IMAGES.lifestyle}
                  alt="Tentang Varisha"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInSection>
            <div>
              <FadeInSection delay={0.1}>
                <p className="v-caption mb-3">Tentang Kami</p>
              </FadeInSection>
              <FadeInSection delay={0.15}>
                <h2 className="v-heading-lg mb-4">
                  Kecantikan dalam
                  <br />
                  <span style={{ color: "var(--v-primary)" }}>Kesederhanaan</span>
                </h2>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <div className="v-divider" />
              </FadeInSection>
              <FadeInSection delay={0.25}>
                <p className="v-body mb-6">
                  Varisha didirikan dengan visi menghadirkan hijab berkualitas premium yang
                  mengedepankan kenyamanan dan keanggunan. Setiap produk kami dipilih dengan
                  cermat untuk memastikan Anda tampil percaya diri dalam setiap kesempatan.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p className="v-body mb-8">
                  Dengan beragam pilihan bahan dan warna, Varisha menjadi teman setia untuk
                  menemani gaya harian Anda — dari yang kasual hingga formal.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.35}>
                <Link to="/products" className="v-btn-primary no-underline">
                  Jelajahi Koleksi
                  <ArrowRight size={16} />
                </Link>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="v-section bg-white">
        <div className="v-container">
          <div className="text-center mb-12">
            <FadeInSection>
              <p className="v-caption mb-3">Koleksi Kami</p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <h2 className="v-heading-lg mb-4">Kategori Produk</h2>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <p className="v-body max-w-[520px] mx-auto">
                Temukan hijab yang sempurna untuk setiap kesempatan dari koleksi premium kami.
              </p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {CATEGORIES.map((cat, index) => (
              <FadeInSection key={cat.id} delay={index * 0.08}>
                <Link
                  to={`/products/${cat.id}`}
                  className="no-underline group block"
                >
                  <div className="v-product-card overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 lg:p-5">
                      <h3
                        className="text-[#252525] mb-1 group-hover:text-[#C89B6B] line-clamp-1"
                        style={{ fontFamily: "var(--v-font-serif)", fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)", fontWeight: 400, transition: "color 0.2s ease" }}
                      >
                        {cat.name}
                      </h3>
                      <p
                        className="text-[12px] lg:text-[13px] text-[#6B6B6B] leading-relaxed m-0 line-clamp-2 hidden sm:block"
                        style={{ fontFamily: "var(--v-font-sans)" }}
                      >
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2}>
            <div className="text-center mt-10">
              <Link to="/products" className="v-btn-secondary no-underline">
                Lihat Semua Produk
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-[#F5EDE2] border-t border-[#E8DDD1]">
        <div className="v-container-cta py-16 lg:py-20 text-center">
          <FadeInSection>
            <p className="v-caption mb-3">Belanja Sekarang</p>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h2 className="v-heading-lg mb-4">
              Temukan Hijab Impian Anda
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <p className="v-body max-w-[460px] mx-auto mb-10">
              Kunjungi toko resmi kami di marketplace favorit Anda dan dapatkan koleksi hijab
              terbaik dari Varisha.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://shopee.co.id/varishaofficialshop"
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn-marketplace no-underline"
              >
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="#C89B6B">
                  <path d="M12 2C9.243 2 7 4.243 7 7h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5zM5 7c-.553 0-1 .448-1 1v1.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5V8c0-.552-.447-1-1-1H5zm-1.5 4l1.571 11H18.93L20.5 11h-17zm7.5 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 2c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"/>
                </svg> */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                  <image href="/logo/shopee.svg" width="18" height="18" />
                </svg>
                Shopee
              </a>
              <a
                href="https://www.tokopedia.com/varishacollectionid/"
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn-marketplace no-underline"
              >
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="#C89B6B">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.17 8 12 11.82 4.83 8 12 4.18zM4 9.06l7 3.5V19.5l-7-3.5V9.06zm9 10.44V12.56l7-3.5V15.5l-7 3.5z"/>
                </svg> */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                  <image href="/logo/tokopedia.svg" width="18" height="18" />
                </svg>
                Tokopedia
              </a>
              <a
                href="https://www.tiktok.com/@varishaofficiall"
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn-marketplace no-underline"
              >
                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="#C89B6B">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 004.74 1.52v-3.4a4.85 4.85 0 01-.84-.07 4.83 4.83 0 01-.32-4.56z"/>
                </svg> */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                  <image href="/logo/tiktok.svg" width="18" height="18" />
                </svg>
                TikTok Shop
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

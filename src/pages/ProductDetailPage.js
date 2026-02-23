import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, ExternalLink, AlertCircle } from "lucide-react";
import { getProductById, getCategoryById, MARKETPLACE_LINKS, STORE_RULES } from "../data/mock";

const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const product = getProductById(productId);
  const category = getCategoryById(categoryId);

  if (!product || !category) {
    return (
      <div className="v-container py-20 text-center">
        <h2 className="v-heading-md mb-4">Produk tidak ditemukan</h2>
        <Link to="/products" className="v-btn-primary no-underline">
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-[#F5F0EB] py-6">
        <div className="v-container">
          <nav className="flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              className="no-underline text-[12px] text-[#999] tracking-wide uppercase hover:text-[#C89B6B] transition-colors duration-200"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              Home
            </Link>
            <ChevronRight size={12} className="text-[#ccc]" />
            <Link
              to="/products"
              className="no-underline text-[12px] text-[#999] tracking-wide uppercase hover:text-[#C89B6B] transition-colors duration-200"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              Products
            </Link>
            <ChevronRight size={12} className="text-[#ccc]" />
            <Link
              to={`/products/${categoryId}`}
              className="no-underline text-[12px] text-[#999] tracking-wide uppercase hover:text-[#C89B6B] transition-colors duration-200"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              {category.name}
            </Link>
            <ChevronRight size={12} className="text-[#ccc]" />
            <span
              className="text-[12px] text-[#C89B6B] tracking-wide uppercase"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="v-section bg-white">
        <div className="v-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Image */}
            <div>
              <div className="overflow-hidden rounded-lg bg-[#F5F0EB]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="v-caption mb-3">{category.name}</p>
              <h1
                className="mb-4"
                style={{ fontFamily: "var(--v-font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 300, color: "var(--v-text)" }}
              >
                {product.name}
              </h1>

              <div className="v-divider mb-6" />

              <p className="v-body mb-8">{product.description}</p>

              {/* Material & Size */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <span
                    className="text-[12px] font-medium tracking-[1px] uppercase text-[#999] min-w-[70px]"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Bahan
                  </span>
                  <span
                    className="text-[14px] text-[#252525]"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    {product.material}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-[12px] font-medium tracking-[1px] uppercase text-[#999] min-w-[70px]"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Ukuran
                  </span>
                  <span
                    className="text-[14px] text-[#252525]"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    {product.size}
                  </span>
                </div>
              </div>

              {/* Marketplace Buttons */}
              <div className="mb-8">
                <p
                  className="text-[12px] font-medium tracking-[1px] uppercase text-[#999] mb-4"
                  style={{ fontFamily: "var(--v-font-sans)" }}
                >
                  Beli Sekarang di
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={MARKETPLACE_LINKS.shopee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/logo/shopee.svg" width="18" height="18" />
                    </svg>
                    Shopee
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                  <a
                    href={MARKETPLACE_LINKS.tokopedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/logo/tokopedia.svg" width="18" height="18" />
                    </svg>
                    Tokopedia
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                  <a
                    href={MARKETPLACE_LINKS.tiktokshop}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/logo/tiktok.svg" width="18" height="18" />
                    </svg>
                    TikTok Shop
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                </div>
              </div>

              {/* Store Rules */}
              <div className="bg-[#FDF8F3] border border-[#E8DDD1] rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={16} className="text-[#C89B6B]" />
                  <p
                    className="text-[12px] font-semibold tracking-[1px] uppercase text-[#252525] m-0"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Peraturan Toko
                  </p>
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {STORE_RULES.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#C89B6B] text-white text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span
                        className="text-[13px] text-[#6B6B6B] leading-relaxed"
                        style={{ fontFamily: "var(--v-font-sans)" }}
                      >
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

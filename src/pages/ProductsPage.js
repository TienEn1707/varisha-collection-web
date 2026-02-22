import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CATEGORIES, getProductsByCategory, getCategoryById } from "../data/mock";

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-[#F5F0EB] py-16 lg:py-20">
        <div className="v-container text-center">
          <p className="v-caption mb-3">Koleksi Kami</p>
          <h1 className="v-heading-lg mb-4">Semua Kategori</h1>
          <p className="v-body max-w-[480px] mx-auto">
            Temukan beragam pilihan hijab premium dari Varisha untuk melengkapi gaya Anda.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="v-section bg-white">
        <div className="v-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CATEGORIES.map((cat) => {
              const products = getProductsByCategory(cat.id);
              return (
                <Link
                  key={cat.id}
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
                      <div className="flex items-center justify-between">
                        <div>
                          <h3
                            className="text-[#252525] mb-1 group-hover:text-[#C89B6B]"
                            style={{ fontFamily: "var(--v-font-serif)", fontSize: "1.2rem", fontWeight: 400, transition: "color 0.2s ease" }}
                          >
                            {cat.name}
                          </h3>
                          <p
                            className="text-[12px] text-[#999] m-0"
                            style={{ fontFamily: "var(--v-font-sans)" }}
                          >
                            {products.length} produk
                          </p>
                        </div>
                        <ArrowRight size={18} className="text-[#C89B6B] opacity-0 group-hover:opacity-100" style={{ transition: "opacity 0.2s ease" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

export const ProductCategoryPage = () => {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="v-container py-20 text-center">
        <h2 className="v-heading-md mb-4">Kategori tidak ditemukan</h2>
        <Link to="/products" className="v-btn-primary no-underline">
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-[#F5F0EB] py-12 lg:py-16">
        <div className="v-container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6">
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
            <span
              className="text-[12px] text-[#C89B6B] tracking-wide uppercase"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              {category.name}
            </span>
          </nav>

          <h1 className="v-heading-lg mb-3">{category.name}</h1>
          <p className="v-body max-w-[500px]">{category.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="v-section bg-white">
        <div className="v-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${categoryId}/${product.id}`}
                className="no-underline group block"
              >
                <div className="v-product-card overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      className="text-[#252525] mb-1 group-hover:text-[#C89B6B] transition-colors duration-200 line-clamp-1"
                      style={{ fontFamily: "var(--v-font-serif)", fontSize: "1.05rem", fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-[12px] text-[#999] m-0"
                      style={{ fontFamily: "var(--v-font-sans)" }}
                    >
                      {product.material}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

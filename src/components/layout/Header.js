import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { CATEGORIES } from "../../data/mock";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith("/products");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white border-b border-[#F0E8DD]"
            : "bg-white border-b border-[#F0E8DD]"
        }`}
      >
        <div className="v-container-lg">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 no-underline flex-shrink-0">
              <img 
                src="/logo/varisha-logo.png" 
                alt="Varisha" 
                className="h-9 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
              <span
                style={{ fontFamily: "var(--v-font-serif)" }}
                className="text-[28px] font-light tracking-[1px]"
              >
                <span style={{ color: "var(--v-text)" }}>Varisha</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link
                to="/"
                className={`no-underline text-[12px] font-medium tracking-[1.5px] uppercase pb-0.5 ${
                  isActive("/")
                    ? "text-[#C89B6B] v-nav-active-indicator"
                    : "text-[#252525] hover:text-[#C89B6B]"
                }`}
                style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
              >
                Home
              </Link>

              {/* Products with Dropdown */}
              <div className="v-nav-item relative" style={{ paddingTop: 2, paddingBottom: 2 }}>
                <Link
                  to="/products"
                  className={`no-underline text-[12px] font-medium tracking-[1.5px] uppercase flex items-center gap-1.5 pb-0.5 ${
                    isProductsActive
                      ? "text-[#C89B6B] v-nav-active-indicator"
                      : "text-[#252525] hover:text-[#C89B6B]"
                  }`}
                  style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
                >
                  Products
                  <ChevronDown size={13} strokeWidth={2} />
                </Link>

                <div className="v-nav-dropdown">
                  {CATEGORIES.map((cat) => (
                    <Link key={cat.id} to={`/products/${cat.id}`}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className={`no-underline text-[12px] font-medium tracking-[1.5px] uppercase pb-0.5 ${
                  isActive("/contact")
                    ? "text-[#C89B6B] v-nav-active-indicator"
                    : "text-[#252525] hover:text-[#C89B6B]"
                }`}
                style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-transparent hover:border-[#E8DDD1] hover:bg-[#F5F0EB] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              style={{ transition: "background-color 0.2s ease, border-color 0.2s ease" }}
            >
              {mobileMenuOpen ? (
                <X size={20} color="#252525" strokeWidth={1.5} />
              ) : (
                <Menu size={20} color="#252525" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ borderTop: mobileMenuOpen ? "1px solid #F0E8DD" : "none" }}
        >
          <div className="bg-white px-5 py-5 flex flex-col gap-1">
            <Link
              to="/"
              className={`no-underline py-3.5 px-4 rounded-lg text-[12px] font-medium tracking-[1.5px] uppercase ${
                isActive("/")
                  ? "text-[#C89B6B] bg-[#F5EDE2]"
                  : "text-[#252525] hover:bg-[#F5F0EB]"
              }`}
              style={{ fontFamily: "var(--v-font-sans)", transition: "background-color 0.15s ease" }}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full flex items-center justify-between py-3.5 px-4 rounded-lg text-[12px] font-medium tracking-[1.5px] uppercase bg-transparent border-none cursor-pointer ${
                  isProductsActive
                    ? "text-[#C89B6B] bg-[#F5EDE2]"
                    : "text-[#252525] hover:bg-[#F5F0EB]"
                }`}
                style={{ fontFamily: "var(--v-font-sans)", transition: "background-color 0.15s ease" }}
              >
                Products
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  style={{
                    transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileProductsOpen ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 pl-4 border-l-2 border-[#F0E8DD] flex flex-col gap-0.5">
                  <Link
                    to="/products"
                    className="no-underline py-2.5 px-3 rounded-md text-[12px] font-medium tracking-[0.5px] text-[#6B6B6B] hover:text-[#C89B6B] hover:bg-[#F5F0EB]"
                    style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.15s ease, background-color 0.15s ease" }}
                  >
                    Semua Produk
                  </Link>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products/${cat.id}`}
                      className="no-underline py-2.5 px-3 rounded-md text-[12px] font-medium tracking-[0.5px] text-[#6B6B6B] hover:text-[#C89B6B] hover:bg-[#F5F0EB]"
                      style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.15s ease, background-color 0.15s ease" }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`no-underline py-3.5 px-4 rounded-lg text-[12px] font-medium tracking-[1.5px] uppercase ${
                isActive("/contact")
                  ? "text-[#C89B6B] bg-[#F5EDE2]"
                  : "text-[#252525] hover:bg-[#F5F0EB]"
              }`}
              style={{ fontFamily: "var(--v-font-sans)", transition: "background-color 0.15s ease" }}
            >
              Contact
            </Link>

            {/* Mobile social links */}
            <div className="mt-4 pt-4 border-t border-[#F0E8DD] flex items-center justify-center gap-5">
              <a href="https://www.instagram.com/varishaofficiall/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#C89B6B]" style={{ transition: "color 0.2s ease" }}>
                <svg width="18" height="18" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#252525"/>
                  <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#252525" stroke-linecap="round"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@varishaofficiall" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#C89B6B]" style={{ transition: "color 0.2s ease" }}>
                <svg width="15" height="15" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#252525" stroke-linecap="round" stroke-width="14" d="M108 132a38.004 38.004 0 0 1-23.458 35.107 37.995 37.995 0 0 1-41.412-8.237 37.996 37.996 0 0 1-8.237-41.412A38.001 38.001 0 0 1 70 94"/><path stroke="#252525" stroke-linecap="round" stroke-linejoin="round" stroke-width="14" d="M108 132V22c0 18 24 50 52 50"/></svg>
              </a>
              <a href="https://shopee.co.id/varishaofficialshop" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#C89B6B]" style={{ transition: "color 0.2s ease" }}>
                <svg width="15" height="15" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#252525" d="m29.004 157.064 5.987-.399-5.987.399ZM22 52v-6a6 6 0 0 0-5.987 6.4L22 52Zm140.996 105.064-5.987-.399 5.987.399ZM170 52l5.987.4A6 6 0 0 0 170 46v6ZM34.991 156.665 27.987 51.601l-11.974.798 7.005 105.064 11.973-.798Zm133.991.798 7.005-105.064-11.974-.798-7.004 105.064 11.973.798Zm-11.973-.798a10 10 0 0 1-9.978 9.335v12c11.582 0 21.181-8.98 21.951-20.537l-11.973-.798Zm-133.991.798C23.788 169.02 33.387 178 44.968 178v-12a10 10 0 0 1-9.977-9.335l-11.973.798ZM74 48c0-12.15 9.85-22 22-22V14c-18.778 0-34 15.222-34 34h12Zm22-22c12.15 0 22 9.85 22 22h12c0-18.778-15.222-34-34-34v12ZM22 58h148V46H22v12Zm22.969 120H147.03v-12H44.969v12Z"/><path stroke="#252525" stroke-linecap="round" stroke-width="12" d="M114 84H88c-7.732 0-14 6.268-14 14v0c0 7.732 6.268 14 14 14h4m-2 0h14c7.732 0 14 6.268 14 14v0c0 7.732-6.268 14-14 14H78"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="v-mobile-overlay lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
};

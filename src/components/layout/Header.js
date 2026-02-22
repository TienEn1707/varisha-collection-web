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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@varishaofficiall" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#C89B6B]" style={{ transition: "color 0.2s ease" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 004.74 1.52v-3.4a4.85 4.85 0 01-.84-.07 4.83 4.83 0 01-.32-4.56z"/>
                </svg>
              </a>
              <a href="https://shopee.co.id/varishaofficialshop" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#C89B6B]" style={{ transition: "color 0.2s ease" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.243 2 7 4.243 7 7h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5zM5 7c-.553 0-1 .448-1 1v1.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5V8c0-.552-.447-1-1-1H5zm-1.5 4l1.571 11H18.93L20.5 11h-17zm7.5 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 2c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"/>
                </svg>
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

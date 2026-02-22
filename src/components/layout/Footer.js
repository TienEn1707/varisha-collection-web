import React from "react";
import { Link } from "react-router-dom";
import { BRAND, SOCIAL_LINKS, CONTACT_INFO, FOOTER_LINKS } from "../../data/mock";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#333] flex items-center justify-center no-underline hover:bg-[#C89B6B]"
    aria-label={label}
    style={{ transition: "background-color 0.25s ease" }}
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E]">
      {/* Main Footer */}
      <div className="v-container-lg-cta pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="no-underline inline-flex items-center gap-3 mb-4">
              <img 
                src="/logo/varisha-black.png" 
                alt="Varisha" 
                className="h-9 w-auto object-contain"
              />
              <span
                style={{ fontFamily: "var(--v-font-serif)" }}
                className="text-[26px] font-light tracking-[1px] text-white"
              >
                Varisha
              </span>
            </Link>
            <p
              className="text-[#888] text-[13px] leading-[1.7] mb-6 max-w-[280px]"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              {BRAND.shortDescription}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              <SocialIcon href={SOCIAL_LINKS.shopee} label="Shopee">
                <svg width="15" height="15" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#ffffff" d="m29.004 157.064 5.987-.399-5.987.399ZM22 52v-6a6 6 0 0 0-5.987 6.4L22 52Zm140.996 105.064-5.987-.399 5.987.399ZM170 52l5.987.4A6 6 0 0 0 170 46v6ZM34.991 156.665 27.987 51.601l-11.974.798 7.005 105.064 11.973-.798Zm133.991.798 7.005-105.064-11.974-.798-7.004 105.064 11.973.798Zm-11.973-.798a10 10 0 0 1-9.978 9.335v12c11.582 0 21.181-8.98 21.951-20.537l-11.973-.798Zm-133.991.798C23.788 169.02 33.387 178 44.968 178v-12a10 10 0 0 1-9.977-9.335l-11.973.798ZM74 48c0-12.15 9.85-22 22-22V14c-18.778 0-34 15.222-34 34h12Zm22-22c12.15 0 22 9.85 22 22h12c0-18.778-15.222-34-34-34v12ZM22 58h148V46H22v12Zm22.969 120H147.03v-12H44.969v12Z"/><path stroke="#ffffff" stroke-linecap="round" stroke-width="12" d="M114 84H88c-7.732 0-14 6.268-14 14v0c0 7.732 6.268 14 14 14h4m-2 0h14c7.732 0 14 6.268 14 14v0c0 7.732-6.268 14-14 14H78"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.tokopedia} label="Tokopedia">
                <svg width="15" height="15" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#ffffff" fill-rule="evenodd" d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" clip-rule="evenodd"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.tiktok} label="TikTok">
                <svg width="15" height="15" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-width="14" d="M108 132a38.004 38.004 0 0 1-23.458 35.107 37.995 37.995 0 0 1-41.412-8.237 37.996 37.996 0 0 1-8.237-41.412A38.001 38.001 0 0 1 70 94"/><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="14" d="M108 132V22c0 18 24 50 52 50"/></svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#ffffff"/>
                  <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#ffffff" stroke-linecap="round"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#C89B6B] mb-5"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              Menu
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {FOOTER_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="no-underline text-[13px] text-[#888] hover:text-[#C89B6B]"
                    style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#C89B6B] mb-5"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              Informasi
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {FOOTER_LINKS.slice(5).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="no-underline text-[13px] text-[#888] hover:text-[#C89B6B]"
                    style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#C89B6B] mb-5"
              style={{ fontFamily: "var(--v-font-sans)" }}
            >
              Kontak CS
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[11px] font-medium tracking-[0.5px] uppercase text-[#555] mb-1" style={{ fontFamily: "var(--v-font-sans)" }}>Alamat</p>
                <p className="text-[13px] text-[#bbb] m-0" style={{ fontFamily: "var(--v-font-sans)" }}>{CONTACT_INFO.address}</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.5px] uppercase text-[#555] mb-1" style={{ fontFamily: "var(--v-font-sans)" }}>Telepon</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="no-underline text-[13px] text-[#bbb] hover:text-[#C89B6B]" style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.5px] uppercase text-[#555] mb-1" style={{ fontFamily: "var(--v-font-sans)" }}>Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="no-underline text-[13px] text-[#bbb] hover:text-[#C89B6B]" style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}>
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.5px] uppercase text-[#555] mb-1" style={{ fontFamily: "var(--v-font-sans)" }}>Jam Operasional</p>
                <p className="text-[13px] text-[#bbb] m-0" style={{ fontFamily: "var(--v-font-sans)" }}>{CONTACT_INFO.operationalHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#2a2a2a]">
        <div className="v-container-lg py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[11px] text-[#888] m-0"
            style={{ fontFamily: "var(--v-font-sans)" }}
          >
            &copy; {new Date().getFullYear()} Varisha Collection. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-5">
            {[
              { name: "Shopee", href: SOCIAL_LINKS.shopee },
              { name: "Tokopedia", href: SOCIAL_LINKS.tokopedia },
              { name: "TikTok", href: SOCIAL_LINKS.tiktok },
              { name: "Instagram", href: SOCIAL_LINKS.instagram },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[11px] text-[#555] hover:text-[#C89B6B] tracking-[1px] uppercase"
                style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
              >
                {item.name}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

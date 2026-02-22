import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import { CONTACT_INFO, CONTACT_SUBJECTS, SOCIAL_LINKS, GOOGLE_MAPS_EMBED } from "../data/mock";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSubjectOpen(false);
      }
    };
    if (subjectOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [subjectOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectSelect = (subject) => {
    setFormData({ ...formData, subject });
    setSubjectOpen(false);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 11) return "pagi";
    if (hour >= 11 && hour < 15) return "siang";
    if (hour >= 15 && hour < 18) return "sore";
    return "malam";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
      toast.error("Mohon lengkapi semua field yang diperlukan.");
      return;
    }

    const waMessage = `Halo Kak, selamat ${getGreeting()} ♡\n\nPerkenalkan, nama saya ${formData.name}. Saya ingin menyampaikan pesan terkait *${formData.subject}*.\n\n${formData.message}\n\nUntuk konfirmasi, nomor telepon saya dapat dihubungi di ${formData.phone}.\n\nTerima kasih banyak, saya menantikan respons dari Kakak ☻`;
    const encoded = encodeURIComponent(waMessage);
    window.open(`https://wa.me/6285280071275?text=${encoded}`, "_blank");

    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
  //     toast.error("Mohon lengkapi semua field yang diperlukan.");
  //     return;
  //   }
  //   setIsSubmitting(true);
  //   // Simulate submission
  //   setTimeout(() => {
  //     toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
  //     setFormData({ name: "", phone: "", subject: "", message: "" });
  //     setIsSubmitting(false);
  //   }, 1000);
  // };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F5F0EB] py-16 lg:py-20">
        <div className="v-container text-center">
          <p className="v-caption mb-3">Hubungi Kami</p>
          <h1 className="v-heading-lg mb-4">Ada Pertanyaan?</h1>
          <p className="v-body max-w-[480px] mx-auto">
            Kami siap membantu Anda. Silakan hubungi kami melalui informasi kontak di bawah
            atau kirimkan pesan melalui form.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="v-section bg-white">
        <div className="v-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14">
            {/* Address */}
            <div className="bg-[#FAFAFA] rounded-lg p-5 lg:p-6 border border-[#F0E8DD] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE2] flex items-center justify-center mb-3">
                <MapPin size={17} color="#C89B6B" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[12px] font-semibold tracking-[0.5px] uppercase text-[#252525] mb-1.5"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                Alamat
              </h3>
              <p
                className="text-[13px] text-[#6B6B6B] leading-relaxed m-0"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                {CONTACT_INFO.address}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-[#FAFAFA] rounded-lg p-5 lg:p-6 border border-[#F0E8DD] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE2] flex items-center justify-center mb-3">
                <Phone size={17} color="#C89B6B" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[12px] font-semibold tracking-[0.5px] uppercase text-[#252525] mb-1.5"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                Telepon
              </h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="no-underline text-[13px] text-[#6B6B6B] hover:text-[#C89B6B]"
                style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#FAFAFA] rounded-lg p-5 lg:p-6 border border-[#F0E8DD] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE2] flex items-center justify-center mb-3">
                <Mail size={17} color="#C89B6B" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[12px] font-semibold tracking-[0.5px] uppercase text-[#252525] mb-1.5"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                Email
              </h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="no-underline text-[13px] text-[#6B6B6B] hover:text-[#C89B6B]"
                style={{ fontFamily: "var(--v-font-sans)", transition: "color 0.2s ease" }}
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-[#FAFAFA] rounded-lg p-5 lg:p-6 border border-[#F0E8DD] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE2] flex items-center justify-center mb-3">
                <Clock size={17} color="#C89B6B" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[12px] font-semibold tracking-[0.5px] uppercase text-[#252525] mb-1.5"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                Jam Operasional
              </h3>
              <p
                className="text-[13px] text-[#6B6B6B] leading-relaxed m-0"
                style={{ fontFamily: "var(--v-font-sans)" }}
              >
                {CONTACT_INFO.operationalHours}
              </p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="v-heading-md mb-2">Kirim Pesan</h2>
              <p className="v-body mb-8">
                Isi form di bawah ini dan kami akan segera merespons pesan Anda.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[12px] font-medium tracking-[0.5px] uppercase text-[#999] mb-2"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8DDD1] rounded-md text-[14px] text-[#252525] placeholder-[#bbb] outline-none focus:border-[#C89B6B] transition-colors duration-200"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[12px] font-medium tracking-[0.5px] uppercase text-[#999] mb-2"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 xxx-xxxx-xxxx"
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8DDD1] rounded-md text-[14px] text-[#252525] placeholder-[#bbb] outline-none focus:border-[#C89B6B] transition-colors duration-200"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label
                    className="block text-[12px] font-medium tracking-[0.5px] uppercase text-[#999] mb-2"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Subjek
                  </label>
                  <button
                    type="button"
                    onClick={() => setSubjectOpen(!subjectOpen)}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8DDD1] rounded-md text-[14px] text-left flex items-center justify-between cursor-pointer outline-none focus:border-[#C89B6B] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--v-font-sans)",
                      color: formData.subject ? "#252525" : "#bbb",
                    }}
                  >
                    {formData.subject || "Pilih subjek"}
                    <ChevronDown
                      size={16}
                      className={`text-[#999] transition-transform duration-200 ${
                        subjectOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {subjectOpen && (
                    <div
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E8DDD1] rounded-md shadow-lg z-20 overflow-hidden"
                      style={{ animation: "v-slideDown 0.15s ease" }}
                    >
                      {CONTACT_SUBJECTS.map((subject) => (
                        <button
                          key={subject}
                          type="button"
                          onClick={() => handleSubjectSelect(subject)}
                          className={`w-full px-4 py-3 text-left text-[14px] border-none cursor-pointer transition-colors duration-150 ${
                            formData.subject === subject
                              ? "bg-[#F5EDE2] text-[#C89B6B]"
                              : "bg-white text-[#6B6B6B] hover:bg-[#F5F0EB]"
                          }`}
                          style={{ fontFamily: "var(--v-font-sans)" }}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[12px] font-medium tracking-[0.5px] uppercase text-[#999] mb-2"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8DDD1] rounded-md text-[14px] text-[#252525] placeholder-[#bbb] outline-none resize-none focus:border-[#C89B6B] transition-colors duration-200"
                    style={{ fontFamily: "var(--v-font-sans)" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="v-btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div>
              <h2 className="v-heading-md mb-2">Lokasi Kami</h2>
              <p className="v-body mb-6">
                Kunjungi toko kami langsung di Pasar Tanah Abang.
              </p>

              {/* Google Maps Embed */}
              <div className="w-full h-[300px] lg:h-[350px] rounded-lg overflow-hidden border border-[#E8DDD1] mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.534692904502!2d106.81086927567173!3d-6.1873980077007475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70f2a07b19b%3A0x2e6fd59d1bebb651!2svarisha%20collection!5e0!3m2!1sid!2sid!4v1771772757286!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <div>
                <h3
                  className="text-[12px] font-semibold tracking-[1px] uppercase text-[#999] mb-4"
                  style={{ fontFamily: "var(--v-font-sans)" }}
                >
                  Ikuti Kami
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SOCIAL_LINKS.shopee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline text-[13px]"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/public/logo/shopee.svg" width="18" height="18" />
                    </svg>
                    Shopee
                  </a>
                  <a
                    href={SOCIAL_LINKS.tokopedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline text-[13px]"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/public/logo/tokopedia.svg" width="18" height="18" />
                    </svg>
                    Tokopedia
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline text-[13px]"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/public/logo/tiktok.svg" width="18" height="18" />
                    </svg>
                    TikTok
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v-btn-marketplace no-underline text-[13px]"
                  >
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="#C89B6B">
                      <image href="/public/logo/instagram.svg" width="20" height="20" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

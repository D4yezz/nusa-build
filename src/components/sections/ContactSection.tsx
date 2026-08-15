"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger pre-filled WhatsApp message
      const text = `Halo NusaBuild Studio,%0ANama: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ANo HP: ${encodeURIComponent(formData.phone)}%0ALayanan: ${encodeURIComponent(formData.service)}%0APesan: ${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="font-jakarta-sans text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="font-inter text-base text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Contact Info Cards & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Cards */}
            <div className="p-6 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-jakarta-sans text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-1">
                  {t("officeAddress")}
                </h4>
                <p className="font-inter text-xs text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
                  {t("officeAddressVal")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-1">
                    {t("emailUs")}
                  </h4>
                  <a href="mailto:info@nusabuild.co.id" className="font-inter text-xs font-bold text-orange-500 hover:underline">
                    info@nusabuild.co.id
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-1">
                    {t("phoneUs")}
                  </h4>
                  <a href="tel:+6281234567890" className="font-inter text-xs font-bold text-orange-500 hover:underline">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-0.5">
                  {t("hoursUs")}
                </h4>
                <p className="font-inter text-xs text-blue-900/70 dark:text-blue-200/70">
                  {t("hoursVal")}
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-blue-100 dark:border-blue-900/60 shadow-md h-64 bg-blue-950">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.926227653696!2d106.78018267597143!3d-6.273449393715263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a2386927d3%3A0xc39f88c3a167098e!2sPondok%20Indah%20Plaza%201!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-xl">
              <h3 className="font-jakarta-sans text-2xl font-bold text-blue-950 dark:text-white mb-6">
                {t("formTitle")}
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-jakarta-sans text-lg font-bold text-blue-950 dark:text-white mb-2">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="font-inter text-xs text-blue-900/80 dark:text-blue-200/80 mb-4">
                    {t("successMsg")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-orange-500 text-white font-jakarta-sans font-bold text-xs"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2">
                        {t("nameLabel")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("namePlaceholder")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-950 dark:text-white font-inter text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2">
                        {t("emailLabel")} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t("emailPlaceholder")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-950 dark:text-white font-inter text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2">
                        {t("phoneLabel")} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t("phonePlaceholder")}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-950 dark:text-white font-inter text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2">
                        {t("serviceLabel")}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-950 dark:text-white font-inter text-sm focus:outline-none focus:border-orange-500"
                      >
                        <option value="" disabled>
                          {t("selectService")}
                        </option>
                        <option value="Konstruksi Komersial">Konstruksi Komersial</option>
                        <option value="Jasa Arsitektur & Interior">Jasa Arsitektur & Interior</option>
                        <option value="Renovasi & Restrukturisasi">Renovasi & Restrukturisasi</option>
                        <option value="Manajemen Proyek">Manajemen Proyek</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2">
                      {t("messageLabel")} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t("messagePlaceholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-950 dark:text-white font-inter text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-jakarta-sans font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>{t("submitting")}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t("submitBtn")}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

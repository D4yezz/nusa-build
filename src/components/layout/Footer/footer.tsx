"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Building2, Mail, Phone, MapPin, Globe, Share2, MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");

  return (
    <footer className="bg-blue-950 text-white border-t border-blue-900/60 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-blue-900/60">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                <Building2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-jakarta-sans text-xl font-bold tracking-tight text-white">
                    NusaBuild
                  </span>
                  <span className="font-jakarta-sans text-xl font-extrabold text-orange-500">
                    Studio
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-blue-300/60 -mt-1">
                  Architecture & Construction
                </span>
              </div>
            </Link>

            <p className="font-inter text-xs text-blue-200/70 leading-relaxed mb-6 max-w-sm">
              {t("description")}
            </p>

            {/* Social / Link Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: "#" },
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: ExternalLink, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-xl bg-blue-900/60 border border-blue-800/60 flex items-center justify-center text-blue-200 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3">
            <h4 className="font-jakarta-sans text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3 font-inter text-xs font-semibold text-blue-200/70">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  {navT("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  {navT("services")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-orange-400 transition-colors">
                  {navT("projects")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-400 transition-colors">
                  {navT("careers")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">
                  {navT("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List (Col 8-9) */}
          <div className="lg:col-span-2">
            <h4 className="font-jakarta-sans text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-3 font-inter text-xs text-blue-200/70">
              <li>Konstruksi Komersial</li>
              <li>Arsitektur & Interior</li>
              <li>Renovasi Bangunan</li>
              <li>Manajemen Proyek</li>
              <li>Konsultasi Struktur</li>
            </ul>
          </div>

          {/* Contact Summary (Col 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="font-jakarta-sans text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3 font-inter text-xs text-blue-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Metro Pondok Indah No. 88, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>info@nusabuild.co.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-blue-200/60">
          <p>© {new Date().getFullYear()} NusaBuild Studio. {t("rights")}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

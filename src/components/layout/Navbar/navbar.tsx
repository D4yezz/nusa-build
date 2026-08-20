"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ThemeToggle from "@/components/common/toggle-theme";
import LanguageSwitcher from "@/components/common/language-switcher";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("projects"), href: "/portfolio" },
    { label: t("careers"), href: "/careers" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-dark-blue/90 backdrop-blur-md shadow-md py-3 border-b border-blue-100/50 dark:border-blue-900/40"
          : "bg-transparent py-8 px-2"
      }`}
    >
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                className="size-6"
              >
                <path d="M352 64C316.7 64 288 92.7 288 128L288 160L240 160L240 88C240 74.7 229.3 64 216 64C202.7 64 192 74.7 192 88L192 160L128 160L128 88C128 74.7 117.3 64 104 64C90.7 64 80 74.7 80 88L80 162C52.4 169.1 32 194.2 32 224L32 512C32 547.3 60.7 576 96 576L544 576C579.3 576 608 547.3 608 512L608 320C608 284.7 579.3 256 544 256L480 256L480 128C480 92.7 451.3 64 416 64L352 64zM416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160L400 160C408.8 160 416 167.2 416 176zM400 256C408.8 256 416 263.2 416 272L416 304C416 312.8 408.8 320 400 320L368 320C359.2 320 352 312.8 352 304L352 272C352 263.2 359.2 256 368 256L400 256zM416 368L416 400C416 408.8 408.8 416 400 416L368 416C359.2 416 352 408.8 352 400L352 368C352 359.2 359.2 352 368 352L400 352C408.8 352 416 359.2 416 368zM528 352C536.8 352 544 359.2 544 368L544 400C544 408.8 536.8 416 528 416L496 416C487.2 416 480 408.8 480 400L480 368C480 359.2 487.2 352 496 352L528 352zM288 368L288 400C288 408.8 280.8 416 272 416L240 416C231.2 416 224 408.8 224 400L224 368C224 359.2 231.2 352 240 352L272 352C280.8 352 288 359.2 288 368zM272 256C280.8 256 288 263.2 288 272L288 304C288 312.8 280.8 320 272 320L240 320C231.2 320 224 312.8 224 304L224 272C224 263.2 231.2 256 240 256L272 256zM160 368L160 400C160 408.8 152.8 416 144 416L112 416C103.2 416 96 408.8 96 400L96 368C96 359.2 103.2 352 112 352L144 352C152.8 352 160 359.2 160 368zM144 256C152.8 256 160 263.2 160 272L160 304C160 312.8 152.8 320 144 320L112 320C103.2 320 96 312.8 96 304L96 272C96 263.2 103.2 256 112 256L144 256z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-jakarta-sans text-xl font-bold tracking-tight text-blue-950 dark:text-white">
                  {t("brandName")}
                </span>
                <span className="font-jakarta-sans text-xl font-extrabold text-orange-500">
                  {t("brandSub")}
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-blue-900/75 dark:text-blue-100 -mt-1">
                Studio Architecture
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-blue-50/70 dark:bg-blue-950/40 p-1.5 rounded-full border border-blue-100/80 dark:border-blue-900/50 backdrop-blur-sm">
            {navLinks.map((link) => {
              // const isActive =
              //   pathname === link.href ||
              //   (link.href !== "/" && pathname === link.href.replace("/", ""));
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-blue-900/80 text-orange-500 dark:text-orange-400 shadow-sm"
                      : "text-blue-950/80 dark:text-blue-200/90 hover:text-orange-500 dark:hover:text-white hover:bg-white/50 dark:hover:bg-blue-900/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="https://wa.me/6281234567890?text=Halo%20NusaBuild%20Studio,%20saya%20ingin%20konsultasi%20proyek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-jakarta-sans font-bold text-xs tracking-wide uppercase shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t("consultation")}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-white border border-blue-100 dark:border-blue-900/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-dark-blue/90 backdrop-blur-md border-b border-blue-100 dark:border-blue-900/60 px-4 pt-3 mt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl font-jakarta-sans text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-orange-50 dark:bg-blue-900/60 text-orange-500 dark:text-orange-400 font-bold"
                        : "text-blue-950 dark:text-blue-200/90 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between pt-3 border-t border-blue-100 dark:border-blue-900/60 mt-2">
                <span className="text-xs font-semibold text-blue-900/60 dark:text-blue-300/60">
                  Bahasa / Language
                </span>
                <LanguageSwitcher />
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20NusaBuild%20Studio,%20saya%20ingin%20konsultasi%20proyek"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500 text-white font-jakarta-sans font-bold text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t("consultation")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

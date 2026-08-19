"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Facebook02Icon,
  InstagramIcon,
  Location03Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  const t = useTranslations("Footer");
  const c = useTranslations("Contact");
  const navT = useTranslations("Navbar");

  const links = [
    {
      title: navT("home"),
      href: "/",
    },
    {
      title: navT("about"),
      href: "/about",
    },
    {
      title: navT("services"),
      href: "/services",
    },
    {
      title: navT("projects"),
      href: "/portfolio",
    },
    {
      title: navT("careers"),
      href: "/careers",
    },
    {
      title: navT("blog"),
      href: "/blog",
    },
  ];

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden text-white border-t bg-blue-950 border-blue-900/60">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b md:grid-cols-2 lg:grid-cols-12 lg:gap-12 pb-14 border-blue-900/60">
          <div className="flex flex-col items-start lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-orange-500 shadow-lg rounded-xl shadow-orange-500/30">
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
                  <span className="text-xl font-bold tracking-tight text-white font-jakarta-sans">
                    NusaBuild
                  </span>
                  <span className="text-xl font-extrabold text-orange-500 font-jakarta-sans">
                    Studio
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-blue-300/60 -mt-1">
                  Architecture & Construction
                </span>
              </div>
            </Link>

            <p className="max-w-sm mb-6 text-xs leading-relaxed font-inter text-blue-200/70">
              {t("description")}
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Call02Icon, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: Facebook02Icon, href: "#" },
                { icon: NewTwitterIcon, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="flex items-center justify-center text-blue-200 transition-colors border w-9 h-9 rounded-xl bg-blue-900/60 border-blue-800/60 hover:text-orange-400 hover:border-orange-500/50"
                  >
                    <HugeiconsIcon icon={Icon} size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-jakarta-sans">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3 text-xs font-semibold font-inter text-blue-200/70">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-orange-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-jakarta-sans">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-3 text-xs font-inter text-blue-200/70">
              {[
                t("commercial"),
                t("architecture"),
                t("renovation"),
                t("management"),
                t("consult"),
              ].map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase font-jakarta-sans">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3 text-xs font-inter text-blue-200/70">
              <li className="flex items-start gap-2.5">
                <HugeiconsIcon
                  icon={Location03Icon}
                  className="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
                />
                <span>{c("officeAddressVal")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  className="w-4 h-4 text-orange-400 shrink-0"
                />
                <span>info@nusabuild.co.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <HugeiconsIcon
                  icon={Call02Icon}
                  className="w-4 h-4 text-orange-400 shrink-0"
                />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row font-inter text-blue-200/60">
          <p>
            © {new Date().getFullYear()} NusaBuild Studio. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

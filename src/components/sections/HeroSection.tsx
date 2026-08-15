"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Layers,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const partnerLogos = [
    { name: "FocalPoint", icon: Building2 },
    { name: "Command+R", icon: Layers },
    { name: "GlobalBank", icon: ShieldCheck },
    { name: "Alt+Shift", icon: Award },
    { name: "Luminous", icon: Sparkles },
  ];

  return (
    <section className="relative lg:h-screen h-[90vh] p-5 overflow-hidden">
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <Image
          src="/bg-home.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`w-full flex lg:flex-row flex-col absolute bottom-0 left-0 lg:items-end items-center ${isDekstop ? "bg-linear-to-b from-transparent to-black/50 dark:from-transparent dark:to-black/50" : "bg-blue-50/80 dark:bg-dark-blue/60"}`}
        >
          <div
            className={`${isDekstop && "hero-card"} relative bottom-0 left-0 z-10 lg:w-[60%] w-full h-fit`}
          >
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-start">
                <h1 className="font-jakarta-sans relative lg:text-6xl text-3xl z-20 font-extrabold text-blue-950 dark:text-white leading-[1.15] tracking-tight lg:px-4 px-4 lg:pt-8 pt-6 lg:pl-8 rounded-tr-3xl lg:max-w-[85%] text-balance lg:text-left text-center">
                  <span className="relative z-10">
                    {t("titlePrefix")}{" "}
                    <span className="text-orange-500">
                      {t("titleHighlight")}
                    </span>{" "}
                    {t("titleSuffix")}
                  </span>
                  {isDekstop && (
                    <div className="absolute inset-0 z-0 w-full h-full">
                      <div className="relative top-0 left-0 w-[98%] h-3/5 bg-white dark:bg-background rounded-tr-3xl convert-rounded"></div>
                      <div className="relative left-0 w-[108%] h-2/5 bg-white dark:bg-background rounded-tr-3xl convert-rounded"></div>
                    </div>
                  )}
                </h1>

                <p className="relative z-20 px-4 py-4 text-sm text-center lg:pl-8 lg:pb-10 text-balance lg:text-left font-inter lg:text-xl text-blue-900/90 dark:text-blue-200/80 lg:bg-white lg:dark:bg-background rounded-tr-3xl">
                  {t("subtitle")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 pb-4 w-fit h-fit lg:p-5 ">
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-3 w-fit lg:h-14 h-11 py-2 pl-6 pr-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-jakarta-sans font-bold lg:text-md text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5 group"
            >
              <span>{t("ctaPortfolio")}</span>
              <div className="lg:size-10 size-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight size={22} className="text-white" />
              </div>
            </Link>

            <a
              href="https://wa.me/6281234567890?text=Halo%20NusaBuild%20Studio,%20saya%20tertarik%20untuk%20berkonsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 lg:h-14 h-11 text-sm font-bold transition-all border rounded-full bg-blue-50 dark:bg-blue-950/80 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-950 dark:text-white font-jakarta-sans border-blue-200/70 dark:border-blue-900/60"
            >
              <span>{t("ctaWa")}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

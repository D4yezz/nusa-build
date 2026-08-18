"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Compass01Icon,
  DateTimeIcon,
  LinkCircle02Icon,
  MaterialAndTextureIcon,
  ShieldCheck,
} from "@hugeicons/core-free-icons";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("Features");
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const features = [
    {
      icon: ShieldCheck,
      title: t("item1Title"),
      desc: t("item1Desc"),
    },
    {
      icon: Compass01Icon,
      title: t("item2Title"),
      desc: t("item2Desc"),
    },
    {
      icon: DateTimeIcon,
      title: t("item3Title"),
      desc: t("item3Desc"),
    },
    {
      icon: MaterialAndTextureIcon,
      title: t("item4Title"),
      desc: t("item4Desc"),
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-16 lg:px-20 overflow-hidden">
      <div className="absolute w-[120vw] h-[47vh] lg:-top-26 -top-15 -left-10 -rotate-4 bg-white dark:bg-dark-blue z-10" />
      <div className="absolute w-[120vw] h-[50vh] lg:-bottom-80 -bottom-90 -left-10 -rotate-4 bg-white dark:bg-dark-blue z-10" />
      <Image
        src="https://images.unsplash.com/photo-1560419450-a53fe3b90211"
        alt="Features background image"
        fill
        className="object-cover z-0 opacity-90"
      />
      <div className="flex flex-col items-start mx-auto lg:gap-34 gap-12 z-20 relative">
        <div className="flex items-start justify-between w-full relative">
          <div className="flex flex-col justify-center w-full mx-auto lg:text-left text-center">
            <span className="inline-block px-3.5 py-1 w-fit rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
              {t("tag")}
            </span>
            <h2 className="font-jakarta-sans lg:text-6xl text-4xl lg:max-w-[40vw] font-extrabold lg:mt-0 mt-14 text-blue-950 dark:text-white tracking-tight lg:leading-18 mb-4">
              {t("title")}
            </h2>
            <p className="font-inter lg:text-xl text-md text-blue-900/80 dark:text-blue-200/80 lg:max-w-[30vw]">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/about"
            className="px-4 flex items-center justify-between gap-4 w-fit py-1.5 lg:static absolute top-0 right-0 rounded-full bg-background border-2 border-orange-500 text-orange-500 lg:text-lg text-sm font-medium uppercase hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-all duration-300"
          >
            <span className="whitespace-nowrap">{t("ctaAbout")}</span>
            <HugeiconsIcon icon={LinkCircle02Icon} strokeWidth={2} size={18} />
          </Link>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap justify-center gap-8">
          {features.map((item, index) => {
            const marginTop = index * -45;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ marginTop: `${isDekstop ? marginTop : 0}px` }}
                className={`p-8 relative rounded-3xl h-fit md:w-full backdrop-blur-xl bg-white/70 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl dark:hover:border-orange-500/40 transition-all duration-300 group flex flex-col items-start`}
              >
                <div className="flex items-center justify-center mb-6 text-white transition-transform bg-orange-500 shadow-lg w-14 h-14 rounded-2xl shadow-orange-500/25 group-hover:scale-110">
                  <HugeiconsIcon icon={item.icon} strokeWidth={1.5} size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold transition-colors font-jakarta-sans text-blue-950 dark:text-white group-hover:text-orange-500">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

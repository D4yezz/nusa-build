"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Clock, Gem } from "lucide-react";

export default function FeaturesSection() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: ShieldCheck,
      title: t("item1Title"),
      desc: t("item1Desc"),
    },
    {
      icon: Compass,
      title: t("item2Title"),
      desc: t("item2Desc"),
    },
    {
      icon: Clock,
      title: t("item3Title"),
      desc: t("item3Desc"),
    },
    {
      icon: Gem,
      title: t("item4Title"),
      desc: t("item4Desc"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl dark:hover:border-orange-500/40 transition-all duration-300 group flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform mb-6">
                  <IconComp className="w-7 h-7 stroke-[2]" />
                </div>
                <h3 className="font-jakarta-sans text-xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
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

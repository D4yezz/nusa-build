"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const t = useTranslations("Stats");

  const stats = [
    {
      value: "15+",
      label: t("years"),
      icon: Calendar,
      desc: "Track record sejak 2010",
    },
    {
      value: "250+",
      label: t("projects"),
      icon: CheckCircle2,
      desc: "Skala nasional & daerah",
    },
    {
      value: "100%",
      label: t("onTime"),
      icon: Clock,
      desc: "Manajemen tenggat ketat",
    },
    {
      value: "99%",
      label: t("satisfaction"),
      icon: ThumbsUp,
      desc: "Rekomendasi klien positif",
    },
  ];

  return (
    <section className="py-12 bg-blue-50/50 dark:bg-blue-950/30 border-y border-blue-100/60 dark:border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="font-jakarta-sans text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white">
                    {item.value}
                  </span>
                </div>
                <h4 className="font-jakarta-sans text-sm font-bold text-blue-950 dark:text-white mb-1">
                  {item.label}
                </h4>
                <p className="font-inter text-xs text-blue-900/60 dark:text-blue-200/60">
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

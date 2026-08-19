"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarAnalysisIcon,
  CalendarClockIcon,
  CheckmarkCircle03Icon,
  ThumbsUpIcon,
} from "@hugeicons/core-free-icons";

export default function StatsSection() {
  const t = useTranslations("Stats");

  const stats = [
    {
      value: "15+",
      label: t("years.text"),
      icon: CalendarAnalysisIcon,
      desc: t("years.desc"),
    },
    {
      value: "250+",
      label: t("projects.text"),
      icon: CheckmarkCircle03Icon,
      desc: t("projects.desc"),
    },
    {
      value: "100%",
      label: t("onTime.text"),
      icon: CalendarClockIcon,
      desc: t("onTime.desc"),
    },
    {
      value: "99%",
      label: t("satisfaction.text"),
      icon: ThumbsUpIcon,
      desc: t("satisfaction.desc"),
    },
  ];

  return (
    <section className="pb-12 pt-18 bg-background">
      <div className="px-4 mx-auto lg:px-22">
        <div className="flex flex-wrap lg:gap-0 gap-8 lg:justify-evenly justify-center">
          {stats.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lg:max-w-1/5 lg:w-1/6 md:w-1/3 w-[40%] p-6 border-t-[1.5px] border-blue-900 dark:border-blue-100 group flex flex-col items-center"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 text-blue-900 transition-transform rounded-xl bg-blue-500/10 dark:bg-blue-500/20 dark:text-blue-50 group-hover:scale-110">
                    <HugeiconsIcon icon={item.icon} size={20} />
                  </div>
                  <span className="text-3xl font-extrabold font-jakarta-sans sm:text-4xl text-blue-950 dark:text-white">
                    {item.value}
                  </span>
                </div>
                <h4 className="mb-1 text-sm font-bold text-center font-jakarta-sans text-blue-950 dark:text-white">
                  {item.label}
                </h4>
                <p className="text-xs text-center font-inter text-blue-900/60 dark:text-blue-200/60">
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

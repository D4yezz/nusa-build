"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiInnovationIcon,
  Award05Icon,
  City01Icon,
  GoalIcon,
  LaborIcon,
  MoneySecurityIcon,
  Route01Icon,
} from "@hugeicons/core-free-icons";

export default function AboutSection() {
  const t = useTranslations("About");

  const values = [
    { title: t("val1"), desc: t("val1Desc"), icon: MoneySecurityIcon },
    { title: t("val2"), desc: t("val2Desc"), icon: AiInnovationIcon },
    { title: t("val3"), desc: t("val3Desc"), icon: Route01Icon },
    { title: t("val4"), desc: t("val4Desc"), icon: LaborIcon },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden lg:py-28 bg-blue-50/40 dark:bg-blue-950/20"
    >
      <div className="px-5 mx-auto sm:px-18 lg:px-22">
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-6"
          >
            <div className="relative w-full overflow-hidden border border-blue-100 shadow-2xl rounded-3xl dark:border-blue-900/60 h-120">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Architect team discussing blueprints"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute p-6 text-white bg-orange-500 shadow-xl -bottom-6 right-4 lg:right-6 rounded-2xl max-w-55"
            >
              <HugeiconsIcon icon={Award05Icon} size={40} strokeWidth={1.5} />
              <span className="font-jakarta-sans text-3xl font-extrabold block mt-1.5">
                15+
              </span>
              <span className="block text-xs font-semibold tracking-wider uppercase font-inter opacity-90">
                Tahun Pengalaman Profesional
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start lg:col-span-6"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
              {t("tag")}
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight font-jakarta-sans sm:text-4xl text-blue-950 dark:text-white">
              {t("title")}
            </h2>

            <p className="mb-4 text-base font-semibold font-inter text-blue-950 dark:text-blue-100">
              {t("subtitle")}
            </p>

            <p className="mb-4 text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
              {t("description1")}
            </p>

            <p className="mb-8 text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
              {t("description2")}
            </p>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                t("quickHighlights.highlights1"),
                t("quickHighlights.highlights2"),
                t("quickHighlights.highlights3"),
                t("quickHighlights.highlights4"),
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5 text-orange-500 rounded-full bg-orange-500/10 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </div>
                  <span className="text-xs font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white border border-blue-100 shadow-sm rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-5 text-blue-600 rounded-2xl bg-blue-500/10 dark:text-blue-400">
              <HugeiconsIcon icon={City01Icon} size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold font-jakarta-sans text-blue-950 dark:text-white">
              {t("visionTitle")}
            </h3>
            <p className="text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
              {t("visionDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white border border-blue-100 shadow-sm rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-5 text-orange-500 rounded-2xl bg-orange-500/10">
              <HugeiconsIcon icon={GoalIcon} size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold font-jakarta-sans text-blue-950 dark:text-white">
              {t("missionTitle")}
            </h3>
            <p className="text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
              {t("missionDesc")}
            </p>
          </motion.div>
        </div>

        <div>
          <h3 className="mb-10 text-2xl font-bold text-center font-jakarta-sans text-blue-950 dark:text-white">
            {t("valuesTitle")}
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              return (
                <div
                  key={i}
                  className="p-6 bg-white border border-blue-100 shadow-sm rounded-2xl dark:bg-blue-950/60 dark:border-blue-900/60"
                >
                  <HugeiconsIcon
                    icon={v.icon}
                    size={30}
                    className="mb-3 text-orange-500"
                  />
                  <h4 className="mb-2 text-base font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {v.title}
                  </h4>
                  <p className="text-xs leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

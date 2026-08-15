"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Compass, ShieldCheck, Zap, Award, Check } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("About");

  const values = [
    { title: t("val1"), desc: t("val1Desc"), icon: ShieldCheck },
    { title: t("val2"), desc: t("val2Desc"), icon: Zap },
    { title: t("val3"), desc: t("val3Desc"), icon: Compass },
    { title: t("val4"), desc: t("val4Desc"), icon: Target },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-blue-50/40 dark:bg-blue-950/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-900/60">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Architect team discussing blueprints"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 p-6 rounded-2xl bg-orange-500 text-white shadow-xl max-w-[220px]"
            >
              <Award className="w-8 h-8 mb-2" />
              <span className="font-jakarta-sans text-3xl font-extrabold block">15+</span>
              <span className="font-inter text-xs font-semibold uppercase tracking-wider block opacity-90">
                Tahun Pengalaman Profesional
              </span>
            </motion.div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
              {t("tag")}
            </span>
            
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white tracking-tight mb-6 leading-tight">
              {t("title")}
            </h2>

            <p className="font-inter text-base text-blue-950 dark:text-blue-100 font-semibold mb-4">
              {t("subtitle")}
            </p>

            <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed mb-4">
              {t("description1")}
            </p>

            <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed mb-8">
              {t("description2")}
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                "ISO 9001:2015 Certified",
                "Tim Arsitek IAI & Insinyur PII",
                "Garansi Pemeliharaan Proyek",
                "Pengawasan K3LH Ketat",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-jakarta-sans text-xl font-bold text-blue-950 dark:text-white mb-3">
              {t("visionTitle")}
            </h3>
            <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
              {t("visionDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-jakarta-sans text-xl font-bold text-blue-950 dark:text-white mb-3">
              {t("missionTitle")}
            </h3>
            <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
              {t("missionDesc")}
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="font-jakarta-sans text-2xl font-bold text-blue-950 dark:text-white text-center mb-10">
            {t("valuesTitle")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 shadow-sm"
                >
                  <IconComp className="w-6 h-6 text-orange-500 mb-3" />
                  <h4 className="font-jakarta-sans text-base font-bold text-blue-950 dark:text-white mb-2">
                    {v.title}
                  </h4>
                  <p className="font-inter text-xs text-blue-900/70 dark:text-blue-200/70 leading-relaxed">
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

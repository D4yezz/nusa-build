"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { careersData, JobPosition } from "@/data/careers";
import { MapPin, Briefcase, Building, CheckCircle2, Mail, Phone, Copy, Check, X } from "lucide-react";

export default function CareersSection() {
  const t = useTranslations("Careers");
  const locale = useLocale() as "id" | "en";

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("hrd@nusabuild.co.id");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="careers" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {careersData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl dark:hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-blue-200 font-jakarta-sans text-xs font-semibold">
                    {job.type}
                  </span>
                </div>

                <h3 className="font-jakarta-sans text-2xl font-bold text-blue-950 dark:text-white mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center gap-4 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                    {job.type}
                  </span>
                </div>

                <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed mb-6">
                  {job.description[locale]}
                </p>

                <h4 className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3">
                  {t("requirements")}:
                </h4>
                <ul className="space-y-2 mb-8">
                  {job.requirements[locale].map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-xs text-blue-900/80 dark:text-blue-200/80">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 transition-all"
              >
                {t("applyNow")}
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#070f1e] border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-jakarta-sans text-2xl font-bold text-blue-950 dark:text-white mb-2">
                {t("modalTitle")}
              </h3>

              <p className="font-jakarta-sans text-sm font-bold text-orange-500 mb-4">
                Posisi: {selectedJob.title} ({selectedJob.location})
              </p>

              <p className="font-inter text-xs text-blue-900/80 dark:text-blue-200/80 leading-relaxed mb-6">
                {t("modalInstructions")}
              </p>

              {/* HRD Email Box */}
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 mb-6 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <span className="text-[10px] font-bold text-blue-900/50 dark:text-blue-300/50 uppercase block">
                      Email Resmi HRD
                    </span>
                    <span className="font-jakarta-sans text-sm font-bold text-blue-950 dark:text-white">
                      hrd@nusabuild.co.id
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-blue-900 text-blue-950 dark:text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:text-orange-500"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span>{t("copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t("copyEmail")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:hrd@nusabuild.co.id?subject=${encodeURIComponent(`Lamaran Pekerjaan - ${selectedJob.title}`)}&body=Halo%20Tim%20HRD%20NusaBuild%20Studio,%0A%0ASaya%20bermaksud%20mengirimkan%20lamaran%20pekerjaan%20untuk%20posisi%20${encodeURIComponent(selectedJob.title)}.`}
                  className="w-full py-3.5 rounded-2xl bg-blue-950 dark:bg-blue-900 text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>{t("applyViaEmail")}</span>
                </a>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%20HRD%20NusaBuild%20Studio,%20saya%20tertarik%20melamar%20posisi%20${encodeURIComponent(selectedJob.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("applyViaWa")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

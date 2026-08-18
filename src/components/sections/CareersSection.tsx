"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { careersData, JobPosition } from "@/data/careers";
import {
  MapPin,
  Briefcase,
  CheckCircle2,
  Mail,
  Phone,
  Copy,
  Check,
  X,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Briefcase02Icon, BriefcaseIcon } from "@hugeicons/core-free-icons";

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
    <section id="careers" className="relative py-20 lg:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight font-jakarta-sans sm:text-4xl text-blue-950 dark:text-white">
            {t("title")}
          </h2>
          <p className="font-inter text-balance text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          {careersData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 transition-all bg-white border border-blue-100 shadow-sm rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60 hover:shadow-xl dark:hover:border-orange-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-bold tracking-wider text-orange-500 uppercase rounded-full bg-orange-500/10 font-jakarta-sans">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-blue-200 font-jakarta-sans">
                    {job.type}
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-bold font-jakarta-sans text-blue-950 dark:text-white">
                  {job.title}
                </h3>

                <div className="flex items-center gap-4 mb-6 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Briefcase02Icon}
                      className="w-3.5 h-3.5 text-orange-500"
                    />
                    {job.type}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
                  {job.description[locale]}
                </p>

                <h4 className="mb-3 text-xs font-bold tracking-wider uppercase font-jakarta-sans text-blue-950 dark:text-white">
                  {t("requirements")}:
                </h4>
                <ul className="mb-8 space-y-2">
                  {job.requirements[locale].map((req, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-center gap-2 text-xs text-blue-900/80 dark:text-blue-200/80"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-orange-500 shrink-0 mt-0.5"
                      />
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

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl p-6 bg-white border border-blue-100 shadow-2xl dark:bg-dark-blue dark:border-blue-900/80 rounded-3xl sm:p-8"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute p-2 transition-colors rounded-full top-6 right-6 bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="mb-2 text-2xl font-bold font-jakarta-sans text-blue-950 dark:text-white">
                {t("modalTitle")}
              </h3>

              <p className="mb-4 text-sm font-bold text-orange-500 font-jakarta-sans">
                Posisi: {selectedJob.title} ({selectedJob.location})
              </p>

              <p className="mb-6 text-xs leading-relaxed font-inter text-blue-900/80 dark:text-blue-200/80">
                {t("modalInstructions")}
              </p>

              <div className="flex items-center justify-between gap-2 p-4 mb-6 border border-blue-100 rounded-2xl bg-blue-50/70 dark:bg-blue-950/60 dark:border-blue-900/60">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <span className="text-[10px] font-bold text-blue-900/50 dark:text-blue-300/50 uppercase block">
                      Email Resmi HRD
                    </span>
                    <span className="text-sm font-bold font-jakarta-sans text-blue-950 dark:text-white">
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

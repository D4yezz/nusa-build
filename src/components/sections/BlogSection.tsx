"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { blogsData, BlogPost } from "@/data/blogs";
import { Clock, Calendar, Share2, ArrowRight, X } from "lucide-react";

export default function BlogSection() {
  const t = useTranslations("Blog");
  const locale = useLocale() as "id" | "en";

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const shareOnWa = (title: string) => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, "_blank");
  };

  const shareOnLinkedIn = (title: string) => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
  };

  const shareOnTwitter = (title: string) => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-blue-50/40 dark:bg-blue-950/20 relative">
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

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-blue-950">
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-blue-950/90 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                    {post.category[locale]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      {post.readTime} {t("readTime")}
                    </span>
                  </div>

                  <h3 className="font-jakarta-sans text-lg font-bold text-blue-950 dark:text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title[locale]}
                  </h3>

                  <p className="font-inter text-xs text-blue-900/70 dark:text-blue-200/70 line-clamp-3 leading-relaxed mb-6">
                    {post.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="w-full py-3 rounded-2xl bg-blue-50 dark:bg-blue-900/40 hover:bg-orange-500 hover:text-white text-blue-950 dark:text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>{t("readArticle")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#070f1e] border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 bg-blue-950">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[locale]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author & Date */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-blue-100 dark:border-blue-900/60">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedArticle.authorAvatar}
                    alt={selectedArticle.author}
                    className="w-10 h-10 rounded-full object-cover border border-orange-500"
                  />
                  <div>
                    <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white block">
                      {selectedArticle.author}
                    </span>
                    <span className="font-inter text-[11px] text-blue-900/60 dark:text-blue-300/60 block">
                      {selectedArticle.authorRole}
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs font-semibold text-blue-900/60 dark:text-blue-300/60">
                  <div>{selectedArticle.date}</div>
                  <div className="text-orange-500">{selectedArticle.readTime} {t("readTime")}</div>
                </div>
              </div>

              <h2 className="font-jakarta-sans text-2xl sm:text-3xl font-extrabold text-blue-950 dark:text-white mb-6">
                {selectedArticle.title[locale]}
              </h2>

              <div className="prose dark:prose-invert max-w-none text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed space-y-4 mb-8 whitespace-pre-line font-inter">
                {selectedArticle.content[locale]}
              </div>

              {/* Social Share Buttons */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white uppercase tracking-wider">
                  {t("shareTitle")}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => shareOnWa(selectedArticle.title[locale])}
                    className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-jakarta-sans font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => shareOnLinkedIn(selectedArticle.title[locale])}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-jakarta-sans font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <span>LinkedIn</span>
                  </button>

                  <button
                    onClick={() => shareOnTwitter(selectedArticle.title[locale])}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-jakarta-sans font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <span>X (Twitter)</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full py-3.5 rounded-2xl bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                {t("closeModal")}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

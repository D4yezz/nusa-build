"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { blogsData } from "@/data/blogs";
import { Clock, Calendar, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const t = useTranslations("Blog");
  const locale = useLocale() as "id" | "en";

  return (
    <section
      id="blog"
      className="relative py-20 lg:py-28 bg-blue-50/40 dark:bg-blue-950/20"
    >
      <div className="px-5 mx-auto sm:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight font-jakarta-sans sm:text-4xl text-blue-950 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-base font-inter text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogsData.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-sm rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60 hover:shadow-xl group"
            >
              <div>
                <div className="relative overflow-hidden h-52 bg-blue-950">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title[locale]}
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-blue-950/90 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                    {post.category[locale]}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      {post.readTime} {t("readTime")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold transition-colors font-jakarta-sans text-blue-950 dark:text-white group-hover:text-orange-500 line-clamp-2">
                    {post.title[locale]}
                  </h3>

                  <p className="mb-6 text-xs leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70 line-clamp-3">
                    {post.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="px-6 pt-0 pb-6">
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="flex items-center justify-center w-full gap-2 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-2xl bg-blue-50 dark:bg-blue-900/40 hover:bg-orange-500 hover:text-white text-blue-950 dark:text-white font-jakarta-sans"
                >
                  <span>{t("readArticle")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin02Icon,
  NewTwitterIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

interface ArticleDetailProps {
  article: BlogPost;
  locale: "id" | "en";

  translations: {
    readTime: string;
    shareTitle: string;
  };
}

export default function ArticleDetail({
  article,
  locale,
  translations,
}: ArticleDetailProps) {
  const title = article.title[locale];

  const shareOnWhatsApp = () => {
    const url = window.location.href;

    const text = `${title} - ${url}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareOnTwitter = () => {
    const url = window.location.href;

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="lg:max-w-6xl py-28 mx-auto bg-background max-w-[90%]">
      <div className="relative mb-6 overflow-hidden h-96 rounded-2xl bg-blue-950">
        <Image
          fill
          src={article.image}
          alt={title}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-blue-100 dark:border-blue-900/60">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full shrink-0">
            <Image
              fill
              src={article.authorAvatar}
              alt={article.author}
              className="object-cover"
            />
          </div>

          <div>
            <span className="block font-bold text-md font-jakarta-sans text-blue-950 dark:text-white">
              {article.author}
            </span>

            <span className="block text-xs font-inter text-blue-900/60 dark:text-blue-300/60">
              {article.authorRole}
            </span>
          </div>
        </div>

        <div className="text-sm font-semibold text-right text-blue-900/60 dark:text-blue-300/60">
          <div>{article.date}</div>

          <div className="text-orange-500">
            {article.readTime} {translations.readTime}
          </div>
        </div>
      </div>

      <h1 className="mt-12 mb-8 text-6xl font-extrabold text-balance font-jakarta-sans text-blue-950 dark:text-white">
        {title}
      </h1>
      <div className="max-w-5xl mb-8 text-lg leading-relaxed whitespace-pre-line font-inter text-blue-900/80 dark:text-blue-200/80">
        <p className="mb-6 text-blue-900/80 dark:text-blue-200/80">
          {article.foreword[locale]}
        </p>
        <div className="space-y-6">
          {article.content[locale].map((section, index) => (
            <section key={index}>
              <h3 className="mb-2 font-semibold text-justify text-blue-950 dark:text-white">
                {index + 1}. {section.title}
              </h3>

              <p className="text-blue-900/80 dark:text-blue-200/80">
                {section.desc}
              </p>
            </section>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 mb-6 border border-blue-100 rounded-2xl bg-blue-50/50 dark:border-blue-900/60 dark:bg-blue-950/60">
        <span className="text-xs font-bold tracking-wider uppercase font-jakarta-sans text-blue-950 dark:text-white">
          {translations.shareTitle}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={shareOnWhatsApp}
            className="px-4 py-2 text-xs font-bold text-white transition-colors bg-green-500 shadow-sm rounded-xl font-jakarta-sans hover:bg-green-600"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={20} />
          </button>
          <button
            type="button"
            onClick={shareOnLinkedIn}
            className="px-4 py-2 text-xs font-bold text-white transition-colors bg-blue-600 shadow-sm rounded-xl font-jakarta-sans hover:bg-blue-700"
          >
            <HugeiconsIcon
              icon={Linkedin02Icon}
              fill="currentColor"
              strokeWidth={0}
              size={20}
            />
          </button>
          <button
            type="button"
            onClick={shareOnTwitter}
            className="px-4 py-2 text-xs font-bold text-white transition-colors shadow-sm rounded-xl bg-slate-900 font-jakarta-sans hover:bg-black dark:bg-black dark:hover:bg-slate-900"
          >
            <HugeiconsIcon icon={NewTwitterIcon} size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

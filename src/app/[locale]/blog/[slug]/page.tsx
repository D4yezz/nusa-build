import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { blogsData } from "@/data/blogs";
import ArticleDetail from "@/components/sections/ArticleDetail";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

interface ArticleDetailPageProps {
  params: Promise<{
    locale: "id" | "en";
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ["id", "en"].flatMap((locale) =>
    blogsData.map((article) => ({
      locale,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const article = blogsData.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: locale === "id" ? "Artikel Tidak Ditemukan" : "Article Not Found",
    };
  }

  const title = article.title[locale];
  const description = article.summary[locale];

  return {
    title: `${title} – NusaBuild`,
    description,

    openGraph: {
      title,
      description,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { locale, slug } = await params;

  const article = blogsData.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const t = await getTranslations("Blog");

  return (
    <article>
      <Navbar />
      <ArticleDetail
        article={article}
        locale={locale}
        translations={{
          readTime: t("readTime"),
          shareTitle: t("shareTitle"),
        }}
      />
      <Footer />
      <FloatingWhatsApp />
    </article>
  );
}

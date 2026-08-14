"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "id" | "en") => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("id")}
        className={locale === "id" ? "font-bold" : ""}
      >
        ID
      </button>

      <span>/</span>

      <button
        onClick={() => changeLanguage("en")}
        className={locale === "en" ? "font-bold" : ""}
      >
        EN
      </button>
    </div>
  );
}

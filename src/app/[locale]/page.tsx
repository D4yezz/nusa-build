import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggle from "@/components/toggle-theme";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <main className="min-h-screen p-8">
      <h1>{t("greeting")}</h1>

      <p>{t("description")}</p>
      <ThemeToggle />
      <LanguageSwitcher />
    </main>
  );
}

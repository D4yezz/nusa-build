import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nusa Build Studio",
  description: "Nusa Build Studio",
};

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-inter",
        inter.variable,
        instrument_sans.variable,
        plus_jakarta_sans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <TooltipProvider>{props.children}</TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

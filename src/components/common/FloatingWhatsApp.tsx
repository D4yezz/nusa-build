"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const t = useTranslations("WhatsApp");
  const [isOpen, setIsOpen] = useState(false);

  const directWaUrl =
    "https://wa.me/6281234567890?text=Halo%20NusaBuild%20Studio,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20pembangunan/arsitektur.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 rounded-3xl bg-white dark:bg-dark-blue border border-blue-100 dark:border-blue-900/80 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-jakarta-sans text-sm font-bold block">
                    {t("heading")}
                  </h4>
                  <span className="font-inter text-[11px] text-white/80 block">
                    {t("onlineText")}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Bubble Simulation */}
            <div className="p-5 bg-blue-50/50 dark:bg-blue-950/40 space-y-3">
              <div className="max-w-[85%] p-3.5 rounded-2xl bg-white dark:bg-blue-900/80 border border-blue-100 dark:border-blue-800 text-xs font-inter text-blue-950 dark:text-white shadow-sm">
                <p className="font-semibold mb-1 flex items-center gap-1 text-orange-500">
                  <Sparkles className="w-3.5 h-3.5" /> NusaBuild Consultant
                </p>
                <p>{t("greeting")}</p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-white dark:bg-dark-blue border-t border-blue-100 dark:border-blue-900/60">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 px-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{t("chatBtn")}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Pulse Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-orange-500 text-white shadow-xl hover:shadow-orange-500/40 hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Chat WhatsApp NusaBuild Studio"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40 -z-10" />

        {/* Badge Indicator */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-[#070f1e] flex items-center justify-center text-[10px] font-extrabold">
          1
        </span>

        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}

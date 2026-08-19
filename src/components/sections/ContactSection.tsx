"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import {
  Call02Icon,
  Location03Icon,
  Mail01Icon,
  SentIcon,
  Time02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

export default function ContactSection() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const text = `Halo NusaBuild Studio,%0ANama: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ANo HP: ${encodeURIComponent(formData.phone)}%0ALayanan: ${encodeURIComponent(formData.service)}%0APesan: ${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    }, 800);
  };

  const contact = [
    {
      icon: Location03Icon,
      title: t("officeAddress"),
      description: t("officeAddressVal"),
    },
    {
      icon: Mail01Icon,
      title: t("emailUs"),
      description: "info@nusabuild.co.id",
      link: "mailto:info@nusabuild.co.id",
    },
    {
      icon: Call02Icon,
      title: t("phoneUs"),
      description: "+62 812-3456-7890",
      link: "tel:+6281234567890",
    },
    {
      icon: Time02Icon,
      title: t("hoursUs"),
      description: t("hoursVal"),
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center w-full min-h-screen gap-16 py-20 lg:py-28 h-fit"
    >
      <div className="mx-auto flex lg:flex-row flex-col w-full lg:px-22 md:px-10 px-4 gap-8 lg:h-[65vh] h-fit">
        <div className="flex flex-col justify-between w-full lg:w-1/2 lg:h-full h-fit lg:gap-0 gap-14">
          <div className="flex flex-col gap-4">
            <span className="inline-block w-fit px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500  text-xs font-bold tracking-wider uppercase mb-3">
              {t("tag")}
            </span>
            <h2 className="text-6xl font-bold tracking-tight font-inter text-blue-950 dark:text-white text-balance">
              {t("title")}
            </h2>
            <p className="text-lg lg:pr-0 pr-4 font-inter lg:text-balance text-blue-900/80 dark:text-blue-200/80">
              {t("subtitle")}
            </p>
          </div>

          <ul className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-8 gap-2">
            {contact.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="p-3 text-blue-900 bg-blue-100 rounded-full dark:bg-blue-900/70 dark:text-blue-100">
                  <HugeiconsIcon icon={item.icon} size={22} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="hover:underline">
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-sm font-normal">{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full md:px-8 px-4 py-8 bg-background md:shadow-lg md:rounded-xl md:border-none border-y-2 md:dark:bg-blue-950/40 lg:w-1/2 lg:h-full h-fit justify-evenly">
          <h3 className="mb-10 text-3xl font-semibold text-blue-950 dark:text-white">
            {t("formTitle")}
          </h3>

          {submitted ? (
            <div className="p-6 text-center border rounded-2xl bg-green-500/10 border-green-500/30">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <h4 className="mb-2 text-lg font-bold  text-blue-950 dark:text-white">
                {t("titleSuccess")}
              </h4>
              <p className="mb-4 text-xs font-inter text-blue-900/80 dark:text-blue-200/80">
                {t("successMsg")}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-orange-500 text-white  font-bold text-xs"
              >
                {t("btnSuccess")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-xs font-medium tracking-wider font-instrument text-blue-950 dark:text-white">
                    {t("nameLabel")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("namePlaceholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm border border-blue-100 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 dark:border-blue-800 text-blue-950 dark:text-white font-inter focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-medium tracking-wider font-instrument text-blue-950 dark:text-white">
                    {t("emailLabel")} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm border border-blue-100 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 dark:border-blue-800 text-blue-950 dark:text-white font-inter focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-xs font-medium tracking-wider font-instrument text-blue-950 dark:text-white">
                    {t("phoneLabel")} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t("phonePlaceholder")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm border border-blue-100 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 dark:border-blue-800 text-blue-950 dark:text-white font-inter focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-medium tracking-wider font-instrument text-blue-950 dark:text-white">
                    {t("serviceLabel")}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm border border-blue-100 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 dark:border-blue-800 text-blue-950 dark:text-white font-inter focus:outline-none focus:border-orange-500"
                  >
                    <option value="" disabled>
                      {t("selectService")}
                    </option>
                    <option value="Konstruksi Komersial">
                      Konstruksi Komersial
                    </option>
                    <option value="Jasa Arsitektur & Interior">
                      Jasa Arsitektur & Interior
                    </option>
                    <option value="Renovasi & Restrukturisasi">
                      Renovasi & Restrukturisasi
                    </option>
                    <option value="Manajemen Proyek">Manajemen Proyek</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-medium tracking-wider font-instrument text-blue-950 dark:text-white">
                  {t("messageLabel")} *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 resize-none text-sm border border-blue-100 rounded-2xl bg-blue-50/50 dark:bg-blue-900/40 dark:border-blue-800 text-blue-950 dark:text-white font-inter focus:outline-none focus:border-orange-500"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-10 text-sm font-semibold tracking-wider text-white transition-all bg-orange-500 rounded-full hover:bg-orange-600 font-instrument"
              >
                {loading ? (
                  <span>{t("submitting")}</span>
                ) : (
                  <>
                    <HugeiconsIcon icon={SentIcon} strokeWidth={2} size={24} />
                    <span>{t("submitBtn")}</span>
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
      <div className="lg:w-full w-[90%] lg:max-w-5xl mx-auto overflow-hidden border border-blue-100 shadow-md rounded-3xl dark:border-blue-900/60 h-94 bg-blue-950">
        <iframe
          title="Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.157277056393!2d111.4425351312082!3d-7.40540037791431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e7c493462d87%3A0x2aa1000e39e83649!2sAlun-Alun%20Kabupaten%20Ngawi!5e0!3m2!1sen!2sid!4v1787114310705!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

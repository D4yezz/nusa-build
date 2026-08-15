"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
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
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={
            <button
              className={
                "bg-blue-50/70 dark:bg-blue-950/40 backdrop-blur-sm rounded-full py-1.5 pl-1.5 pr-3 flex items-center justify-center gap-2 w-18"
              }
            />
          }
        >
          <Avatar>
            <AvatarImage
              src={locale === "id" ? "/language/id.svg" : "/language/en.webp"}
            />
            <AvatarFallback>{locale === "id" ? "ID" : "EN"}</AvatarFallback>
          </Avatar>
          <ChevronDown
            size={20}
            className={`${open && "rotate-180"} duration-300 ease-in-out`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={
            "space-y-1 bg-blue-50/70 dark:bg-blue-950/40 backdrop-blur-sm w-18"
          }
        >
          <DropdownMenuItem
            onClick={() => changeLanguage("id")}
            className={`${locale === "id" && "bg-blue-50 dark:bg-blue-50/20 py-1.5"} flex items-center justify-center gap-2`}
          >
            <Avatar size="sm">
              <AvatarImage src={"/language/id.svg"} />
              <AvatarFallback>{locale === "id" ? "ID" : "EN"}</AvatarFallback>
            </Avatar>
            ID
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLanguage("en")}
            className={`${locale === "en" && "bg-blue-50 dark:bg-blue-50/20 py-1.5"} flex items-center justify-center gap-2`}
          >
            <Avatar size="sm">
              <AvatarImage src={"/language/en.webp"} />
              <AvatarFallback>{locale === "id" ? "ID" : "EN"}</AvatarFallback>
            </Avatar>
            EN
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

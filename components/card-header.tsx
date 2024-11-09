import React from "react";
// Utils
import { useTranslations } from "next-intl";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { FaShare, FaDownload } from "react-icons/fa6";

const placeholder_username = "John Doe";
const placeholder_days = 2;

export default function CardHeader() {
  const t = useTranslations("CardHeader");

  // TODO: Dynamically calculate days ago.

  return (
    <div
      id="fulkort-header-container"
      className="
        flex
        flex-row
        justify-between
        items-center
        w-full
        pb-4
      "
    >
      <small className="text-muted-foreground">
        {t("createdBy")}{" "}
        <span className="font-semibold text-foreground">
          {placeholder_username}
        </span>{" "}
        {t("daysAgo", { days: placeholder_days })}
      </small>
      <div
        id="fulkort-actions-container"
        className="
          flex
          flex-row
          justify-center
          items-center
          gap-2
          
        "
      >
        <Button variant="outline">
          <FaShare className="w-[1.2rem] h-[1.2rem]" />
          {t("share")}
        </Button>
        <Button variant="outline">
          <FaDownload className="w-[1.2rem] h-[1.2rem]" />
          {t("download")}
        </Button>
      </div>
    </div>
  );
}

import React from "react";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { FaShare, FaDownload } from "react-icons/fa6";

const placeholder_username = "John Doe";
const placeholder_date = "2024-01-01";

export default function CardHeader() {
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
        Created by{" "}
        <span className="font-semibold text-foreground">
          {placeholder_username}
        </span>{" "}
        on {placeholder_date}
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
          Dela
        </Button>
        <Button variant="outline">
          <FaDownload className="w-[1.2rem] h-[1.2rem]" />
          Ladda ner
        </Button>
      </div>
    </div>
  );
}

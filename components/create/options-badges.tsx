"use client";

import React, { useState } from "react";
// Components
import { Badge } from "@/components/ui/badge";

// TODO: Use i18n for options

const options = {
  city: {
    stockholm: "Stockholm",
    gothenburg: "Gothenburg",
    malmo: "Malmo",
  },
};

export default function OptionsBadges() {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  function handleSelectOption(option: string) {
    setSelectedOption((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }

  return (
    <>
      <Badge
        variant={
          selectedOption.includes(options.city.stockholm)
            ? "default"
            : "outline"
        }
        onClick={() => {
          handleSelectOption(options.city.stockholm);
        }}
        className="cursor-pointer rounded-full"
      >
        <span>Stockholm</span>
      </Badge>
      <Badge
        variant={
          selectedOption.includes(options.city.gothenburg)
            ? "default"
            : "outline"
        }
        onClick={() => {
          handleSelectOption(options.city.gothenburg);
        }}
        className="cursor-pointer rounded-full"
      >
        Gothenburg
      </Badge>
      <Badge
        variant={
          selectedOption.includes(options.city.malmo) ? "default" : "outline"
        }
        onClick={() => {
          handleSelectOption(options.city.malmo);
        }}
        className="cursor-pointer rounded-full"
      >
        <span>Malmo</span>
      </Badge>
    </>
  );
}

"use client";

// Hooks
import React, { useState } from "react";
// Utils
import { useTranslations } from "next-intl";
import Image from "next/image";
import clsx from "clsx";
// Components
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const placeholder_prompt =
  "A Christmas scene. In Stockholm, Sweden. Gnomes, tree, lights. Digital painting, rule of thirds, cozy, odd, bad art, poor quality, weird.";

export default function CreateImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("CreateImage");

  async function handleGenerateImage() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/data/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: placeholder_prompt }),
      });

      const data = await response.json();

      if (!data) {
        console.error("No data received");
        throw new Error("No data received");
      }

      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to generate image", { cause: error });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      id="create-image-container"
      className="
        flex
        flex-col
        items-center
        justify-center
        max-w-[720px]
        w-full
        gap-4
        p-4
        lg:px-0
      "
    >
      {imageUrl && (
        <div
          id="create-image-render-container"
          className="
            w-full
            border
            bg-white
            rounded-lg
            shadow-md
            p-2
          "
        >
          <AspectRatio
            ratio={1.5 / 1}
            style={{ position: "relative" }}
            className="rounded-md overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt="Placeholder image"
              style={{ objectFit: "cover" }}
              fill
            />
          </AspectRatio>
        </div>
      )}
      <Button
        onClick={handleGenerateImage}
        disabled={isLoading}
        className={clsx(
          "w-full font-semibold bg-gradient-to-r from-red-500 to-blue-500",
          "hover:from-red-600 hover:to-blue-600",
          {
            "animate-pulse": isLoading,
          }
        )}
      >
        {isLoading ? t("generating") : t("generateImage")}
      </Button>
    </div>
  );
}

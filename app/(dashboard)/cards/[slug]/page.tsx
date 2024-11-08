import React from "react";
// Utils
import Image from "next/image";
// Components
import { AspectRatio } from "@/components/ui/aspect-ratio";
// Custom components
// import CardHeader from "@/components/card-header";
// import CommentsFeed from "@/components/comments-feed";

export default function CardSlugPage() {
  return (
    <div
      id="card-slug-page-container"
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
      <div
        id="fulkort-container"
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
            src="/images/placeholder.jpeg"
            alt="Placeholder image"
            style={{ objectFit: "cover" }}
            fill
          />
        </AspectRatio>
      </div>
      {/* <CardHeader />
      <CommentsFeed /> */}
    </div>
  );
}

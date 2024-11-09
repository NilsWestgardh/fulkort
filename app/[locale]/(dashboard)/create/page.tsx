import React from "react";
// Custom components
import CreateImage from "@/components/create/create-image";

export default function CreatePage() {
  return (
    <div
      id="create-card-page-container"
      className="
        flex
        flex-col
        items-center
        justify-center
        w-full
      "
    >
      <CreateImage />
    </div>
  );
}

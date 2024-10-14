import React from "react";

import { Library as BrandIcon } from "@/constant/icons";

const BrandLogo = () => {
  return (
    <section className="flex items-center justify-center my-4 p-2">
      <BrandIcon />

      <h1 className="ml-2 text-2xl font-[600]">
        <span className="text-popover">Dream</span>
        <span className="text-ss-primary">Music</span>
      </h1>
    </section>
  );
};

export default BrandLogo;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/linkpreview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[2] flex-col px-4">
      {
      <><p className="text-neutral-500 dark:text-neutral-400 mt-0 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          I also created{" "}
          <LinkPreview url="https://brandifyai.adityajhaa.co/" className="font-bold">
            AI Logo Generator
          </LinkPreview>{" "}
          and{" "} 
          <LinkPreview url="https://tradezen-frontend.vercel.app/homes" className="font-bold">
            TradeZen
            </LinkPreview>{" "}
        </p></> 
      }
    </div>
  );
}

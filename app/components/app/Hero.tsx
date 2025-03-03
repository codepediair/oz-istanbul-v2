"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <AuroraBackground className="bg-hero bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        ÖZ Istanbul
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Have a Deram Life is dose desireable
        </div>
        <div className="flex flex-row gap-4">
          <Button>
            Contact with us
          </Button>
          <Button variant="secondary">
            Our Services
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
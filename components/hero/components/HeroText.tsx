import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useTranslation } from "next-i18next";
import { heroData } from "../../../assets/data";

function HeroText() {
  const { t } = useTranslation("hero");
  // Placeholder text data, as if from API

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="absolute text-left flex flex-col left-1/4 top-1/4"
      initial="hidden"
      // animate="visible"
      animate="visible"
      variants={container}
    >
      <div className="m-auto max-w-[960px] p-[40px] whitespace-nowrap">
        <AnimatedText text={t("h1-hero")} type="heading1" />
        <AnimatedText text={heroData.name} type="heading2" />
        <AnimatedText text={t("h3-hero")} type="paragraph" />
        <AnimatedText text={t("p-1-hero")} type="paragraph" />
      </div>
    </motion.div>
  );
}

export default HeroText;

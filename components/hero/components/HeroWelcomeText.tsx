import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { heroData } from "../../../assets/data";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function HeroWelcomeText() {
  const { t } = useTranslation("hero");

  return (
    <>
      <motion.h1 variants={item} className="text-xl font-bold">
        {t("h1-hero")}
      </motion.h1>
      <motion.h2 variants={item} className="text-6xl">
        {heroData.name}.
      </motion.h2>
      <motion.h3 variants={item} className="text-6xl">
        {t("h3-hero")}
      </motion.h3>
      <motion.p variants={item} className="text-2xl font-medium max-w-[600px]">
        {t("p-1-hero")}
      </motion.p>
    </>
  );
}

export default HeroWelcomeText;

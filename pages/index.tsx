// Main page

import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AnimatePresence, motion, useScroll } from "framer-motion";

import Projects from "../components/projects";
import Contact from "../components/contact";
import Impressum from "../components/impressum";
import Hero from "../components/hero";
import NavBar from "../components/navbar/index";
import Tech from "../components/tech";

//todo: distance between sections, text formatting and text

// change texts: self taught german?, best möglichsten bewertungen?

const Home: NextPage = (props) => {
  const [scrollTarget, setScrollTarget] = useState<string>("hero");
  const [scrollH, setScrollH] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest >= 3600) {
        setScrollH(true);
      } else {
        setScrollH(false);
      }
    });
  }, []);

  const handleSectionChange = (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => {
    if (entry.isIntersecting) {
      setScrollTarget(entry.target.id);
    }
  };

  //solution= different delays?

  return (
    <>
      <NavBar scrollTarget={scrollTarget} />
      <main className="flex flex-col items-center justify-start w-full text-center">
        <motion.div
          className={`fixed w-screen ${
            scrollH === true ? "rotate-180" : ""
          } h-screen gap-2 bg-center bg-cover bg-hero`}
        />
        <Hero handleSectionChange={handleSectionChange} />
        <AnimatePresence>
          {(scrollTarget === "projects" || scrollTarget === "tech") && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className={`bg-fadeIn w-screen h-screen fixed top-0 left-0 z-1`}
            ></motion.div>
          )}
        </AnimatePresence>
        <Tech handleSectionChange={handleSectionChange} />
        <Projects handleSectionChange={handleSectionChange} />
        <Contact handleSectionChange={handleSectionChange} />
        <Impressum handleSectionChange={handleSectionChange} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "tech",
      "navbar",
      "projects",
      "contact",
      "impressum",
    ])),
  },
});

export default Home;

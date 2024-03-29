// Projects section

import React, { useState } from "react";

import { SectionChangeI } from "../../types/interfaces";

import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ProjectsInfo from "./components/ProjectsInfo";
import ProjectsTechStack from "./components/ProjectsTechStack";
import ProjectsLinks from "./components/ProjectsLinks";
import ProjectsTitle from "./components/ProjectsTitle";
import { projectContent } from "../../assets/data";
import ProjectModal from "./components/ProjectModal";
import ProjectCarousel from "./components/ProjectCarousel";
import SectionTitle from "../elements/SectionTitle";

function Projects({ handleSectionChange }: SectionChangeI) {
  const { t } = useTranslation("projects");
  const [modal, setModal] = useState<string[]>([]);

  return (
    <InView threshold={0.1} onChange={handleSectionChange}>
      {({ ref }) => (
        <div
          ref={ref}
          id="projects"
          className="relative flex flex-col items-center justify-start w-full max-w-6xl gap-20 pt-48 text-center"
        >
          <ProjectModal modal={modal} setModal={setModal} />
          <SectionTitle title={t("title-projects")} />
          {t("projects", { joinArrays: "+" })
            .split("+")
            .map((text, index) => {
              return (
                <article className="w-full h-full" key={index}>
                  <ProjectsTitle
                    livelink={projectContent[index].livelink}
                    title={projectContent[index].title}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex flex-col h-full w-full ${
                      index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-4 bg-container text-containerOn shadow-lg rounded-xl border-solid p-2 lg:p-8 z-10`}
                  >
                    <div className="relative flex items-center justify-center w-full max-h-full overflow-hidden lg:w-1/2 h-96 lg:h-auto grow">
                      <ProjectCarousel
                        setModal={setModal}
                        data={projectContent[index].preview}
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-8 lg:w-1/2 ">
                      <ProjectsInfo text={text} />
                      <ProjectsTechStack
                        techstack={projectContent[index].techstack}
                      />
                      <ProjectsLinks
                        livelink={projectContent[index].livelink}
                        github={projectContent[index].github}
                      />
                    </div>
                  </motion.div>
                </article>
              );
            })}
        </div>
      )}
    </InView>
  );
}

export default Projects;

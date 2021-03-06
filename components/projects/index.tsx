import { useTranslation } from "next-i18next";
import React from "react";
import ProjectsInfo from "./components/ProjectsInfo";
import ProjectsPreview from "./components/ProjectsPreview";
import ProjectsTechStack from "./components/ProjectsTechStack";
import { projectContent } from "../../assets/data";
import ProjectsLinks from "./components/ProjectsLinks";
import ProjectsTitle from "./components/ProjectsTitle";
import ProjectsSectionTitle from "./components/ProjectsSectionTitle";
import { InView } from "react-intersection-observer";
import { SectionChangeI } from "../../types/interfaces";
import { motion } from "framer-motion";

function Projects({ handleSectionChange }: SectionChangeI) {
  const { t } = useTranslation("projects");
  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <div
          ref={ref}
          id="projects"
          className="gap-20 w-full flex flex-col items-center justify-start pt-48 text-center"
        >
          <ProjectsSectionTitle title={t("title-projects")} />
          {t("projects", { joinArrays: "+" })
            .split("+")
            .map((text, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-4 bg-slate-300/95 shadow-lg`}
                  key={index}
                >
                  <ProjectsPreview preview={projectContent[index].preview} />
                  <div className="flex flex-col justify-between lg:w-1/2 gap-8 ">
                    <ProjectsTitle
                      livelink={projectContent[index].livelink}
                      title={projectContent[index].title}
                    />
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
              );
            })}
        </div>
      )}
    </InView>
  );
}

export default Projects;

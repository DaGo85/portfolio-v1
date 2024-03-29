import { ProjectsTitleI } from "../../../types/interfaces";

function ProjectsTitle({ title, livelink }: ProjectsTitleI) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={livelink} className="">
      <h3 className="mb-4 text-4xl font-semibold hover:cursor-pointer text-textBgOn">
        {title}
      </h3>
    </a>
  );
}

export default ProjectsTitle;

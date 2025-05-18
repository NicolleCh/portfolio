import { NavLink } from "react-router";

import { Project, ProjectInfo, BtnGroup } from './styles'


export default function ProjectComponent({
  appType,
  appName,
  appDescription,
  liveWebsiteLink,
  githubCodeLink,
  previewImage,
}) {

  return (
    <Project>
      <ProjectInfo>
        <span>{appType}</span>
        <h3>{appName}</h3>
        <p>{appDescription}</p>

        <BtnGroup>
          <NavLink
            to={liveWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </NavLink>

          <NavLink
            to={githubCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Code
          </NavLink>
        </BtnGroup>
      </ProjectInfo>

      <img
        src={previewImage}
        width={600}
        alt={`Preview do projeto ${appName}`}
      />
    </Project>
  )
}

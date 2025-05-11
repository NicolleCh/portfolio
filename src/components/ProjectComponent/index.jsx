import { NavLink } from "react-router";

import { Project, ProjectInfo, ProjectPreview, BtnGroup } from './styles'


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
          <NavLink to={liveWebsiteLink}>Live Website</NavLink>
          <NavLink to={githubCodeLink}>GitHub Code</NavLink>
        </BtnGroup>
      </ProjectInfo>

      <ProjectPreview>
        <img src={previewImage} width={600} alt="" />
      </ProjectPreview>
    </Project>
  )
}

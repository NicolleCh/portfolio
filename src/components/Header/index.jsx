import { Container, Logo, Navigation, SocialIcons } from "./styles"

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LiaDev } from 'react-icons/lia'

import { NavLink } from "react-router";

export default function Header() {
  return (
    <Container>
      <Logo>

        <LiaDev size={48} />
        <h2>Nicolle</h2>

      </Logo>

      <Navigation>
        <ul>
          <li><NavLink to={'/'}>\ Home</NavLink></li>
          <li><NavLink to={'/about'}>\ Sobre</NavLink></li>
          <li><NavLink to={'/projects'}>\ Projetos</NavLink></li>
          <li><NavLink to={'/contact'}>\ Contato</NavLink></li>
        </ul>
      </Navigation>

      <SocialIcons>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nicollascrg/">
          <FaLinkedin className="icons" title="Icone do linkedin" size={48} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/NicolleCh">
          <FaGithub className="icons" title="Icone do github" size={48} />
        </a>
      </SocialIcons>
    </Container>
  )
}

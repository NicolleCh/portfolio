import { Container, Logo, NavList, SocialIcons } from './styles';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { LiaDev } from 'react-icons/lia';
import { FaBars } from 'react-icons/fa';

import { useState} from 'react';
import { NavLink } from 'react-router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView();
  };

  return (
    <Container>
      <Logo>
        <div>
          <LiaDev size={48} />
          <h2>Nicolle</h2>
        </div>
        <FaBars className="menuBtn" onClick={handleMenuOpen} size={40} />
      </Logo>

      <nav>
        <NavList $isMenuOpen={isMenuOpen}>
          <li>
            <NavLink
              href="#home"
              className='nav-link home'
              onClick={() => { handleScroll('home'); }}
            >
              \ Home
            </NavLink>
          </li>

          <li>
            <NavLink
              href="#about"
              className='nav-link'
              onClick={() => { handleScroll('about'); }}
            >
              \ Sobre
            </NavLink>
          </li>

          <li>
            <NavLink
              href="#projects"
              className='nav-link'
              onClick={() => { handleScroll('projects'); }}
            >
              \ Projetos
            </NavLink>
          </li>

          <li>
            <NavLink
              href="#contact"
              className='nav-link'
              onClick={() => { handleScroll('contact'); }}
            >
              \ Contato
            </NavLink>
          </li>
        </NavList>
      </nav>

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
  );
}

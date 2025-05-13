// import { Container, Logo, Navigation, SocialIcons } from "./styles"

// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { LiaDev } from 'react-icons/lia'

// import { NavLink } from "react-router";

// export default function Header() {

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     element ? element.scrollIntoView({ behavior: 'smooth' }) : null
//   }

//   return (
//     <Container>
//       <Logo>
//         <LiaDev size={48} />
//         <h2>Nicolle</h2>
//       </Logo>

//       <Navigation>
//         <ul>
//           <li><NavLink to='home'  onClick={() => handleScroll('home')}>\ Home</NavLink></li>
//           <li><NavLink to='about'  onClick={() => handleScroll('about')}>\ Sobre</NavLink></li>
//           <li><NavLink to='projects'  onClick={() => handleScroll('projects')}>\ Projetos</NavLink></li>
//           <li><NavLink to='contact'  onClick={() => handleScroll('contact')}>\ Contato</NavLink></li>
//         </ul>
//       </Navigation>

//       <SocialIcons>
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.linkedin.com/in/nicollascrg/">
//           <FaLinkedin className="icons" title="Icone do linkedin" size={48} />
//         </a>

//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://github.com/NicolleCh">
//           <FaGithub className="icons" title="Icone do github" size={48} />
//         </a>
//       </SocialIcons>
//     </Container>
//   )
// }


import { Container, Logo, Navigation, SocialIcons } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LiaDev } from 'react-icons/lia';
import { NavLink } from "react-router-dom"; // 👈 Corrija a importação (deve ser "react-router-dom")
import { useState, useEffect } from 'react';
export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <Container>
      <Logo>
        <LiaDev size={48} />
        <h2>Nicolle</h2>
      </Logo>

      <Navigation>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleScroll('home');
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleScroll('about');
              }}
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleScroll('projects');
              }}
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleScroll('contact');
              }}
            >
              Contato
            </a>
          </li>
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
  );
}

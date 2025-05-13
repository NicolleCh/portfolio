import { Container, AboutMe, Skills } from "./styles";

import SkillList from "../../components/SkillList";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiStyledcomponents,
  SiNextdotjs,
} from 'react-icons/si';

export default function About() {
  return (
    <Container>
      <AboutMe>
        <h2>Sobre Mim</h2>
        <p>
          Sou uma <strong>Desenvolvedora Full Stack</strong> que se diverte criando interfaces funcionais com React!
          Atualmente estou finalizando o curso de Análise e Desenvolvimento de Sistemas com previsão de término para julho/2025.
        </p>

        <p>
          Minha jornada na programação começou pela curiosidade e hoje transformo ideias em experiências digitais funcionais e elegantes, priorizando código limpo, componentização eficiente e uma boa UI/UX.
        </p>

        <p>
          Quando não estou desenvolvendo, você me encontra mergulhada em um livro, explorando trilhas ou ouvindo músicas que me inspiram! Adoro aprender coisas novas e compartilhar conhecimento.
        </p>

        <p>
          Vamos bater um papo sobre tecnologia, projetos e até mesmo suas recomendações de músicas!?
        </p>

        <button type="button">Download CV</button>
      </AboutMe>

      <Skills>
        <h2>Skills</h2>
        <ul>
          <SkillList
            title="HTML"
            image={<SiHtml5 title="html5" color="#e34f26" size={56} />}
            progress={'80%'}
          />

          <SkillList
            title="CSS"
            image={<SiCss3 title="css3" color="#1572B6" size={56} />}
            progress={'80%'}
          />

          <SkillList
            title="JavaScript"
            image={<SiJavascript title="javascript" color="#F7DF1E" size={56} />}
            progress={'75%'}
          />

          <SkillList
            title="TypeScript"
            image={<SiTypescript title="typescript" color="#3178C6" size={56} />}
            progress={'10%'}
          />

          <SkillList
            title="Sass"
            image={<SiSass title="sass" color="#CC6699" size={56} />}
            progress={'0%'}
          />

          <SkillList
            title="Styled Components"
            image={<SiStyledcomponents title="styled components" color="#DB7093" size={56} />}
            progress={'90%'}
          />

          <SkillList
            title="Next.js"
            image={<SiNextdotjs title="next.js" color="#000000" size={56} />}
            progress={'0%'}
          />
        </ul>
      </Skills>
    </Container>
  )
}

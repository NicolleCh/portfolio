import { Container, MyInfo, MyPhoto } from './styles'

import Lucy from '../../assets/images/lucy.png'

export default function Home() {
  return (
    <Container id='home'>
      <MyInfo>
        <h1>Olá! Me chamo<br/><strong>Nicolle Chagas!</strong></h1>
        <span>Full Stack Web Developer</span>
        <p>
          Apaixonada por desenvolver aplicações funcionais com técnicas de acessibilidade e performance, sempre pensando na experiência final do usuário! Atualmente estou entrando de cabeça no backend para criar aplicações cada vez mais robustas e completas. Formanda em Análise e Desenvolvimento de Sistemas.
        </p>
      </MyInfo>

      <MyPhoto>
        <img width={500} src={Lucy} alt="My photo" />
      </MyPhoto>
    </Container>
  )
}

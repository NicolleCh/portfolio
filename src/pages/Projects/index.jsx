import { Container } from "./styles";

export default function Projects() {
  return (
    <Container>
      <div>
        <h2>Projetos Pessoais</h2>
        <p>Bem vindo(a) a seção dos meus projetos! Aqui você irá encontrar uma coleção de projetos desenvolvidos que vão desde o HTML e CSS até React e Node.js.</p>
      </div>

      <div>
        <div>
          <span>Tipo de aplicação</span>
          <h3>nome da aplicação</h3>
          <p>apresentação basica do projeto explicando o que é e pra que serve, tambem posso por as techs que usei aqui</p>

          <div>
            <button>Live Website</button>
            <button>GitHub Code</button>
          </div>
        </div>

        <div>
          foto do projeto
        </div>
      </div>
    </Container>
  )
}

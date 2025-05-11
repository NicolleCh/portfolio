import { Container, Header } from "./styles"

import ProjectComponent from "../../components/ProjectComponent"

import Website from './../../assets/images/website.png'

export default function Projects() {
  return (
    <Container>
      <Header>
        <h2>Projetos Pessoais</h2>
        <p>Bem vindo(a) a seção dos meus projetos pessoais! Aqui você irá encontrar uma coleção de projetos desenvolvidos que vão desde o HTML e CSS até React e Node.js. Sinta-se a vontade para ver e testar as aplicações rodando na web e também para acessar os códigos disponíveis no GitHub!</p>
      </Header>

      <ProjectComponent
        appType='budgetApp'
        appName='Budget Buddy'
        appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore reprehenderit vero, suscipit sed unde expedita fuga iste porro incidunt numquam eaque amet quasi quas necessitatibus ipsa consequatur sapiente quam?'
        liveWebsiteLink='https://google.com.br'
        githubCodeLink='https://google.com.br'
        previewImage={Website}
      />



      <ProjectComponent
        appType='Web Agency website'
        appName='Web Pix'
        appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore reprehenderit vero, suscipit sed unde expedita fuga iste porro incidunt numquam eaque amet quasi quas necessitatibus ipsa consequatur sapiente quam?'
        liveWebsiteLink='https://google.com.br'
        githubCodeLink='https://google.com.br'
        previewImage={Website}
      />


      <ProjectComponent
        appType='Website Crawler'
        appName='CrawlWix'
        appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore reprehenderit vero, suscipit sed unde expedita fuga iste porro incidunt numquam eaque amet quasi quas necessitatibus ipsa consequatur sapiente quam?'
        liveWebsiteLink='https://google.com.br'
        githubCodeLink='https://google.com.br'
        previewImage={Website}
      />



      <ProjectComponent
        appType='budgetApp'
        appName='Budget Buddy'
        appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore reprehenderit vero, suscipit sed unde expedita fuga iste porro incidunt numquam eaque amet quasi quas necessitatibus ipsa consequatur sapiente quam?'
        liveWebsiteLink='https://google.com.br'
        githubCodeLink='https://google.com.br'
        previewImage={Website}
      />



      <ProjectComponent
        appType='budgetApp'
        appName='Budget Buddy'
        appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore reprehenderit vero, suscipit sed unde expedita fuga iste porro incidunt numquam eaque amet quasi quas necessitatibus ipsa consequatur sapiente quam?'
        liveWebsiteLink='https://google.com.br'
        githubCodeLink='https://google.com.br'
        previewImage={Website}
      />
    </Container >
  )
}

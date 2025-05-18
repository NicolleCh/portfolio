import { Container, MyInfo, MyPhoto, SeeMore } from './styles';

import Me from '../../assets/images/EU.png';

import { PiMouseSimpleLight } from 'react-icons/pi';
import { RxDoubleArrowDown } from 'react-icons/rx';

import { Link } from 'react-router';
// import Cv from '../../Docs/';

export default function Home() {
  return (
    <Container id='home'>
      <MyInfo>
        <h1>Olá! Me chamo<br/><strong>Nicolle Chagas!</strong></h1>
        <span>Full Stack Web Developer</span>
        <p>
          Apaixonada por desenvolver aplicações funcionais com técnicas de acessibilidade e performance, sempre pensando na experiência final do usuário! Atualmente estou entrando de cabeça no backend para criar aplicações cada vez mais robustas e completas.
        </p>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          // to={Cv}
        >
          Download CV
        </Link>
      </MyInfo>

      <MyPhoto>
        <img src={Me} alt="My photo" />
      </MyPhoto>

      <SeeMore>
        <PiMouseSimpleLight  size={40} color='#e31b6d' />
        <RxDoubleArrowDown className='see-more-arrow' size={40} color='#e31b6d' />
      </SeeMore>
    </Container>
  );
}

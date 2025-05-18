import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 3.2rem;

  @media (max-width: 1540px) {
    height: 100%;
    margin: 2rem 0;
  }

  @media screen and (max-width: 1106px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0 1.2rem;
  }

`;

export const SeeMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: absolute;
  bottom: 1rem;
  left: 50%;

  .see-more-arrow {
    animation-name: translate;
    animation-duration: 0.7s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes translate {
    from {
      transform: translateY(-8px);
    }
    to {
      transform: translateY(5px);
    }
  }

  @media screen and (max-width: 1540px) {
    display: none;
  }
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;

  h1 {
    font-size: 4.6rem;
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};

    strong {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.pink3};
    }
  }

  span {
    font-size: 1.6rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.pinkLighter};
  }

  p {
    font-size: 1.6rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.greyLighter};
  }

  @media (max-width: 1540px) {
    h1 {
      font-size: 3.2rem;
    }

    p, span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 446px) {
    h1 {
      font-size: 2.2rem;
    }

    p, span {
      font-size: 1.1rem;
    }
  }
`;

export const MyPhoto = styled.div`
  flex: 1;
  text-align: right;

  img {
    width: 600px;
    border-radius: 20px;
  }

  @media (max-width: 1540px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 446px) {
    text-align: center;
    img {
      text-align: center;
      width: 100%;
    }
  }
`;

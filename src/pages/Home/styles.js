import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 3.2rem;

  @media screen and (max-width: 1106px) {
    height: auto;
    flex-direction: row;
    gap: 3rem;
    padding: 0 1.2rem;
    margin-bottom: 32px
  }

  @media screen and (max-width: 790px) {
    flex-direction: column;
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

  a {
    text-align: center;
    width: 25%;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.boxShadowDarker};
  }

    a:hover {
    box-shadow: 0 5px 20px ${({ theme }) => theme.colors.mainPink};
  }

  @media (max-width: 1540px) {
    h1      { font-size: 3.2rem; }
    p, span { font-size: 1.2rem; }
    a       { width: 100%; }
  }

  @media (max-width: 446px) {
    h1      { font-size: 2.2rem; }
    p, span { font-size: 1.1rem; }
    a       { width: 100%; }
  }
`;

export const MyPhoto = styled.div`
  flex: 1;
  text-align: right;

  img {
    width: 700px;
    height: 400px;
    border-radius: 20px;
  }

  @media (max-width: 1540px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 446px) {
    text-align: center;
    img {
      text-align: center;
      width: 100%;
      height: 250px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 3.2rem;
  gap: 6rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainPink};
  }

  @media screen and (max-width: 1106px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1.2rem;
    gap: 3rem;

    p {
      font-size: 18px;
    }
  }
`;

export const AboutMe = styled.div`
  flex: 1;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    color: ${({ theme }) => theme.colors.greyDarker};
  }

  p + p {
    margin-top: 1.2rem;
  }

  @media screen and (max-width: 1106px) {
    h2  { margin: 1rem 0; }
    p   { font-size: 18px; }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    row-gap: 5rem;
    text-align: center;
  }

  @media screen and (max-width: 1106px) {
    padding: 0 1.2rem;
    width: 100vw;

    ul {
      grid-template-columns: repeat(4, 25%);
      row-gap: 2rem;

      @media screen and (max-width: 446px) {
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
`;

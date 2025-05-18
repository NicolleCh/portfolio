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
`;

export const AboutMe = styled.div`
  text-align: center;
  flex: 1;

  h2 {
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

  a {
    display: inline-block;
    cursor: pointer;
    width: 50%;
    margin-top: 24px;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.greyDarker};
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.boxShadowDarker};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 0 5px 20px ${({ theme }) => theme.colors.mainPink};
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
`;

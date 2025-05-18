import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;

  @media screen and (max-width: 1106px) {
    padding: 0 1.2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainPink};
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.greyDarker};
    line-height: 1.4;
    text-align: left;
  }

  p + p {
    margin-top: 12px;
  }

  @media screen and (max-width: 1106px) {
    p { font-size: 18px; }
  }
`;

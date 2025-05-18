import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.mainPink};
  color:${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  text-align: center;
  font-size: 18px;

  @media screen and (max-width: 1106px) {
    padding: 1.6rem 0;
    font-size: 12px;
  }
`;

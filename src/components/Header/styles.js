import styled from 'styled-components';

export const Container = styled.header`
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3.2rem;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.boxShadowDarker};

  .menuBtn {
    cursor: pointer;
    display: none;
    position: absolute;
    right: 12px;
    top: 12px;
  }

  @media screen and (max-width: 1106px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 0.4rem 1.2rem;
    margin-bottom: 3rem;

    .menuBtn {
      display: block;
      position: inherit;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  h2 {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1106px) {
    width: 100vw;
    justify-content: space-between;
    padding: 0 1.2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 1106px) {
    display: ${(props) => (props.$isMenuOpen ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 8px 0;
    text-align: left;

    li + li {
      margin-top: 4px;
    }

    li .nav-link  {
      border: none;
      border-radius: 0;
      font-size: 1.4rem;
    }
  }

  .nav-link {
    color:${({ theme }) => theme.colors.greyDarker};
    border: 1px solid ${({ theme }) => theme.colors.black};
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
  }

  .nav-link:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.mainPink};
  }

  .home {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.mainPink};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 18px;

  .icons {
    color: ${({ theme }) => theme.colors.black};
    transition: 300ms all ease;

    @media screen and (max-width: 1106px) {
      width: 32px;
      display: none;
    }
  }

  .icons:hover {
    color: ${({ theme }) => theme.colors.mainPink};
  }
`;

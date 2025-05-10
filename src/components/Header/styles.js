import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 3.2rem;
  background:rgb(255, 255, 255);
  color:  #0F172A;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  h2 {
    font-size: 1.6rem;
  }
`

export const Navigation = styled.nav`
ul {
    display: flex;
    gap: 24px;
  }

  a {
    color:rgb(57, 58, 58);
    border: 1px solid #000000;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
  }

  a.active {
    color: #ffffff;
    background: #e31b6d;
    box-shadow: 1px 1px 0 #e31b6d;
  }

  a:hover {
    background: #e31b6d;
    color: #ffffff;
    box-shadow: 1px 1px 0 #e31b6d;
    /* border: 1px solid #e31b6d; */
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;

  .icons {
    color: #000000;
    transition: 300ms all ease;
  }

  .icons:hover {
    color: #e31b6d;
  }
`

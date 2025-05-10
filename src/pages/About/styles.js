import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 3.2rem;
  background: #F4F4F4;
  gap: 6rem;
  height: 100%;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #e31b6d;
    text-align: center;
  }
`

export const AboutMe = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 3rem;
  }

  p {
    font-size: 24px;
    color:rgb(82, 82, 82);
    line-height: 1.4;


  }

  p + p {
    margin-top: 2.5rem;
  }
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    row-gap: 5rem;
    text-align: center;
  }
`

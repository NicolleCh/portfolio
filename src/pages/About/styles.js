import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3.2rem;
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
  text-align: center;
  flex: 1;
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 3rem;
  }

  p {
    font-size: 24px;
    color:rgb(82, 82, 82);
    line-height: 1.4;
    text-align: center;
  }

  p + p {
    margin-top: 2.5rem;
  }

  button {
    cursor: pointer;
    width: 50%;
    margin-top: 24px;
    color:rgb(57, 58, 58);
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  button:hover {
    background: #e31b6d;
    color: #ffffff;
    box-shadow: 0 5px 20px #e31b6d;
  }
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
  flex: 1;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    row-gap: 5rem;
    text-align: center;
  }
`

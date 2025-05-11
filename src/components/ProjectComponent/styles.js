import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  padding: 1.6rem 3.2rem;
  margin-bottom: 4rem;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  span {
    font-size: 24px;
    color:rgb(83, 83, 83);
    font-style: italic;
  }

  h3 {
    font-size: 32px;
    margin: 12px 0 8px;
  }

  p {
    font-size: 24px;

    color:rgb(83, 83, 83);
    margin-bottom: 32px;
  }
`

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    color:rgb(57, 58, 58);
    border: 1px solid #000000;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
  }

  a:hover {
    background: #e31b6d;
    color: #ffffff;
    box-shadow: 1px 1px 0 #e31b6d;
  }
`

export const TechsUsed = styled.ul`
  display: flex;
  gap: 18px;
  margin-top: 32px;
`

export const ProjectPreview = styled.div`
  flex: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 5px;
`

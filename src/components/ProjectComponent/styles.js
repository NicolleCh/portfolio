import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding: 1.6rem;
  margin-bottom: 3.2rem;


  img {
    border: 1px solid ${({ theme }) => theme.colors.mainPink};
    box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.mainPink};
    border-radius: 8px;
    padding: 1.6rem;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 20px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.mainPink};
  }

  h3 {
    font-size: 36px;
    margin: 12px 0 24px;
    color: ${({ theme }) => theme.colors.greyDarker};
  }

  p {
    font-size: 22px;
    margin-bottom: 32px;
    color:${({ theme }) => theme.colors.greyDarker};
  }
`

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;
    color:${({ theme }) => theme.colors.greyDarker};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.mainPink};
  }
`

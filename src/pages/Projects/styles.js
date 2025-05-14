import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background:rgb(163, 163, 163);
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #e31b6d;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 24px;
    color:rgb(82, 82, 82);
    line-height: 1.4;
    text-align: left;
  }

  p + p {
    margin-top: 12px;
  }
`

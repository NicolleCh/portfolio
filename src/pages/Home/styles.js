import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem;
`

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  h1 {
    font-size: 4rem;
    font-weight: 300;
    color:rgb(0, 0, 0);
    text-transform: uppercase;

    strong {
      font-weight: bold;
      color:rgb(255, 0, 106);
    }
  }

  span {
    font-size: 1.6rem;
    font-style: italic;
    color:rgb(255, 106, 168);
  }

  p {
    font-size: 1.6rem;
    line-height: 1.4;
    color:rgb(95, 95, 95);
  }
`

export const MyPhoto = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background:rgb(211, 211, 211);
`

export const PageTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 32px;
`

export const Form = styled.form`
    padding: 0 6.4rem;
    background:rgb(253, 194, 218);
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color:rgb(0, 0, 0);
        font-size: 32px;
        font-weight: 300;
        margin: 64px 0;
    }

    small {
        color:rgb(255, 0, 0);
        font-size: 12px;
        display: block;
        margin-top: 8px;
    }
`

export const FormGroup = styled.div`
    width: 775px;

    & + & {
    margin-top: 16px;
   }
`

export const Input = styled.input`
    color:rgb(57, 58, 58);
    border: 1px solid transparent;
    border-radius: 12px;
    background: #fff;
    height: 52px;
    width: 100%;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: 200ms all ease-in;
    appearance: none;
    box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.08);


    &:focus {
    box-shadow: 1px 2px 20px rgba(227, 27, 110, 1);
    }


`

export const TextArea = styled.textarea`
    border: 1px solid transparent;
    outline: none;
    border-radius: 12px;
    height: 52px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 104px;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    transition: 200ms all ease-in;

     &:focus {
      border: 1px solid #000000;
    }
`

export const Button = styled.button`
    width: 262px;
    cursor: pointer;
    margin: 48px 0;
    background: #fff;
    border: 1px solid #000000;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 200ms all ease;
    padding: 12px 24px;
    border-radius: 12px;

    &:hover {
    background:#e31b6d;
    color: #ffffff;
    box-shadow: 1px 1px 0 rgb(0, 0, 0);
  }

    &[disabled] {
      background: rgb(68, 68, 68);
      color:rgb(146, 146, 146);
      cursor: default;

      &:hover {
        background: rgb(68, 68, 68);
        box-shadow: none;
      }
    }
  `

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const PageTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  font-style: italic;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  padding: 0 6.4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 32px;
    font-weight: 300;
    margin: 64px 0;
    color: ${({ theme }) => theme.colors.black};
  }

  small {
    font-size: 12px;
    display: block;
    margin-top: 8px;
    color:${({ theme }) => theme.colors.orange};
  }
`;

export const FormGroup = styled.div`
  width: 775px;

  & + & {
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  border: 1px solid transparent;
  border-radius: 12px;
  height: 52px;
  width: 100%;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: 200ms all ease-in;
  appearance: none;
  color: ${({ theme }) => theme.colors.greyDarker};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 10px 20px ${({ theme }) => theme.colors.boxShadowDarker};

  &:focus {
    box-shadow: 1px 2px 20px ${({ theme }) => theme.colors.mainPink};
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid transparent;
  outline: none;
  border-radius: 12px;
  height: 52px;
  height: 104px;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  transition: 200ms all ease-in;
  color:${({ theme }) => theme.colors.greyDarker};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.boxShadowDarker};

  &:focus {
    box-shadow: 1px 2px 20px ${({ theme }) => theme.colors.mainPink};
  }
`;

export const Button = styled.button`
  width: 262px;
  margin: 48px 0 48px;
  font-weight: 400;
  font-size: 1.2rem;
  transition: 200ms all ease;
  padding: 12px 24px;
  border-radius: 12px;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.greyLighter};
  }

  &:enabled {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:enabled:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mainPink};
    box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.mainPink};
  }
`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  margin-bottom: 48px;
  padding: 20px 30px;

  &.success {
    color: ${({ theme }) => theme.colors.successDarker};
    border: 1px solid ${({ theme }) => theme.colors.successDarker};
		background-color: ${({ theme }) => theme.colors.successLighter};
  }

  &.failed {
  color: ${({ theme }) => theme.colors.errorDarker};
  border: 1px solid ${({ theme }) => theme.colors.mainPink};
  background-color: ${({ theme }) => theme.colors.errorLighter};
  }
`;

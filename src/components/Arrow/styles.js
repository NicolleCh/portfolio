import styled from 'styled-components';

export const UpButton = styled.div`
.arrow-icon {
  background: #ffffff;
  border-radius: 100%;
  position: fixed;
  bottom: 2rem;
  right: 5rem;
  cursor: pointer;
  z-index: 10;
  transition: all 200ms ease-in;
  opacity: 0;
  transform: translateY(100px);
  visibility: hidden;
  color: ${({ theme }) => theme.colors.mainPink};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.boxShadowLighter};
}

.arrow-icon.show {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.arrow-icon:hover {
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pink3};
}
`;

import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const ProgressBar = styled.div`
  border: 1px solid #e31b6d;
  width: 50%;
  height: 10px;
`

export const Teste = styled.div`
  background: #e31b6d;
  width: ${props => props.progress || '0%'};
  height: 8px;
`

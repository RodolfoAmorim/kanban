import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme["blue-100"]};
  border: 0;
  border-radius: 12px;
  outline: 0;
  box-shadow: none;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: .75px;
  color: ${props => props.theme["grey-50"]};
  transition: background-color .4s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme["blue-200"]};
  }
`
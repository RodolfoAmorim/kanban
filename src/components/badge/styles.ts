import styled from "styled-components";

export const BadgeContainer = styled.span`
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 400;
  letter-spacing: .5px;
  background-color: ${props => props.theme["grey-600"]};
  color: ${props => props.theme["grey-50"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
`
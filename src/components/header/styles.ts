import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: ${(props) => props.theme["grey-500"]};
`;

export const SearchContainer = styled.div`
  width: 30rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 .75rem;
  background-color: ${(props) => props.theme["grey-400"]};
  border-radius: 12px;
  color: ${(props) => props.theme["grey-300"]};

  input {
    flex: 1;
    height: 3.5rem;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: ${(props) => props.theme["grey-100"]};
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5rem;
`

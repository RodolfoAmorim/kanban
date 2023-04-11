import styled from "styled-components";

export const SidebarContainer = styled.nav`
  width: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme["grey-600"]};

  header {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 3rem;
    }
  }
`;

export const SidebarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding-bottom: 8rem;
  flex: 1;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      color: ${(props) => props.theme["grey-300"]};
      border-radius: 16px;
      transition: color 0.2s, background-color 0.4s;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme["grey-100"]};
        background-color: ${(props) => props.theme["grey-400"]};
      }

      &.active {
        color: ${(props) => props.theme["grey-100"]};
      }
    }
  }
`;

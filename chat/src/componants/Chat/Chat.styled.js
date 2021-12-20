import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0px;
  background: #f48498;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    margin: 0;
    display: flex;
    align-items: center;
  }
  span {
    color: #fff;
    cursor: pointer;
  }
`;

export const Textarea = styled.textarea`
  min-height: 60px;
  min-width: 90vw;
  padding: 1rem;
  font-size: 1rem;
`;

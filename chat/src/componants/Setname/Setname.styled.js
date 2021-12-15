import styled from "styled-components";

export const Box = styled.div`
  width: 340px;
  padding: 2rem;
  margin: auto;
  background: #52a84d;
`;

export const Form = styled.form``;

export const Title = styled.div`
  h2 {
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1rem;
  margin: 2rem 0;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#f48498")};
  margin: auto;
  border: 0;
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
`;

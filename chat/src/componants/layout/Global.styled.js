import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px
}
`;

export default Global;

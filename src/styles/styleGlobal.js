import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
:root {
    --desaturated-dark-cyan: #5ba4a4;
    --light-grayish-cyan-bg: #effafa;
    --light-grayish-cyan-filter: #eef6f6;
    --dark-grayish-cyan: #7b8e8e;
    --very-dark-grayish-cyan: #2c3a3a;
}
body{
    font-family: 'League Spartan', sans-serif;
    background-color: var(--light-grayish-cyan-bg);
    margin: 0;
}
`;

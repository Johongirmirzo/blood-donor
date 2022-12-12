import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scrollbar-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Roboto",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  overflow-x: hidden;
}
body.active {
  overflow: hidden;
}

img {
  max-width: 100%;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

button, a, input, img {
  display: inline-block;
}
button {
  border: 0;
}
a {
  text-decoration: none;
}

/* body scrollbar */
body::-webkit-scrollbar {
  width: 10px;
  height: 20px;
  border-radius: 30px;
}

/* Track */
body::-webkit-scrollbar-track {
  background: hsl(0, 0%, 82%);
}
 
/* Handle */
body::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 67%);
  width: 20px;
  height: 20px;
  border-radius: 30px;
}
`;

export default GlobalStyle;

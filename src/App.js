import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  black1: "#151619",
  black2: "#1D1F22",
  black3: "#2B2D31",
  black4: "#35393F",
  gray1: "#5A6069",
  gray2: "#7C8187",
  gray3: "#C1C4CB",
  gray4: "#E4E4E4",
  gray5: "#F5F5F5",
  white: "#F5F5F5",
  brightOrange: "#E46643",
  lightOrange: "#F39765",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;

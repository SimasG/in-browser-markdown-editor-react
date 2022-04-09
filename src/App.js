import { useState } from "react";
import { marked } from "marked";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const theme = {
  width: {
    tablet: "768px",
    desktop: "1200px",
  },
  colors: {
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
  },
};

function App() {
  const [editorState, setEditorState] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setEditorState(text);
  };

  const renderText = (text) => {
    const __html = marked.parse(text, { sanitize: true });
    return { __html };
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Sidebar />
        <Main
          handleChange={handleChange}
          renderText={renderText(editorState)}
        />
      </>
    </ThemeProvider>
  );
}

export default App;

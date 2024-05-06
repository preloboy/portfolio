import React, { } from "react";
import "@fontsource/roboto"; // Load Roboto font (used by MUI)
import { CssBaseline, createTheme, } from "@mui/material";
import Nav from "./components/nav";
import { ThemeProvider } from "@emotion/react";
import { Context, Design } from "./theme/context";


const App: React.FC = () => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

const theme = React.useMemo(() => createTheme(Design(mode)), [mode]);



  return (
    <Context.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Nav />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;

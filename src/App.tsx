import React, { useState } from "react";
import "@fontsource/roboto"; // Load Roboto font (used by MUI)
import { Card, CardHeader, Switch, CardContent, Box, Container, Typography, FormGroup, FormControlLabel, CssBaseline, createTheme, ThemeProvider, colors, } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: colors.grey[500]
    }
  }
})

const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.orange[500]
    }
  },
})

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <div className="App">
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="h3" component="h3">
                Kindacode.com
              </Typography>
              <Typography variant="body1" color='primary.main'>
                Dark Mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;

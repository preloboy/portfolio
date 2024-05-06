// ThemeProvider.js

import { createTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import ThemeContext from "./context";


// Define your themes
const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#ff9800', // Grey[500]
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#ff9800', // Orange[500]
        },
    },
});
interface Props {
    children?: ReactNode;
}


const ThemeProvider: React.FC<Props> = ({ children }) => {
    // You can set the theme dynamically based on user preferences or other logic
    const theme = lightTheme; // Change this as needed

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

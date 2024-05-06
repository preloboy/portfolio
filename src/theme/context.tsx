import { PaletteMode } from '@mui/material';
import { amber, grey, deepOrange, lime } from '@mui/material/colors';
import { createContext } from 'react';

export const Context = createContext({
    toggleMode: () => { }
});



export const Design = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    light: '#FFFBDA',
                    main: '#FFEC9E',
                    dark: '#FFBB70',
                    darker: '#ED9455',
                },
                secondary: {
                    light: lime[300],
                    main: lime[500],
                    dark: lime[700],
                    darker: lime[900],
                },
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    light: deepOrange[300],
                    main: deepOrange[500],
                    dark: deepOrange[700],
                    darker: deepOrange[900],
                },
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: grey[900],
                    secondary: grey[500],
                },

            }),

    },
});




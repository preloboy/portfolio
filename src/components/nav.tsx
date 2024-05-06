import { Box, IconButton, useTheme, Typography, Button } from "@mui/material"
import React from "react";
import { Context } from "../theme/context.tsx";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Nav = () => {

    const theme = useTheme();
    const colorMode = React.useContext(Context);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

            </Box>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Box sx={{ bgcolor: 'primary.main' }}>Main</Box>
            <Box sx={{ bgcolor: 'primary.light' }}>Light</Box>
            <Box sx={{ bgcolor: 'primary.dark' }}>Dark</Box>
            <Box sx={{ bgcolor: 'primary.darker' }}>Darker</Box>
        </>
    )
}

export default Nav
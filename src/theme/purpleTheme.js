import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#667ff1'
        },
        secondary: {
            main: '#a8b3ff'
        },
        error:{
            main: red.A400
        },
        white: {
            main: '#ffffff'
        }
    }
});
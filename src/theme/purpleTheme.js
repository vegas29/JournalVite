import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#5C62C5',
            white: '#ffffff'
        },
        secondary: {
            main: '#543884'
        },
        error:{
            main: red.A400
        }
    }
});
import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const theme = createTheme({
    palette: {
        background: {
            default: 'rgb(34, 34, 34)',
        },
        text: {
            primary: 'rgb(230, 230, 230)',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
    spacing: 8,
});

export default theme;
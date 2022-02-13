import {createTheme} from '@mui/material/styles';


export const Theme = createTheme({
    palette: {
        dark: true,
        primary: {
            main: '#ef394e',
            light: '#757ce8',
            dark: '#002884',
            contrastText: '#fff',
        },
        success: {
            main: '#19bfd3',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ef394e',
            light: '#757ce8',
            dark: '#002884',
            contrastText: '#fff',
        },
        common: {
            df: '#19bfd3'
        },
    },
    typography: {
        fontFamily: [
            '"Vazir"',
        ].join(','),
    },
});

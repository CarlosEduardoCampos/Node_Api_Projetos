import {createTheme} from '@mui/material';
//import {blue} from '@mui/material/colors';
import {yellow} from '@mui/material/colors';
import {green} from '@mui/material/colors';

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: yellow[700],
            dark:yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: green[700],
            dark:green[800],
            light: green[500],
            contrastText: '#ffffff',
        },
        background:{
            paper: '#ffffff',
            default: '#f7f6f3',
        }
    }
});
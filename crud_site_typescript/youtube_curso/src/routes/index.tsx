import {Button} from '@mui/material';
import{ Routes, Route, Navigate} from 'react-router-dom';
import { useAppThemeContext, useDrawerContext} from '../shared/contexts';

export const  AppRoutes = () =>{
    
    const {toggleDrawerOpen} = useDrawerContext();
    return(
        <Routes>
            <Route path='/page-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Mudar Menu</Button>} />
            <Route path='*' element={<Navigate to='/page-inicial'/>} />
        </Routes>
    );
};
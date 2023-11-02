import{ Routes, Route, Navigate} from 'react-router-dom';

export const  AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/page-inicial" element={<p>Página Inicial</p>} />
            <Route path="*" element={<Navigate to="/page-inicial"/>} />
        </Routes>
    );
}
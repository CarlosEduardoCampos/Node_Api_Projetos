// Funcionalidade da Aplicação:
import { BrowserRouter } from 'react-router-dom'; // Biblioteca de redirecionamento de requisições
import { AppRoutes } from './routes'; // Arquivo de configuração de rotas

// Estilo da Aplicação:
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';

export const App = () => {
    return (
        <DrawerProvider>
            <AppThemeProvider>
                <BrowserRouter>
                    <MenuLateral>
                        <AppRoutes />
                    </MenuLateral>
                </BrowserRouter>
            </AppThemeProvider>
        </DrawerProvider>
    );
};

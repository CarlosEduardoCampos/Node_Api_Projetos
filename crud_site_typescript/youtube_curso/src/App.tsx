// Funcionalidade da Aplicação:
import { BrowserRouter } from 'react-router-dom'; // Biblioteca de redirecionamento de requisições
import { AppRoutes } from './routes'; // Arquivo de configuração de rotas

// Estilo da Aplicação:
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = ()=>{
  return (
    // Tag de estilo criado manualmente:
    <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </AppThemeProvider>
  );
}
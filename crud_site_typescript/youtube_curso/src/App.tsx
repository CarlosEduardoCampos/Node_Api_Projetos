// Funcionalidade da Aplicação:
import { BrowserRouter } from 'react-router-dom'; // Biblioteca de redirecionamento de requisições
import { AppRoutes } from './routes'; // Arquivo de configuração de rotas

// Estilo da Aplicação:
import { ThemeProvider } from '@mui/material'; // Ferramenta de cofiguração de estilo
import { LightTheme } from './shared/themes'; // Cofiguração manual de estilo

export const App = ()=>{
  return (
    // Tag de estilo criado manualmente:
    <ThemeProvider theme={LightTheme}>
      
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </ThemeProvider>
  );
}
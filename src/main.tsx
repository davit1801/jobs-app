import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/i18n';
import { BrowserRouter } from 'react-router';
import '@/index.css';
import App from '@/App';
import { ThemeProvider } from '@/components/theme/theme-provaider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);

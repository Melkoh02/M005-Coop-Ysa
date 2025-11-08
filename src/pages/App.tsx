import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import AppRoutes from '../routes/routes';
import { lightTheme } from '../themes/light.ts';

const App = observer(function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;

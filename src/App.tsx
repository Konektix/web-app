import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { KeycloakProvider, ErrorBoundary } from './context';
import { HomePage, Account, Logout } from './pages';
import { Layout } from './components';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material';

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    palette: {
        primary: {
            light: '#122f3e',
            main: '#1A4459',
            dark: '#122f3e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#7a5847',
            main: '#592f1a',
            dark: '#3e2012',
            contrastText: '#fff',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme} noSsr>
            <KeycloakProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Layout>
                                        <HomePage />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/account"
                                element={
                                    <Layout>
                                        <Account />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/logout"
                                element={
                                    <Layout>
                                        <Logout />
                                    </Layout>
                                }
                            />
                        </Routes>
                    </ErrorBoundary>
                </BrowserRouter>
            </KeycloakProvider>
        </ThemeProvider>
    );
}

export default App;

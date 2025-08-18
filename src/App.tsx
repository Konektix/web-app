import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { KeycloakProvider, ErrorBoundary } from './context';
import { HomePage, Account } from './pages';
import { Layout } from './components';

function App() {
    return (
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
                    </Routes>
                </ErrorBoundary>
            </BrowserRouter>
        </KeycloakProvider>
    );
}

export default App;

import { Link } from 'react-router';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useKeycloak } from '../hooks/useKeycloak';

export const NavBar = () => {
    const { keycloak, authenticated } = useKeycloak();

    const handleLogin = () => {
        keycloak?.login();
    };

    const handleLogout = () => {
        keycloak?.logout();
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Keycloak POC
                    </Link>
                </Typography>
                {authenticated ? (
                    <>
                        <Button color="inherit" component={Link} to="/account">
                            My Account
                        </Button>
                        <Button color="inherit" component={Link} to="/my-items">
                            My Items
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button color="inherit" onClick={handleLogin}>
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

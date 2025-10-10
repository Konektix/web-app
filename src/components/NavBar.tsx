import { Button, AppBar, Toolbar } from '@mui/material';
import { useKeycloak } from '../hooks/useKeycloak';
import { Header } from './Header';
import { MessageButton } from './MessageButton';
import { NotificationsButton } from './NotificationsButton';
import { AvatarButton } from './AvatarButton';

export const NavBar = () => {
    const { keycloak, authenticated } = useKeycloak();

    const handleLogin = () => {
        keycloak?.login();
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Header />
                {authenticated ? (
                    <>
                        <MessageButton />
                        <NotificationsButton />
                        <AvatarButton />
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

import { Notifications } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

export const NotificationsButton = () => {
    return (
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={0} color="error">
                <Notifications />
            </Badge>
        </IconButton>
    );
};

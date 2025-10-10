import { Mail } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

export const MessageButton = () => {
    return (
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="error">
                <Mail />
            </Badge>
        </IconButton>
    );
};

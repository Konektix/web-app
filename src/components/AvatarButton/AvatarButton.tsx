import React from 'react';
import { IconButton } from '@mui/material';
import { Avatar, Menu } from './components';

export const AvatarButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} sx={{ pr: 0 }}>
                <Avatar />
            </IconButton>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose} />
        </div>
    );
};

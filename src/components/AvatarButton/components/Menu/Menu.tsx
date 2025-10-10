import { Logout, Person } from '@mui/icons-material';
import { Menu as MuiMenu } from '@mui/material';
import { MenuItemLink } from './components';

interface MenuProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const Menu = ({ open, anchorEl, onClose }: MenuProps) => {
    return (
        <MuiMenu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItemLink title="Account" to="/account" Icon={Person} onClose={onClose} />
            <MenuItemLink title="Logout" to="/logout" Icon={Logout} onClose={onClose} />
        </MuiMenu>
    );
};

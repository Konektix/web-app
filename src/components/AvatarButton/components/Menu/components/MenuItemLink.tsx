import { useMemo } from 'react';
import { Link, useLocation } from 'react-router';
import { type SvgIconComponent } from '@mui/icons-material';
import { ListItemIcon, MenuItem } from '@mui/material';

interface MenuItemLinkProps {
    title: string;
    to: string;
    Icon: SvgIconComponent;
    onClose: () => void;
}

export const MenuItemLink = ({ title, to, Icon, onClose }: MenuItemLinkProps) => {
    const location = useLocation();

    const isActive = useMemo(() => {
        return to === location.pathname;
    }, [location.pathname, to]);

    return (
        <Link
            to={to}
            onClick={onClose}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                ...(isActive && { pointerEvents: 'none' }),
            }}
        >
            <MenuItem selected={isActive}>
                <ListItemIcon>
                    <Icon fontSize="small" />
                </ListItemIcon>
                {title}
            </MenuItem>
        </Link>
    );
};

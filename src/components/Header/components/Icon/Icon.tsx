import { SvgIcon } from '@mui/material';
import Logo from './logo.svg?react';

export const Icon = () => {
    return (
        <SvgIcon
            component={Logo}
            inheritViewBox
            fontSize="large"
            sx={{
                '& ellipse, & path': {
                    stroke: 'white',
                },
            }}
        />
    );
};

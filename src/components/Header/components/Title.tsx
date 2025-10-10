import { Link } from 'react-router';
import { Typography } from '@mui/material';

export const Title = () => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={0.5}>
            <Link
                to="/"
                style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'Raleway Bold',
                    letterSpacing: 1,
                }}
            >
                KONEKTIX
            </Link>
        </Typography>
    );
};

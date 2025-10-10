import { type ReactNode } from 'react';
import { Container } from '@mui/material';
import { NavBar } from './NavBar';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <>
        <NavBar />
        <Container maxWidth="md" sx={{ pt: 8 }}>
            {children}
        </Container>
    </>
);

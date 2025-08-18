import React, { type ReactNode } from 'react';
import { Container } from '@mui/material';
import { NavBar } from './NavBar';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>
        <NavBar />
        <Container maxWidth="md">{children}</Container>
    </>
);

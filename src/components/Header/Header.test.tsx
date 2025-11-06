import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { describe, it } from 'vitest';
import { Header } from './Header';

describe('Header component', () => {
    it('renders a title', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        getByRole('link', {
            name: 'KONEKTIX',
        });
    });
});

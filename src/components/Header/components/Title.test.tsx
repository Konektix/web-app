import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Title } from './Title';
import { BrowserRouter } from 'react-router';

describe('Title component', () => {
    it('Renders a title', () => {
        render(
            <BrowserRouter>
                <Title />
            </BrowserRouter>
        );

        screen.getByRole('link', {
            name: 'KONEKTIX',
        });
    });
});

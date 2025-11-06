import { render, screen, getByText, , within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Autocomplete } from './Autocomplete';

const defaultMovies = ['Terminator', 'Rambo', 'Robocop'];

const renderComponent = (movies = defaultMovies) => {
    const options = movies.map((movie) => ({ label: movie }));
    return render(<Autocomplete label="Movies" placeholder="Favorites" options={options} />);
};

describe('Autocomplete component', () => {
    it('should render a component', () => {
        const { getByLabelText, getByRole } = renderComponent();
        getByLabelText(/Movies/i);
        getByRole('button');
    });

    it('should render options menu', async () => {
        const user = userEvent.setup();
        const { getByLabelText, getByRole, queryByText } = renderComponent();

        const input = getByLabelText(/Movies/i);

        await user.click(input);

        const list = getByRole('listbox');

        defaultMovies.forEach((movie) => {
            getByText(list, movie);
        });

        expect(queryByText('Winnie the Pooh')).toBeNull();
    });

    it('should render no list items for no options', async () => {
        const user = userEvent.setup();
        const { getByLabelText, queryByRole, getByText } = renderComponent([]);

        const input = getByLabelText(/Movies/i);

        await user.click(input);

        const list = queryByRole('listbox');

        expect(list).toBeNull();

        getByText('No options');
    });

    it('should select clicked items', async () => {
        const user = userEvent.setup();
        const { getByLabelText, getByRole, queryByRole } = renderComponent();

        const input = getByLabelText(/Movies/i);

        await user.click(input);

        const list = getByRole('listbox');

        const rambo = within(list).getByText('Rambo');

        await user.click(rambo);

        // Assert that the list is hidden
        expect(queryByRole('listbox')).toBeNull();

        // Assert that the 'Rambo' chip is displayed
        getByRole('button', {
            name: 'Rambo',
        });

        screen.debug();
    });
});

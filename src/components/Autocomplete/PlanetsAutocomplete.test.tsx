import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { PlanetsAutocomplete } from './PlanetsAutocomplete';
import { render, screen } from '@testing-library/react';
import * as api from './api';

const PLANETS = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];

vi.spyOn(api, 'getPlanets').mockImplementation(() => {
    return new Promise((resolve) => {
        resolve(PLANETS);
    });
});

describe('PlanetsAutocomplete component', () => {
    it('should display options properly', async () => {
        const user = userEvent.setup();

        const { getByLabelText, getByRole, getAllByRole, getByText } = render(<PlanetsAutocomplete />);

        const input = getByLabelText(/Planets/i);

        await user.click(input);

        const list = getByRole('listbox');

        screen.debug(list);

        const listItems = getAllByRole('option');

        expect(listItems).toHaveLength(4);

        PLANETS.forEach((planet) => {
            getByText(planet);
        });
    });
});

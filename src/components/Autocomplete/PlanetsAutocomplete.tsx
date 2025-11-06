import { useEffect, useState } from 'react';
import { Autocomplete } from './Autocomplete';
import { getPlanets } from './api';

export const PlanetsAutocomplete = () => {
    const [options, setOptions] = useState<{ label: string }[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const planets = await getPlanets();
            setOptions(planets.map((p) => ({ label: p })));
        };

        fetch();
    }, []);

    return <Autocomplete label="Planets" options={options} placeholder="Select" />;
};

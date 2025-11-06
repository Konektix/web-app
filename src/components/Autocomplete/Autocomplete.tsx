import React, { useState } from 'react';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';

interface AutocompleteProps<T extends { label: string }> {
    label: string;
    placeholder: string;
    options: T[];
}

export const Autocomplete = <T extends { label: string }>({ label, placeholder, options }: AutocompleteProps<T>) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [selected, setSelected] = useState<T[]>([]);

    return (
        <MuiAutocomplete
            multiple
            options={options}
            value={selected}
            onInputChange={(_event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onChange={(_event, value) => {
                console.log(value);
                setSelected(value);
            }}
            renderInput={(params) => (
                <TextField {...params} variant="standard" label={label} placeholder={placeholder} />
            )}
        />
    );
};

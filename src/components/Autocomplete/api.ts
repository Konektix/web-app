export const getPlanets = () => {
    return new Promise<string[]>((resolve) => {
        return resolve(['Mercury', 'Venus', 'Earth', 'Mars']);
    });
};

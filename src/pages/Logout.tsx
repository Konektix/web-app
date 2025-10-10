import { useEffect } from 'react';
import { useKeycloak } from '../hooks/useKeycloak';

export const Logout = () => {
    const { keycloak } = useKeycloak();

    useEffect(() => {
        keycloak?.logout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Loading...</div>;
};

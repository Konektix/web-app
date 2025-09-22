import React, { useEffect } from 'react';
import { AuthenticationMessage } from '../components';
import { useKeycloak } from '../hooks/useKeycloak';
import { useWebSocket } from '../hooks/useWebSocket';

export const Account: React.FC = () => {
    const { keycloak, authenticated } = useKeycloak();

    const { sendMessage } = useWebSocket();

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:80/hub-manager/hubs'; // 'http://localhost:3000/api/hubs'; //  //
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${keycloak?.token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        // const fetchData2 = async () => {
        //     console.log('fetch 2');
        //     const url = 'http://localhost:80/iot-data-hub/webSocket/subscribe'; // 'http://localhost:3000/api/webSocket'; //  //
        //     try {
        //         const response = await fetch(url, {
        //             method: 'post',
        //             headers: {
        //                 Authorization: `Bearer ${keycloak?.token}`,
        //             },
        //         });
        //         if (!response.ok) {
        //             throw new Error(`Response status: ${response.status}`);
        //         }

        //         const result = await response.json();
        //         console.log(result);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        if (authenticated && keycloak) {
            fetchData();
            // fetchData2();
        }
    }, [authenticated, keycloak]);

    if (!authenticated || !keycloak) {
        return <AuthenticationMessage />;
    }

    return (
        <div>
            <h1>My Account</h1>
            <p>Hello, {keycloak?.idTokenParsed?.preferred_username}!</p>
            <p>Email: {keycloak?.idTokenParsed?.email}</p>
            <button onClick={sendMessage}>test ws</button>
            <p>
                <textarea id="token" rows={20} cols={100} defaultValue={keycloak?.idToken} />
            </p>
        </div>
    );
};

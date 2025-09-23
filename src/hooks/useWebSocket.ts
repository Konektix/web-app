import { useEffect, useRef } from 'react';
import { useKeycloak } from './useKeycloak';
import type { WebSocketConnection } from '../types';

export const useWebSocket = () => {
    const { keycloak, authenticated } = useKeycloak();
    // const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const webSocket = useRef<WebSocket | null>(null);
    // const [webSocketConnection, setwebSocketConnection] = useState<WebSocketConnection | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.konektix.eu/iot-data-hub/subscriptions'  // 'http://localhost:80/iot-data-hub/subscriptions';
            try {
                const body = { subscriptions: [] };

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${keycloak?.token}`,
                    },
                    body: JSON.stringify(body),
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                return (await response.json()) as WebSocketConnection;
            } catch (error) {
                console.error(error);
            }
        };

        if (authenticated && keycloak) {
            fetchData().then((connection) => {
                if (connection) {
                    // setwebSocketConnection(connection);
                    webSocket.current = new WebSocket(
                        `wss://api.konektix.eu/iot-data-hub/ws?connectionId=${connection.id}`
                    );

                    webSocket.current.send('hello');
                }
            });
        }
    }, [authenticated, keycloak]);

    useEffect(() => {
        return () => {
            webSocket.current?.close();
        };
    }, []);

    const sendMessage = () => {
        if (webSocket.current && webSocket.current.readyState === WebSocket.OPEN) {
            webSocket.current.send('hi');
        }
    };

    return { sendMessage };
};

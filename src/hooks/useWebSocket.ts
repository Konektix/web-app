import { useEffect, useRef } from 'react';
import { useKeycloak } from './useKeycloak';
import type { WebSocketConnection } from '../types';
import { API_URL, WEBSOCKET_URL } from '../config';

export const useWebSocket = () => {
    const { keycloak, authenticated } = useKeycloak();
    // const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const webSocket = useRef<WebSocket | null>(null);
    // const [webSocketConnection, setwebSocketConnection] = useState<WebSocketConnection | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `${API_URL}/iot-data-hub/subscriptions`; // 'http://localhost:80/iot-data-hub/subscriptions';
            try {
                const body = {
                    subscriptions: [
                        { name: 'hub_state', hubId: '42447158-be82-47ec-a48d-5e06552793a2' },
                        {
                            name: 'measurement',
                            device: { id: 'a26b2eb7-dd86-4573-93b8-497d804c14a4', ieeeAddress: '0x00124b00258a501d' },
                        },
                        {
                            name: 'measurement',
                            device: { id: '8c5f64af-e43e-4ef6-b430-8c07e4f3a270', ieeeAddress: '0x00124b002a557930' },
                        },
                    ],
                };

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
                    webSocket.current = new WebSocket(`${WEBSOCKET_URL}/iot-data-hub/ws?connectionId=${connection.id}`);

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

import React from 'react';
import { useKeycloak } from '../hooks/useKeycloak';

export const HomePage: React.FC = () => {
    const { keycloak, authenticated } = useKeycloak();

    // const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

    // useEffect(() => {
    //     const ws = new WebSocket('ws://localhost:3001');
    //     setWebSocket(ws);

    //     if (webSocket === null) return;

    //     webSocket.onopen = () => console.log('Connected to WebSocket server');
    //     webSocket.onmessage = (event) => {
    //         console.log(`Received message`, event.data);
    //         // setMessages((prevMessages) => [...prevMessages, event.data]);
    //     };
    //     webSocket.onclose = () => console.log('Disconnected from WebSocket server');

    //     // Cleanup on unmount
    //     return () => webSocket.close();
    // }, []);

    // const sendMessage = () => {
    //     if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    //         webSocket.send('tetetetete');
    //     }
    // };

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {authenticated ? (
                <div>
                    <p>Hello, {keycloak?.idTokenParsed?.preferred_username}!</p>
                </div>
            ) : (
                <div>
                    <p>Please log in to access your personalized content.</p>
                </div>
            )}
            {/* <button onClick={sendMessage}>ws test</button> */}
        </div>
    );
};

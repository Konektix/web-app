export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface WebSocketConnection {
    id: UUID;
    userId: UUID;
    ipAddress: string | string[];
    subscriptions: string[];
}

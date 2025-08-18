import React from 'react';

interface AuthenticationMessageProps {
    message?: string;
}

export const AuthenticationMessage: React.FC<AuthenticationMessageProps> = ({
    message = 'Please log in to view this content.',
}) => {
    return <div>{message}</div>;
};

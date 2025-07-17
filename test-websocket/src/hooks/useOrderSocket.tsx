// src/hooks/useOrderSocket.tsx
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3000';

export function useOrderSocket(userId: string): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!userId) return;

    const socketClient: Socket = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      reconnection: true,
    });

    socketClient.on('connect', () => {
      console.log('✅ Connected to WebSocket');
      socketClient.emit('join', { userId });
    });

    socketClient.on('disconnect', () => {
      console.log('❌ Disconnected from WebSocket');
    });

    setSocket(socketClient);

    return () => {
      socketClient.disconnect();
      setSocket(null);
    };
  }, [userId]);

  return socket;
}

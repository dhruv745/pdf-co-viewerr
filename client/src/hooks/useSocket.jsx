import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function useSocket(sessionId) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    newSocket.emit("joinSession", sessionId);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [sessionId]);

  return socket;
}

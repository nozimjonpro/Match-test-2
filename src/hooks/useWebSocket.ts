import { useEffect, useState } from "react";
import { Matches } from "../interfaces/matches.interface";

const useWebSocket = () => {
  const [updatedData, setUpdatedData] = useState<{ data: Matches[] } | null>(
    null
  );
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://app.ftoyd.com/fronttemp-service/ws");

    ws.onopen = () => {
      console.log("WebSocket Connected");
      setError(null);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setUpdatedData(data);
        setLoading(false);
      } catch (err) {
        setError("Invalid WebSocket message format");
        console.error("WebSocket Parsing Error:", err);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket Error:", err);

      setError("WebSocket connection error");
      setLoading(false);
    };

    ws.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    setSocket(ws);

    return () => ws.close();
  }, []);

  return { updatedData, socket, loading, error };
};

export default useWebSocket;

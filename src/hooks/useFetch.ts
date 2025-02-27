import axios from "axios";
import { useEffect, useState } from "react";

type Response<T> = {
  data: T;
  loading: boolean;
  error: unknown;
  refetch: () => void;
};

export const useFetch = <T>(url: string): Response<T | null> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get(url)
      .then((data) => {
        if (data.data) {
          setLoading(false);
          setData(data.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

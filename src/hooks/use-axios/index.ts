import axios, { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useAxios = <T>(
  url: string,
  config: AxiosRequestConfig = {}
): {
  loading: boolean;
  error: Error | null;
  data: T | null;
  refetch: () => void;
} => {
  const [{ loading, error, data }, setData] = useState<{
    loading: boolean;
    error: Error | null;
    data: T | null;
  }>({
    loading: false,
    error: null,
    data: null,
  });

  const [refetchIndex, setRefetchIndex] = useState<number>(0);
  const refetch = useCallback(() => setRefetchIndex((prev) => prev + 1), []);

  useEffect(() => {
    const getData = async (url: string, config: AxiosRequestConfig) => {
      setData({ loading: true, error: null, data: null });
      try {
        const response = await axios.get<T>(url, config);
        const { data } = response;
        setData({ loading: false, error: null, data });
      } catch (error) {
        setData({ loading: false, error: error as Error, data: null });
      }
    };
    getData(url, config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchIndex]);

  return { loading, error, data, refetch };
};

export default useAxios;

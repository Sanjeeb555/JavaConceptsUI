import { useState, useEffect } from 'react';
import api from '../lib/api';

/**
 * Generic data-fetch hook backed by the shared API client.
 *
 * @param {string} endpoint   - API path (e.g. '/intro')
 * @param {*}      initialData - Initial state value; use [] for arrays, null for objects.
 * @returns {{ data: *, loading: boolean, error: string|null }}
 */
const useFetch = (endpoint, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    api
      .get(endpoint)
      .then((res) => {
        if (!cancelled) {
          setData(res.data);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Failed to load data.');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;

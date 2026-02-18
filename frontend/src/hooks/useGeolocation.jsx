import { useState, useEffect } from "react";

/**
 * Custom hook for accessing the user's geolocation.
 * It uses the browser's `navigator.geolocation` API.
 *
 * @param {object} options - Geolocation options (e.g., enableHighAccuracy).
 * @returns {{
 *   coordinates: { lat: number; lon: number } | null;
 *   error: GeolocationPositionError | null;
 *   loading: boolean;
 * }}
 */
export const useGeolocation = (options = {}) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onSuccess = (position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setLoading(false);
    };

    const onError = (err) => {
      setError(err);
      setLoading(false);
    };

    if (!navigator.geolocation) {
      setError(new Error("Geolocation is not supported by your browser."));
      setLoading(false);
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      onSuccess,
      onError,
      options
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [options]);

  return { coordinates, error, loading };
};

export default useGeolocation;

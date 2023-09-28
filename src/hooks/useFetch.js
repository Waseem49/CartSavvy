import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setError(true);
      }
    }
    getData();
  }, []);
  return { data, isLoading, error };
};

export default useFetch;

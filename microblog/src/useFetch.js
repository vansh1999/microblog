import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isTrue, setIsTrue] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsTrue(false);
          setError(null);
        })
        .catch((err) => {
          if (err.message === "Failed to fetch") {
            setError(err.message);
            setIsTrue(false);
          }
        });
    }, 1000);

    return () => console.log("cleanup");
  }, [url]);

  return { data, isTrue, error };
};

export default useFetch;

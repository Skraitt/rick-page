import { useState, useEffect } from "react";

export default function useInitialState(API) {
  const [ state, setState ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setState(data);
      } catch {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return state;
}

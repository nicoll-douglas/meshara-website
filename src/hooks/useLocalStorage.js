/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const trueInitial = localStorage.getItem(key);
    if (trueInitial) {
      setValue(JSON.parse(trueInitial));
    } else {
      setValue(initial);
      localStorage.setItem(key, JSON.stringify(initial));
    }
  }, []);

  return [
    value,
    (value) => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
  ];
}

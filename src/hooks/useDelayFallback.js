/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useDelayFallback(delay = 350) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, []);

  return show;
}

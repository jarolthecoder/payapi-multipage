import { useEffect, useState } from "react";

export const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${size}px)`);
    if (media.matches) {
      setMatches(true);
    }

    const handler = () => setMatches(media.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [size]);

  return matches;
 
}

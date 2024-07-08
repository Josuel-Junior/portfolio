import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function usePosition() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const pathURL = ["/flexbox", "/structurelifo", "/structurefifo"];

  const toggleVisibility = debounce(() => {
    if (pathURL.includes(location.pathname)) {
      setIsVisible(false);
    } else {
      const scrollHeight = window.scrollY;
      setIsVisible(scrollHeight === 0);
    }
  }, 200);

  useEffect(() => {
    if (pathURL.includes(location.pathname)) {
      setIsVisible(false);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  return isVisible;
}

export default usePosition;

import { useEffect, useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Box, IconButton } from "@mui/material";

import { Fade } from "react-awesome-reveal";

import { debounce } from "lodash";

export const ReturnToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = debounce(() => {
    const scrollHeight = window.scrollY;

    if (Math.round(scrollHeight) > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 200);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box sx={{ position: "fixed", right: "7px", bottom: "20px", zIndex: 9999 }}>
      {isVisible && (
        <Fade
          direction="right"
          triggerOnce
          cascade
          damping={0.2}
          duration={500}
          delay={100}
        >
          <IconButton onClick={scrollToTop}>
            <ArrowUpwardIcon
              fontSize="large"
              sx={{ transition: "opacity 0.5s ease-in-out" }}
            />
          </IconButton>
        </Fade>
      )}
    </Box>
  );
};

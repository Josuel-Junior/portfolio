import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
  useTheme,
  ButtonGroup,
  Paper,
  Popper,
  Grow,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useLocation } from "react-router-dom";

import Logo from "../../assets/icons/jfc-logo.svg";
import LogoDark from "../../assets/icons/jfc-logo-dark.svg";
import { useState, useRef } from "react";

import { Link } from "react-router-dom";

import { DrawerComponent } from "../drawerComponent/DrawerComponent";
import { UseIndicatorNavBar, useAppThemeContext } from "../../contexts";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useNavigate } from "react-router-dom";
import Position from "../../utils/positionY";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { indicatorCurrent, setIndicatorCurrent } = UseIndicatorNavBar();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { toggleTheme } = useAppThemeContext();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const isVisible = Position();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleNavigateLifo = () => {
    navigate("/structurelifo");
    handleToggle();
  };
  const handleNavigateFifo = () => {
    navigate("/structurefifo");
    handleToggle();
  };
  const handeleNavigateHome = () => {
    navigate("/");
  };

  const hoverTextNavBar = {
    transition: "all .3s",
    color: isVisible ? "#fff" : "",
    "&:hover": {
      color: "#2684dd",
    },
  };

  return (
    <AppBar
      elevation={isVisible ? 0 : 4}
      sx={{
        background:
          isVisible == true
            ? `transparent`
            : `${theme.palette.background.paper}`,
        display: "flex",
        justifyContent: "center",
        transition: "background 0.2s ease-in-out",
      }}
    >
      <Box
        component="img"
        onClick={() => handeleNavigateHome()}
        src={
          theme.palette.mode === "dark" || isVisible ? `${LogoDark}` : `${Logo}`
        }
        sx={{ width: "50px", position: "absolute", marginLeft: "20px" }}
        alt="Ícone JFC Tecnologia"
        loading="lazy"
      />
      {isMatch ? (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <DrawerComponent />
        </Box>
      ) : (
        <Toolbar>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={indicatorCurrent}
            indicatorColor="primary"
            textColor="primary"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#296fcd",
              },
            }}
          >
            <Tab label="Home" sx={hoverTextNavBar} component={Link} to="/" />
            <Tab
              label="Serviços"
              sx={hoverTextNavBar}
              onClick={() => navigate("/services")}
            />
            <Tab
              label="Tecnologias"
              sx={hoverTextNavBar}
              onClick={() => navigate("/technologies")}
            />
            <Tab
              label="Projetos"
              sx={hoverTextNavBar}
              component={Link}
              to="/projects"
            />
            <Tab
              label="Contato"
              sx={hoverTextNavBar}
              onClick={() => navigate("/contact")}
            />
          </Tabs>
          <ButtonGroup
            ref={anchorRef}
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="button group"
              aria-haspopup="menu"
              role="group"
              variant="contained"
              color="primary"
              onClick={handleToggle}
            >
              {"Aprenda programação"}
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            onMouseLeave={handleToggle}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center left" : "center bottom",
                }}
              >
                <Paper sx={{ display: "flex", mr: "62px" }}>
                  <Box sx={{ p: "10px" }}>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ ml: "10px" }}
                    >
                      CSS
                    </Typography>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <Button
                        onClick={() => navigate("/flexbox")}
                        variant="text"
                        size="large"
                        sx={{
                          color:
                            theme.palette.mode == "light" ? "#4f4f4f" : "#fff",
                          textTransform: "capitalize",
                          "&:hover": {
                            color: "#2684dd",
                          },
                        }}
                      >
                        Flexbox
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ p: "10px" }}>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ ml: "10px" }}
                    >
                      Estrutura de Dados
                    </Typography>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <Button
                        onClick={() => handleNavigateLifo()}
                        variant="text"
                        size="large"
                        sx={{
                          color:
                            theme.palette.mode == "light" ? "#4f4f4f" : "#fff",
                          textTransform: "capitalize",
                          "&:hover": {
                            color: "#2684dd",
                          },
                        }}
                      >
                        Pilha (LIFO)
                      </Button>
                      <Button
                        onClick={() => handleNavigateFifo()}
                        variant="text"
                        size="large"
                        sx={{
                          color:
                            theme.palette.mode == "light" ? "#4f4f4f" : "#fff",
                          textTransform: "capitalize",
                          "&:hover": {
                            color: "#2684dd",
                          },
                        }}
                      >
                        Fila (FIFO)
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grow>
            )}
          </Popper>
          <IconButton
            onClick={toggleTheme}
            aria-label="Botão para alterar o tema"
          >
            <DarkModeIcon sx={{ color: isVisible ? "#fff" : "inherit" }} />
          </IconButton>
        </Toolbar>
      )}
    </AppBar>
  );
};

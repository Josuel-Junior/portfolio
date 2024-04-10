import {
  Box,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const backgroundHome =
  require("../../shared/assets/images/backgroundPageHome.webp") as string;

export const FlexBox: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [display, setDisplay] = useState("");
  const [justifyContent, setJustifyContent] = useState("");
  const [algnItems, setAlgnItems] = useState("");
  const [flexDirection, setFlexDirection] = useState("");

  const handleDisplay = (event: SelectChangeEvent) => {
    setDisplay(event.target.value as string);
  };
  const handleJustifyContent = (event: SelectChangeEvent) => {
    setJustifyContent(event.target.value as string);
  };
  const handleAlgnItems = (event: SelectChangeEvent) => {
    setAlgnItems(event.target.value as string);
  };
  const handleFlexDirection = (event: SelectChangeEvent) => {
    setFlexDirection(event.target.value as string);
  };

  return (
    <Box>
      <ScrollRestoration />
      <LayoutSectionInitial
        background={backgroundHome}
        title="Flexbox"
        subTitle="Aprenda Flexbox e melhore seu CSS"
      />

      <Container sx={{ my: 5 }}>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Você domina o Flexbox?
        </Typography>
        <Typography paragraph>
          Esta é uma ferramenta muito importante que trabalha em conjunto com o
          CSS, ela permiti alinhar e padronizar elementos de forma eficiente, o
          que melhora muito a nossa produtividade. <br />
          Posso dizer que, hoje em dia, é quase impossível estilizar sem o
          Flexbox. Pensando nisso, criei um componente que responde
          dinamicamente à seleção dos estilos mais utilizados do Flexbox. <br />
          Este componente irá ajudá-lo a compreender melhor o funcionamento do
          Flexbox.
        </Typography>
      </Container>

      <Container
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: 3,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            height: "50vh",
            width: "90%",
            display: `${display}`,
            justifyContent: `${justifyContent}`,
            alignItems: `${algnItems}`,
            flexDirection: `${flexDirection}`,
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              background: "#296fcd",
              m: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Typography color="#fff">1</Typography>
          </Box>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              background: "#296fcd",
              m: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Typography color="#fff">2</Typography>
          </Box>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              background: "#296fcd",
              m: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Typography color="#fff">3</Typography>
          </Box>
        </Paper>

        <Paper
          elevation={10}
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            p: 2,
            my: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: isMatch ? "column" : "",
              gap: 3,
            }}
          >
            <FormControl sx={{ width: "190px" }}>
              <InputLabel id="typeDisplay">Display</InputLabel>
              <Select
                labelId="typeDisplay"
                value={display}
                label="display"
                onChange={handleDisplay}
                variant="standard"
              >
                <MenuItem value={"flex"}>Flex</MenuItem>
                <MenuItem value={""}>None</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "190px" }}>
              <InputLabel id="typeJustifyContent">JustifyContent</InputLabel>
              <Select
                labelId="typeJustifyContent"
                value={justifyContent}
                label="display"
                onChange={handleJustifyContent}
                variant="standard"
              >
                <MenuItem value={"start"}>Start</MenuItem>
                <MenuItem value={"center"}>Center</MenuItem>
                <MenuItem value={"end"}>End</MenuItem>
                <MenuItem value={"space-around"}>Space-around</MenuItem>
                <MenuItem value={"space-evenly"}>Space-evenly</MenuItem>
                <MenuItem value={"space-between"}>Space-between</MenuItem>
                <MenuItem value={"none"}>None</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "190px" }}>
              <InputLabel id="typealgnItems">AlignItems</InputLabel>
              <Select
                labelId="typealgnItems"
                value={algnItems}
                label="display"
                onChange={handleAlgnItems}
                variant="standard"
              >
                <MenuItem value={"start"}>Start</MenuItem>
                <MenuItem value={"center"}>Center</MenuItem>
                <MenuItem value={"end"}>End</MenuItem>
                <MenuItem value={"none"}>None</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "190px" }}>
              <InputLabel id="typealgnItems">Flex-direction</InputLabel>
              <Select
                labelId="typealgnItems"
                value={flexDirection}
                label="display"
                variant="standard"
                onChange={handleFlexDirection}
              >
                <MenuItem value={"row"}>Row</MenuItem>
                <MenuItem value={"row-reverse"}>Row Reverse</MenuItem>
                <MenuItem value={"column"}>Column</MenuItem>
                <MenuItem value={"column-reverse"}>Column-reverse</MenuItem>
                <MenuItem value={"none"}>None</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

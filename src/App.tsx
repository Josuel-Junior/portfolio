import { NavBar } from "./shared/components/navbar/NavBar";
import { AppThemeProvider } from "./shared/contexts";
// import { ThemeProvider } from "@mui/material";
// import { LightTheme } from "./shared/themes";


function App() {
  return (

    <AppThemeProvider>
      <NavBar>
      </NavBar>
    </AppThemeProvider>

  );
}

export default App;

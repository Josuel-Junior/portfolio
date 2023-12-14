import { NavBar } from "./shared/components/navbar/NavBar";
import { AppThemeProvider } from "./shared/contexts";
import { Outlet } from "react-router-dom";
import { IndicatorNavBarContext } from "./shared/contexts/IndicatorNavBarContext";
import { ScopedCssBaseline } from "@mui/material";



function App() {


  return (
    <ScopedCssBaseline>
      <AppThemeProvider>
        <IndicatorNavBarContext>
          <NavBar>
          </NavBar>
          <Outlet />
        </IndicatorNavBarContext>
      </AppThemeProvider>
    </ScopedCssBaseline>

  );
}

export default App;

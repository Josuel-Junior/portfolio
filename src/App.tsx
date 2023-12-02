import { NavBar } from "./shared/components/navbar/NavBar";
import { AppThemeProvider } from "./shared/contexts";
import { Outlet } from "react-router-dom";
import { IndicatorNavBarContext } from "./shared/contexts/IndicatorNavBarContext";



function App() {
  return (

    <AppThemeProvider>
      <IndicatorNavBarContext>
        <NavBar>
        </NavBar>
        <Outlet/>
      </IndicatorNavBarContext>
    </AppThemeProvider>

  );
}

export default App;

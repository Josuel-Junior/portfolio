import { NavBar } from "./shared/components/navbar/NavBar";
import { AppThemeProvider } from "./shared/contexts";
import { Outlet } from "react-router-dom";
import { IndicatorNavBarContext } from "./shared/contexts/IndicatorNavBarContext";
import { ScopedCssBaseline } from "@mui/material";
import { client } from "./shared/services/lib/dato-cms";
import { ClientContext } from 'graphql-hooks'


function App() {


  return (
    <ClientContext.Provider value={client}>
      <ScopedCssBaseline>
        <AppThemeProvider>
          <IndicatorNavBarContext>
            <NavBar>
            </NavBar>
            <Outlet />
          </IndicatorNavBarContext>
        </AppThemeProvider>
      </ScopedCssBaseline>
    </ClientContext.Provider>

  );
}

export default App;

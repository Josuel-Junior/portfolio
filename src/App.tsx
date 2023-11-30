import { NavBar } from "./shared/components/navbar/NavBar";
import { AppThemeProvider } from "./shared/contexts";
import { BrowserRouter, Outlet } from "react-router-dom";



function App() {
  return (

    <AppThemeProvider>
        <NavBar>
        </NavBar>
        <Outlet/>
    </AppThemeProvider>

  );
}

export default App;

import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { LightTheme, DarkTheme } from "../themes";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext({} as IThemeContextData);

export interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};


export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, SetThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    SetThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

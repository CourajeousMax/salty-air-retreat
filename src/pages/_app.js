import "@/styles/globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.scss";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/main";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

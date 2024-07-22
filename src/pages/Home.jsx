import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useState } from "react";
import getLPTheme from './getPTheme';
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Main from "../components/Main";
import Devs from "../components/Devs";
import FooterApp from "../components/FooterApp";
import Contact from "../components/Contact";
const defaultTheme = createTheme({});

const Home = () => {
    const [mode , setMode] = useState('light');
    const [showCustomTheme, setShowCustomTheme] = useState(true);
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
      };

  return (
     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline/>
        <NavigationBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero/>
        <About/>
        <Main/>
        <Devs/>
        <Contact/>
        <FooterApp/>
     </ThemeProvider>
  )
}

export default Home
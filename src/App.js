import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Hero, Projects, Footer, Modal } from "./components";
import { useState } from "react";

export const ThemeContext = React.createContext();

const [theme, setTheme] = useState("light");

function App() {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Nav />
        <Hero />
        <Modal />
        <Projects />
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

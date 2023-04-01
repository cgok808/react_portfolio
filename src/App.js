import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Hero, Projects, Footer } from "./components";

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;

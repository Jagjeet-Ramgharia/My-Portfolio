import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Loader from "./components/Loader";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  setTimeout(() => {
    setDisplay(true);
  }, 8000);
  return (
    <div className="App">
      {display ? (
        <>
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Intro />
            <Testimonial />
            <Portfolio />
            <Works />
            <Contact />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;

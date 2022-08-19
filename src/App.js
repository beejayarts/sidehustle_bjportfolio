import "./App.css";
import About from "./Components/about section/About";
import Eduwork from "./Components/eduwork section/Eduwork";
import Hero from "./Components/Hero section/Hero";
import Header from "./Components/Navbar/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Eduwork />
    </div>
  );
}

export default App;

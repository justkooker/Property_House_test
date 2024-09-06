import "./App.scss";
import About from "./components/about/About";
import Cases from "./components/cases/Cases";
import FirstScreen from "./components/FirstScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <FirstScreen />
      <About />
      <Cases />
      <Footer />
      
    </div>
  );
}

export default App;

import { FirstView } from "./components/firstView/FirstView";
import { Header } from "./components/header/Header";
import "./App.css";
import Companies from "./components/companies/Companies";
import Homes from "./components/sweetyHomes/Homes";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="whitegradient" />
        <Header />
        <FirstView />
      </div>
      <Companies />
      <Homes />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;

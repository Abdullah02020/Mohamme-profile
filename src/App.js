import Header from "./components/1-Header/header";
import Hero from "./components/2-Hero/Hero";
import Last from "./components/3-last-projects/Last";
import Serv from "./components/4-servers/Serv";
import Talk from "./components/5-Talk/Talk";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Last />
      <Serv />
      <Talk />
      <Footer />
    </div>
  );
}

export default App;

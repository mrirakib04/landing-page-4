import "./App.css";
import AboutUsBanner from "./components/AboutUsBanner";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageForm from "./components/MessageForm";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import WorkProcess from "./components/WorkProcess";

function App() {
  return (
    <div className="max-w-[1480px] mx-auto w-full">
      <Header></Header>
      <AboutUsBanner></AboutUsBanner>
      <WorkProcess></WorkProcess>
      <Portfolio></Portfolio>
      <Articles></Articles>
      <MessageForm></MessageForm>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Main
        titlePage="Github"
        subTitlePage="How people build software"
      />
    </>
  );
}

export default App;

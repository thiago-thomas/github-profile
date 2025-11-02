import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Main githubUser="github" />
    </>
  );
}

export default App;

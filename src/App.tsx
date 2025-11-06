import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './pages/Main';

function App() {
  const [githubUsername, setGithubUsername] = useState<string>('github');

  return (
    <>
      <Header setGithubUsername={setGithubUsername} />
      <Main githubUser={githubUsername} />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { fetchGithubUser } from '../../services/api';
import './style.css';

type GithubUser = {
  login: string;
  bio: string;
  avatar_url: string;
};

type HeaderProps = React.Dispatch<React.SetStateAction<string>>;

export function Header({ setGithubUsername }: { setGithubUsername: HeaderProps }) {
  const [user, setUser] = useState<GithubUser | null>(null);

  let searchTimeout: number;

  function findUser(event: React.FormEvent<HTMLInputElement>) {
    const username = event.currentTarget.value;

    // Clear the previous timeout
    clearTimeout(searchTimeout);

    if (!username) {
      setUser(null);
      return;
    }

    // Set a new timeout
    searchTimeout = setTimeout(async () => {
      try {
        const userData = await fetchGithubUser(username);
        setUser(userData);
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    }, 1500); // Search after 500ms of no typing
  }

  function setGHUser() {
    if (!user) {
      return;
    } else {
      setGithubUsername(user.login);
      setUser(null);
    }
  }

  return (
    <header className="app-header">
      <input
        type="text"
        className="app-header__search"
        placeholder="username"
        onChange={findUser}
      />
      {user && (
        <div className="user-info" onClick={setGHUser}>
          <div className="image-container">
            <img src={user.avatar_url} alt={`${user.login} avatar image`} />
          </div>
          <div className="data-container">
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
          </div>
        </div>
      )}
    </header>
  );
}

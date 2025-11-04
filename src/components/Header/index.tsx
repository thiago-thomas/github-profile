import { useState } from "react";
import { fetchGithubUser } from "../../services/api";
import "./style.css";

interface GithubUser {
  login: string;
  bio: string;
}

export function Header() {
  const [user, setUser] = useState<GithubUser | null>(null);

  let searchTimeout: number;

  function findUser(event: React.FormEvent<HTMLInputElement>) {
    const username = event.currentTarget.value;
    
    if (!username) {
      setUser(null);
      return;
    }

    // Clear the previous timeout
    clearTimeout(searchTimeout);

    // Set a new timeout
    searchTimeout = setTimeout(async () => {
      try {
        const userData = await fetchGithubUser(username);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    }, 2000); // Search after 500ms of no typing
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
        <div className="user-info">
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
        </div>
      )}
    </header>
  );
}

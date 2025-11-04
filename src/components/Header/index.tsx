import { useState } from "react";
import { fetchGithubUser } from "../../services/api";
import "./style.css";

type GithubUser = {
  login: string;
  bio: string;
  avatar_url: string;
}


export function Header({setGithubUsername}: any) {
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

  function setGHUser() {
    if(!user) {
      return 
    } else {
      setGithubUsername(user.login)
      setUser(null)
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

import { useEffect, useState } from "react";
import { InfoPill } from "../../components/InfoPill";
import { Repository } from "../../components/Repository";
import "./style.css";
import { fetchGithubReposByUser, fetchGithubUser } from "../../services/api";

type GithubProfile = {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
}

type GithubRepo = {
  name: string;
  description: string;
  license: {
    name: string;
  } | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

type MainProps = {
  githubUser: string;
}

export function Main({githubUser}: MainProps) {
  const [githubProfile, setGithubProfile] = useState<GithubProfile>();
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetchGithubReposByUser(githubUser)
      .then(repos => {
        setGithubRepos(repos);
      });

    fetchGithubUser(githubUser)
      .then(user => {
        setGithubProfile(user);
      });

  }, [githubUser]);

  return (
    <main>
      <img
        src={githubProfile?.avatar_url}
        alt={`${githubProfile?.name} profile image`}
        className="profile-img"
      />
      <div className="infopill-container">
        <InfoPill keyInfo="Followers" valueInfo={githubProfile?.followers?.toString()!} />
        <InfoPill keyInfo="Following" valueInfo={githubProfile?.following?.toString()!} />
        <InfoPill keyInfo="Location" valueInfo={githubProfile?.location!} />
      </div>
      <h1 className="title-page">{githubProfile?.name || githubProfile?.login}</h1>
      <p className="subtitle-page">{githubProfile?.bio}</p>
      <div className="repository-container">
        {
          githubRepos.map(repo => (
            <Repository
              key={repo.name}
              repoTitle={repo.name}
              repoDescription={repo.description || 'No description'}
              repoLicense={repo.license ? repo.license.name : 'No license'}
              repoForks={repo.forks_count}
              repoStars={repo.stargazers_count}
              repoUpdateInfo={`updated at ${new Date(repo.updated_at).toLocaleDateString()}`}
            />
          ))
        }
      </div>
    </main>
  );
}

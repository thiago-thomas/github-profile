//WIP: hook personalizado

import { useEffect, useState } from "react";
import { fetchGithubReposByUser, fetchGithubUser } from "../services/api";

type GithubUserAndReposInfo {
  githubProfile: GithubProfile,
  githubRepo: GithubRepo[]
}

type GithubProfile = {
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
};

type GithubRepo = {
  name: string;
  description: string;
  license: {
    name: string;
  } | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
};

type GithubDataProps = {
  githubUser: string;
};

export function useGithubData({ githubUser }: GithubDataProps) {
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(
    null
  );
  const [githubRepos, setGithubRepos] = useState<GithubRepo[] | null>(null);
  const [githubUserAndReposInfo, setGithubUserAndReposInfo] = useState<GithubUserAndReposInfo | null>(null)

  useEffect(() => {
    fetchGithubUser(githubUser).then((user) => setGithubProfile(user));
    fetchGithubReposByUser(githubUser).then((repos) => setGithubRepos(repos));

  }, [githubUser]);
}

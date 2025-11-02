const API_URL = 'https://api.github.com';

export function fetchGithubReposByUser(user: string) {
  return fetch(`${API_URL}/users/${user}/repos`)
    .then(response => response.json());
}

export function fetchGithubUser(user: string) {
  return fetch(`${API_URL}/users/${user}`)
    .then(response => response.json());
}
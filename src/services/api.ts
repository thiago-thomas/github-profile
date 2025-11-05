const API_URL = 'https://api.github.com';

export async function fetchGithubReposByUser(user: string): Promise<any> {
  try {
    const url = `${API_URL}/users/${user}/repos`
    const response = await fetch(url);

    if(!response.ok) {
      throw new Error(`Error on requesting repos: ${response.status}`)
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`An error occurred: ${error}`)
  }
}

export async function fetchGithubUser(user: string): Promise<any> {
  try {
    const url = `${API_URL}/users/${user}`
    const response = await fetch(url);
    
    if(!response.ok) {
      throw new Error(`Error on requesting user: ${response.status}`)
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`An error occurred: ${error}`)
  }
}
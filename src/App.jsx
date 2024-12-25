import React, { useState } from "react";
import SearchBar from "/components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGitHubData = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const user = await userResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await repoResponse.json();

    setUserData(user);
    setRepos(repos);
  };

  return (
    <div className="app-container">
      <header className="app-header">GitHub Finder</header>
      <SearchBar onSearch={fetchGitHubData} />
      {userData && <UserProfile user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default App;

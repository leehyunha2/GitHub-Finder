import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      <h3>Latest Repos</h3>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Watchers: {repo.watchers_count}</p>
          <p>Forks: {repo.forks}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;

import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      <h3>Latest Repos</h3>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <div className="repo-stats">
            <span>Stars: {repo.stargazers_count}</span>
            <span>Watchers: {repo.watchers_count}</span>
            <span>Forks: {repo.forks || "N/A"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;

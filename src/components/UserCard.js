import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <ul>
        <li>Public Repos: {user.public_repos}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
      </ul>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;

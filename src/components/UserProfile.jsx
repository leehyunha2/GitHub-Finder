import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt="Profile" />
      <h2>{user.name || user.login}</h2>
      <p>Company: {user.company || "N/A"}</p>
      <p>Website/Blog: {user.blog || "N/A"}</p>
      <p>Location: {user.location || "N/A"}</p>
      <p>Member Since: {new Date(user.created_at).toLocaleDateString()}</p>
      <div className="user-stats">
        <span>Public Repos: {user.public_repos}</span>
        <span>Public Gists: {user.public_gists}</span>
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
      </div>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <button>View Profile</button>
      </a>
    </div>
  );
};

export default UserProfile;

import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "300px" }}
      />
      <button onClick={fetchGitHubData} style={{ padding: "10px 20px" }}>
        Search
      </button>
      {userData && (
        <div style={{ marginTop: "20px", textAlign: "left", marginLeft: "40%", marginRight: "40%" }}>
          <img src={userData.avatar_url} alt="avatar" style={{ width: "150px", borderRadius: "50%" }} />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;

import React from 'react';

const GitHubButton = ({ githubUrl }) => {
  const handleGitHubClick = () => {
    window.open(githubUrl, '_blank');
  };

  return (
    <button className="carousel-button" onClick={handleGitHubClick}>
      View on GitHub
    </button>
  );
};

export default GitHubButton;


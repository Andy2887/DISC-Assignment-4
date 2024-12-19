import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../common/UIComponents';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profiles');
  };

  return (
    <button className="get-started-btn" onClick={handleClick}>
      <h2>Get Started</h2>
    </button>
  );
}


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <Title CN="welcome-title" content = "Welcome to WeConnect!"/>
        <Title CN="welcome-subtitle" content = "The largest friend match-making platform at Northwestern"/>
        <Button />
      </div>
      <img src="/images/Friends Pic.jpg" alt="Friends" className="friends-image"/>
    </div>
  )
}
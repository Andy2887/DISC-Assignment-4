import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profiles');
  };

  return (
    <button style={{ backgroundColor: '#392AB8', color: 'white' }} onClick={handleClick}>
      <h2>Get Started</h2>
    </button>
  );
}


export default function Home() {
  return (
    <div>
      <h1>Welcome to WeConnect!</h1>
      <h2>The largest friend match-making platform at Northwestern</h2>
      <Button />
    </div>
  )
}
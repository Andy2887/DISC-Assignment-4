import React from 'react';

import { Outlet } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

// Navigation bar definition
function Nav(){
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    }

    return(
      <nav className = "nav">
        <h1>DISC</h1>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        {isAuthenticated ? (
          <>
            <Link to ='/create'>Create</Link>
            <a onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</a>
          </>

        ) : (
          <>
            <Link to ='/login'>Login</Link>
            <Link to ='/register'>Register</Link>
          </>
        )}
      </nav>
    );
}

// root definition
function Root(){
    return(
      <div class = "footer">
        <div>
          <h2>Discover & Innovate for Social Change</h2>
          <img src= "/images/Facebook Icon.png" alt = "Facebook Image Logo"/>
          <img src= "/images/Github Icon.png" alt = "Facebook Image Logo"/>
          <img src= "/images/Instagram Icon.png" alt = "Facebook Image Logo"/>
        </div>
      
        <a>Legal Stuff</a>
        <a>Privacy Policy</a>
        <a>Security</a>
        <a>Website Accessibility</a>
      </div>
    );
}

export default function Layout() {
  return (
    <div className="body">
      <Nav />
      <div className="main-content">
        <Outlet />
      </div>
      <Root />
    </div>
  );
}
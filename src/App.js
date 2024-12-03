import './App.css';
import { useState, useEffect } from 'react';


// Navigation bar definition
function Nav(){
  return(
    <nav className = "nav">
      <h1>DISC</h1>
      <a href='home.html'>Home</a>
      <a href='about.html'>About</a>
      <a href='create.html'>Create</a>
    </nav>
  );
}

// title bar definition
function Title(){
  return(
    <div class = "title">
      <h1>Find Your Friends!</h1>
    </div>
  );
}

// profile card definition
function ProfileCard(props){
  return(
    <div class = "profile">
      <img src={`/images/${props.avatar}.png`} alt="Profile" />
      <div class="text">
        <p>{props.name}</p>
        <hr />
        <p>{props.description}</p>
      </div>
    </div>
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



// the main function
function App() {
  return (
  <div>
    <Nav />
    <Title />
    <ProfileCard name = "Justin Bieber" description = "Baby Baby Baby Oh" avatar = "avatar_1"/>
    <ProfileCard name = "Darth Vadar" description = "I want you to know the power of the dark side" avatar="avatar_2"/>
    <ProfileCard name = "Bruce Wayne" description = "You wanna know my secret identity?" avatar="avatar_3"/>
    <Root />
  </div>
  );
}

export default App;

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
        <div class="text">
          <p>{props.name}</p>
          <hr />
          <p>{props.description}</p>
        </div>
    </div>
  );
}



// the main function
function App() {
  return (
  <div>
    <Nav />
    <Title />
    <ProfileCard name = "John Doe" description = "I am a student at UBC" />
    <ProfileCard name = "Jane Cruise" description = "I am a student at SFU" />
    <ProfileCard name = "Jack Smith" description = "I am a student at BCIT" />
  </div>
  );
}

export default App;

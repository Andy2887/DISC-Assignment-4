import { useState, useEffect } from 'react';
import React from 'react';

// profile card definition
function ProfileCard(props){
    const [select, setSelect] = useState(false);
  
    const handleSelect = () => {
      setSelect(!select);
    }
  
    useEffect(() => {
      console.log("Color changed");
    }, [select]);
  
    return(
      <div class = "profile" onClick={handleSelect} style={{ borderColor: select ? 'red' : 'transparent' }}>
        <img src= {props.image} alt="Profile" />
        <div class="text">
          <p>{props.name}</p>
          <hr />
          <p>{props.description}</p>
        </div>
      </div>
    );
  
}

// title bar definition
function Title(){
    return(
        <div style={{ color: '#392AB8', opacity: 0.8, display: 'flex', justifyContent: 'center' }}>
            <h1>Find Your Friends!</h1>
        </div>
    );
}


export default function ProfileList() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      const fetchProfiles = async () => {
          const response = await fetch('https://dummyjson.com/users');
          const data = await response.json();
          setProfiles(data.users);
      } 
      fetchProfiles();  
    }, [profiles]);


    return(
      <div class = "body">
          <Title />
          <div class = "profile_list">
            {profiles.map((profile) => (
              <ProfileCard name={profile.firstName} image={profile.image} description={profile.email} />
                  
            ))}
          </div>
      </div>
    );

}

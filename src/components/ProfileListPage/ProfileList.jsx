import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../common/UIComponents';
import React from 'react';

// profile card definition
function ProfileCard(props){
    const [select, setSelect] = useState(false);
    const navigate = useNavigate();

    const handleSelect = () => {
      setSelect(!select);
      navigate(`/profiles/${props.id}`);
    }
  
  
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

    const ProfileCards = useMemo(() => {
      return profiles.map((profile) => {
        return <ProfileCard key = {profile.id} id={profile.id} name={profile.firstName} description={profile.university} image={profile.image} />
      });
    }, [profiles]);


    return(
      <div class = "body">
          <Title CN = "ProfileList-title" content = "Find Your Friends!"/>
          <div class = "profile_list">
            {ProfileCards}
          </div>
      </div>
    );

}

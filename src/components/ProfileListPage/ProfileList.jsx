import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../common/UIComponents';
import React from 'react';
import { API_URL } from '../../config';

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
        <div class="text">
          <p>{props.first_name} {props.last_name}</p>
          <hr />
          <p>{props.hobby}</p>
        </div>
      </div>
    );
  
}


export default function ProfileList() {
    const [profiles, setProfiles] = useState([]);
    const isAuthenticated = localStorage.getItem('token');

    const getProfiles = async () => {
      const response = await fetch (`${API_URL}/api/users`, {method: 'GET'});
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Fetch failed');
      }
      setProfiles(data)
  }

    useEffect(() => {
      getProfiles();
    }, []);

    const ProfileCards = useMemo(() => {
      return profiles.map((profile) => {
        return <ProfileCard key = {profile.id} id={profile.id} first_name={profile.first_name} last_name={profile.last_name} hobby={profile.hobby}/>
      });
    }, [profiles]);


    return(
      <div class = "body">
          <Title CN = "ProfileList-title" content = "Find Your Friends!"/>
          {!isAuthenticated && 
            <p className="login-warning">
              You must login to create your profile!
            </p>
          }
          <div class = "profile_list">
            {ProfileCards}
          </div>
      </div>
    );

}

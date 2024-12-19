import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Profile() {
    const[profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const { profileID } = useParams();

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`https://dummyjson.com/users/${profileID}`);
            const data = await response.json();
            setProfile(data);
        }
        fetchProfile();
    }, [profileID]);

    const profileContent = useMemo(() => {
        return profile ? (
            <div key={profile.id} className="profile">
                <h1>{profile.firstName} {profile.lastName}</h1>
                <img src= {profile.image} alt="Profile"/>
            </div>
        ) : (
            <div>Loading...</div>
        );
    }, [profile]);

    return(
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {profileContent}
            <button onClick={() => navigate('/')}>Return</button>
        </div>
    );
}

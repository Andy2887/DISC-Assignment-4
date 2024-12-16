import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';


export default function Profile() {
    const[profile, setProfile] = useState(null);

    const { profileID } = useParams();

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`https://dummyjson.com/users/${profileID}`);
            const data = await response.json();
            setProfile(data);
        }
        fetchProfile();
    }, [profileID]);

    return(
        <div>
            {profile ? (
                <div key={profile.id} className="profile">
                    <h1>{profile.firstName} {profile.lastName}</h1>
                    <img src= {profile.image} alt="Profile"/>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

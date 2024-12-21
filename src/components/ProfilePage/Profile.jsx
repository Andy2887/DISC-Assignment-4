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
            const response = await fetch(`http://localhost:3001/users/${profileID}`, {method: 'GET'});
            const data = await response.json();
            setProfile(data);
        }
        fetchProfile();
    }, [profileID]);

    const profileContent = useMemo(() => {
        return profile ? (
            <div className="profile-card">
                <h1>{profile.first_name} {profile.last_name}</h1>
                <hr />
                <p>Hobby: {profile.hobby}</p>
                <p>Email: {profile.email}</p>
            </div>
        ) : (
            <div>Loading...</div>
        );
    }, [profile]);

    return(
        <div className="profile-container">
            {profileContent}
            <button className="return-btn" onClick={() => navigate('/profiles')}>
                Return to Profiles
            </button>
        </div>
    );
}

import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';


export default function Profile() {
    const[profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const { profileID } = useParams();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch (`${API_URL}/api/user-profile/${profileID}`, {method: 'GET'});
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Fetch failed');
                }

                setProfile(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProfile();
    }, [profileID]);

    const profileContent = useMemo(() => {
        return profile ? (
            <div className="profile-card">
                <h1>{profile.first_name} {profile.last_name}</h1>
                <hr />
                <p>Bio: {profile.user_profiles.bio}</p>
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

import React, {useState} from 'react';
import { Title, FormInput } from '../common/UIComponents';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

export default function Create() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [hobby, setHobby] = useState('');
    const [bio, setBio] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateDate = (date) => {
        // Check format
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return false;
        }

        // Convert to Date object
        const [year, month, day] = date.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);

        // Check if date is valid and matches input
        return dateObj && 
               dateObj.getFullYear() === year &&
               dateObj.getMonth() === month - 1 &&
               dateObj.getDate() === day &&
               year <= new Date().getFullYear(); // Ensure year is not in future
    };



    const handleCreate = async (e) => {
        e.preventDefault();
        setError('');

        // Validate email
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Validate date
        if (!validateDate(date_of_birth)) {
            setError('Please enter a valid date in format YYYY-MM-DD');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/user-profile/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first_name, last_name, email, hobby, bio, date_of_birth })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Profile creation failed');
            }
            
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };


    return(
        <div className="create-container">
            <Title content = "Create Your Profile!" CN = "create-title"/>
            <form onSubmit={handleCreate}>
                <FormInput id="First Name" value = {first_name} setFunction={setFirstName}/>
                <FormInput id="Last Name" value = {last_name} setFunction={setLastName}/>
                <FormInput id="Email" value = {email} setFunction={setEmail}/>
                <FormInput id="Hobby" value = {hobby} setFunction={setHobby}/>
                <FormInput id="Bio" value = {bio} setFunction={setBio}/>
                <FormInput id="Date of Birth" value = {date_of_birth} setFunction={setDateOfBirth}/>
                <p className="date-format-hint">Please enter in the form of "xxxx-xx-xx"</p>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-btn">Create Profile</button>
            </form>
        </div>
    );
}
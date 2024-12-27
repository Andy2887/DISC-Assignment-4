import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Title } from '../common/UIComponents';

const API_URL = 'https://disc-discovery-application-backend.vercel.app';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }
            
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">
            <Title content="Welcome Back!" CN="auth-title" />
            <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-btn">Login</button>
            </form>
            <p className="auth-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Title } from '../common/UIComponents';

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginSuccess = location.state?.type === 'login';

  return (
    <div className="success-container">
      <div className="success-card">
        <Title 
          content={isLoginSuccess ? "Login Successful!" : "Registration Successful!"} 
          CN="success-title"
        />
        <p className="success-message">
          {isLoginSuccess 
            ? "Welcome back! You have successfully logged in." 
            : "Please check your email to verify your account before logging in."}
        </p>
        <button 
          className="return-btn" 
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
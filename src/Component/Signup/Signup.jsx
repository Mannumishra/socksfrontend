import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Sign Up</h1>
        <p>Create a new account to get started.</p>
      </div>
      <div className="signup-content">
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

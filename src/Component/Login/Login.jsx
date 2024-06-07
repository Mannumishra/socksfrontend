import React, { useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  },[])
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
        <p>Welcome back! Please login to your account.</p>
      </div>
      <div className="login-content">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
          <p><Link href="/forgot-password">Forgot your password?</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

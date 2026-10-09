/*
 * Traced IDs: CMP-AUTH, FR-LOGIN-01, STORY-LOGIN-001
 * Purpose: Login form UI with client-side validation and submit handler stub.
 * NOTE: Representative scaffold. Replace submit stub with real auth API call
 *       (POST /api/auth/login). Never hardcode credentials. Use <API_BASE_URL>.
 */
import React, { useState } from 'react';
import './Login.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '<API_BASE_URL>';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.username.trim()) errs.username = 'Username is required';
    if (!formData.password) errs.password = 'Password is required';
    else if (formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage('Login successful');
      } else {
        setMessage('Invalid credentials');
      }
    } catch (err) {
      setMessage('Unable to reach server');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h2>Sign In</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit" disabled={submitting}>
          {submitting ? 'Signing in...' : 'Login'}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;

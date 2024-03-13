import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Dummy credentials for demonstration
    if (username === 'demo' && password === 'mobilefirst') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;

// src/pages/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here using id and password
    // ...
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button onClick={handleLogin}>Login</button>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LoginPage;

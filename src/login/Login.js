import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  // Formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (values) => {
    try {
      const res = await axios.post('http://localhost:5002/auth/login', values)
      console.log('res', res);
      await localStorage.setItem('token', res.data.token); 
      navigate('/app/privateRoute');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <input type="email" className="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={() => handleLogin({ email, password })}>Login</button>
    </div>
  );
};

export default Login;

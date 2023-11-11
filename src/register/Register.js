import React,{useState} from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom'; 
import { postauthUser } from '../api/authapi';

const Register = () => {
 const {name,setName}=useState('')
 const{lastname,setLastname}=useState('')
 const{email,setEmail}=useState('')
 const{password,setPassword}=useState('')
 
 
 
 
 
 
  const navigate = useNavigate(); 
  const login = async (value) => {
    await postauthUser(value);
    navigate('/login'); 
  };

  return (
    <div>
      <div className="wrapper">
        <h1>Register For An Account</h1>
        <p>
          To sign-up for a free basic account please provide us with some basic
          information using the contact form below. Please use valid credentials.
        </p>
        <form className="form" method="post" action="yourpage.html">
          <p className="name-help">Please enter your first and last name.</p>
          <input type="text" className="name" placeholder="Name" value={name}onChange={(e)=>setName(e.target.value)}/>
          <input type="text" className="last name" placeholder="last name"value={lastname}onChange={(e)=>setLastname(e.target.value)} />

          <p className="email-help">Please enter your current email address.</p>
          <input type="email" className="email" placeholder="Email"value={email}onChange={(e)=>setEmail(e.target.value)} />
          <div>
            <p className="email-help">You are already registered!</p>
            <input type="text" className="login" placeholder="Login"/>

            <input type="password" className="password" placeholder="Password"value={password}onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <input type="submit" className="submit" defaultValue="Register"value={name}onChange={(e)=>(e.target.value)} />
          <button onClick={() => login({name,lastname,email,password})}>Login</button>

        </form>
      </div>
      <p className="optimize">Optimized for Chrome &amp; Firefox!</p>
    </div>
  );
};

export default Register;

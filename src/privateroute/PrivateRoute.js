import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAutUser } from '../api/authapi'; 

import Login from '../login/Login';
import User from '../login/User/User';
import Admin from '../components/Admin/Admin';
import NavbarContactciner from '../navbar/NavbarContactiner';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAutUser(); 
        setAuthData(data);
        console.log('data auth,', data);
      } catch (error) {
        console.error('Error fetching authentication data', error);
        navigate('/login');
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {authData ? (
        <>
          <User />
          <Admin />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAutUser } from '../api/authapi'; 
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/authSlice';
import Login from '../login/Login';
import User from '../login/User/User';
import Admin from '../components/Admin/Admin';
import NavbarContactciner from '../navbar/NavbarContactiner';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAutUser(); 
        setAuthData(data);
        console.log('data auth,', data);
        dispatch(setAuth(data));
      } catch (error) {
        console.error('Error fetching authentication data', error);
        navigate('/login');
      }
    };

    fetchData();
  }, []);

  const token = localStorage.getItem('token');
  navigate('/login');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      {authData ? (
        <div>
          <NavbarContactciner auth={authUser} logout={logout} />
          <User />
          <Admin />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default PrivateRoute;

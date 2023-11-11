import Register from './register/Register'
import Login from './login/Login'
import {Routes,Route} from 'react-router-dom'
import React from 'react';
import PrivateRoute from './privateroute/PrivateRoute';
function App() {
  return (
    <div >
      <Routes>
<Route path="/" element={<Register/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path='App/privateRoute'element={<PrivateRoute/>}/>
</Routes>
    </div>
  );
}

export default App;

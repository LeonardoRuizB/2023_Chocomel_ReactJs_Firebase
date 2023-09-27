import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/User/Login';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/painel/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

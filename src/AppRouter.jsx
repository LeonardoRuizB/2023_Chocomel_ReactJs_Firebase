import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home/Home";
import Login from './Components/User/Login';
import ControlPanel from './Components/Control Panel/ControlPanel';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path="/controlpanel"
            element={<PrivateRoute component={ControlPanel} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
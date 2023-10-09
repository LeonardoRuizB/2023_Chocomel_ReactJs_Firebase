import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home/Home";
import Login from './Components/User/Login';
import ControlPanel from './Components/Control Panel/ControlPanel';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import AllProductsPage from './Components/Home/Products/AllProductsPage';
import ProductDetails from './Components/Home/Products/ProductDetails';

function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/controlpanel'
            element={<PrivateRoute component={ControlPanel} />}
          />
          <Route path='*' element={<NotFound />} />
          <Route path='/produtos' element={<AllProductsPage />} />
          <Route path='/produtos/:id' element={<ProductDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
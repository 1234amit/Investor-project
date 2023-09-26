import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateUserSchema from './pages/Admin/CreateUserSchema';
import ViewUsers from './pages/Admin/ViewUsers';
import Profile from './pages/user/Profile';
import ViewAllUsersSchema from './pages/Admin/ViewAllUsersSchema';
import UpdateAllUsersSchema from './pages/Admin/UpdateAllUsersSchema';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />


        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user/:userId" element={<Dashboard />} />
          {/* <Route path="user/:userId" element={<Profile />} /> */}
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-user-schema" element={<CreateUserSchema />} />
          <Route path="admin/view-users" element={<ViewUsers />} />
          <Route path="admin/viewUsersSchema" element={<ViewAllUsersSchema />} />
          <Route path="admin/updateUsersSchema/:id" element={<UpdateAllUsersSchema />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
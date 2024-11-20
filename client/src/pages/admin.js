import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Admin = () => {
  return (
   
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-72 bg-gray-900 text-white flex flex-col">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold tracking-wide text-blue-400">Admin Panel</h1>
          </div>
          <ul className="space-y-6 px-4">
            <li>
              <Link 
                to="/dashboard" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <i className="fas fa-home text-blue-400 text-xl mr-3"></i>
                <span className="text-lg font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/users" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <i className="fas fa-users text-blue-400 text-xl mr-3"></i>
                <span className="text-lg font-medium">Manage Users</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <i className="fas fa-cog text-blue-400 text-xl mr-3"></i>
                <span className="text-lg font-medium">Settings</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/logout" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <i className="fas fa-sign-out-alt text-blue-400 text-xl mr-3"></i>
                <span className="text-lg font-medium">Logout</span>
              </Link>
            </li>
          </ul>
          <div className="mt-auto p-6">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Admin Dashboard. All rights reserved.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                  <p className="mt-4 text-gray-600">Welcome to the admin dashboard!</p>
                </div>
              }
            />
            <Route
              path="/users"
              element={
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
                  <p className="mt-4 text-gray-600">Here you can manage all users.</p>
                </div>
              }
            />
            <Route
              path="/settings"
              element={
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                  <p className="mt-4 text-gray-600">Adjust your settings here.</p>
                </div>
              }
            />
            <Route
              path="/logout"
              element={
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Logout</h1>
                  <p className="mt-4 text-gray-600">You have been logged out successfully.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    
  );
};

export default Admin;

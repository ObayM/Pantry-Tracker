'use client'
import React, { useState } from 'react';
import { Github } from 'lucide-react';
import LoginComponent from './login.jsx';
import SignupComponent from './signup.jsx';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div style={{minHeight:'calc(100vh - (64px + 88px)'}} className="bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center  justify-evenly px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 animate-pulse">
            Welcome to Pantry Tracker
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Organize your pantry, plan your meals, and shop smarter!
          </p>
          <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/obayM/pantry-Tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </a>
          </div>
        </div>



        <div className="mt-8">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                activeTab === 'login'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                activeTab === 'signup'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            {activeTab === 'login' ? (
              <LoginComponent />
            ) : (
              <SignupComponent />
            )}
          </div>
        </div>

    </div>
  );
};

export default LandingPage;
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Login</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-md p-2 w-full mt-1"
                id="username"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md p-2 w-full mt-1"
                id="password"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

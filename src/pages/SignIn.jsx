import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const navigate = useNavigate();
     const handlehomepage = () => {
    navigate('/');
     };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In to Your Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button onClick={handlehomepage}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

// pages/login.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div>
      

      <div className="container mx-auto mt-12 px-4 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered w-full"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="input input-bordered w-full"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-between">
              <button className="btn bg-rose-400 w-full" type="submit">
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-rose-400 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

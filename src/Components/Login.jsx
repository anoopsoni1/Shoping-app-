import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const hello = ()=>{
     alert("This service is not working")
  }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
  
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <a className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
  
            <button onClick={hello}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sign In
              
            </button>
          </form>
  
          <div className="mt-6 text-center text-sm text-gray-500">
            Or sign in with
          </div>
  
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full hover:shadow-md transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-6 w-6" />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:shadow-md transition">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-6 w-6" />
            </button>
          </div>
  
          <div className="mt-6 text-sm text-center">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
  
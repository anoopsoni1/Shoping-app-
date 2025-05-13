import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth  } from '../Firebase';
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { provider } from '../Firebase';
export default function LoginPage() {
  const [email ,setemail] = useState("") ;
  const [password ,setpassword] = useState("") ;
   const Handlesubmit = async (e)=>{
      e.preventDefault() ;
    try {
      await signInWithEmailAndPassword(auth ,email ,password)
      console.log("userloggedin");
      window.location.href = "/profile"
       toast.success(`${email} Login Succesfully` , {
          position : "top-center" ,
          autoClose : 4000 ,
          pauseOnHover : false,
        });
    } catch (error) {
      console.log(error)
        toast.success(`${error}` , {
                position : "bottom-center" ,
                autoClose : 4000 ,
                pauseOnHover : false,
          } )
    }
   }
      
    const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
         const user = result.user;
      console.log("Logged in as:", user.displayName);
           
    }  catch (error) {
      console.error("Login error:", error);
    }
  };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
  
          <form className="space-y-4" onSubmit={Handlesubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                 autoComplete='current-email'
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                 autoComplete='current-password'
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <a className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
    
              <button
              className="w-full text-white bg-slate-800 py-1 rounded-xl font-semibold transition"
                >
             Sign In  
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            Or sign in with
          </div>
  
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full hover:shadow-md transition">
              <img onClick={handleGoogleLogin} src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-6 w-6" />
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
  
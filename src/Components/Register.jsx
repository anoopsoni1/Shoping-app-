import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth ,db } from '../Firebase';
import {setDoc ,doc} from 'firebase/firestore'
import { toast } from 'react-toastify';
const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       try {
      await createUserWithEmailAndPassword(auth , form.email ,form.password) ;
      const user = auth.currentUser ;
      console.log(user)
      if(user){
        await setDoc(doc(db ,"Users" ,user.uid),{
          email :user.email ,
        })
  toast.success(`${form.email} Registered Succesfully` , {
    position : "top-center" ,
    autoClose : 4000 ,
    pauseOnHover : false,
  });
      }
       } catch (error) {
        toast.success(`${error}` , {
          position : "bottom-center" ,
          autoClose : 4000 ,
          pauseOnHover : false,
        } )
       }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>


        <div className="mb-4" id="one">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            autoComplete='current-email'
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4" id="two">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            autoComplete='current-password'
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>



        <button id="three"
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

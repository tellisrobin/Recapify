import React, { useState } from 'react'

// UI for login page
const Auth = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  function validate(){
    return email.length>0 && password.length >0;
  }
  

  return (
   <div className=' mb-10 border border-solid rounded'>
      <h2 className=' mt-6 mb-6 text-center text-xl text-white font-extrabold'> Login </h2>
      <input className='text-sm mb-4 w-full px-4 py-2 border border-solid border-white rounded'
      type='text' 
      placeholder='email'
      />
      <input className='text-sm mb-4 w-full px-4 py-2 border border-solid border-white rounded'
      type='text' 
      placeholder='password'
      />
      <div className="text-center md:text-center">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
      </div>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center ">
          Don't have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Signup
          </a>
        </div>
   </div>
  )
}

export default Auth
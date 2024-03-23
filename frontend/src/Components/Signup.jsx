import React, {useState} from 'react'

const Signup = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          console.log(data.message);
        } catch (error) {
          console.error('Error:', error);
        }
      };  

  return (
    <div className=' mb-10 border border-solid rounded'>
      <h2 className=' mt-6 mb-6 text-center text-xl text-white font-extrabold'> Login </h2>
      <form onSubmit={handleSubmit}>
      <input className='text-sm mb-4 w-full px-4 py-2 border border-solid border-white rounded'
      type='text' 
      placeholder='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
      <input className='text-sm mb-4 w-full px-4 py-2 border border-solid border-white rounded'
      type='text' 
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      />
      <div className="text-center md:text-center">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Signup
          </button>
      </div>
      </form>
   </div>
  )
}

export default Signup
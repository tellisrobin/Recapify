import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth.jsx"
import Signup from "./Components/Signup.jsx"
import Home from './Components/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //   <div>
  //     <Navbar></Navbar>
  //   </div>  
  //   </>
  // )
  return (
    <div className=' min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <BrowserRouter>  
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App

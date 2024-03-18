import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth.jsx"


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
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

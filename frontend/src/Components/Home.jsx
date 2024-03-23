import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import Auth from './Auth'

const Home = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
       const loggedInUser = localStorage.getItem("user");
       //console.log("loggedInUser:", loggedInUser);
         if (loggedInUser) {
           const foundUser = (loggedInUser);
           console.log("Logged USer" +foundUser);
           setUser(foundUser);
         }
     }, []); 
    return (
        <div>
        {user ? <Navbar /> : <Auth />}
        </div>
  )
}

export default Home

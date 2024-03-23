import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import Auth from './Auth'

const Home = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
       const loggedInUser = localStorage.getItem("user");
       //console.log("loggedInUser:", loggedInUser);
         if (loggedInUser) {
           const foundUser = (loggedInUser);
           console.log("Logged USer" +foundUser);
           setUser(foundUser);
         }
         setIsLoading(false);
     }, []); 
    return (
        <div>
        {isLoading ? (
                <div></div>
            ) : (
                user ? <Navbar /> : <Auth />
            )}
        </div>
  )
}

export default Home

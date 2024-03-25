import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import Auth from './Auth'
import File from './File'

const Home = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [file, setFile] = useState(null);
    const [summarizedText,setSummarizedText] = useState("Test");
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
                user ? <>
                <Navbar />
                <div className=' text-center px-5 py-5 align-middle m-5 border border-y-cyan-50 rounded '>
                    <input type="file" className='w-full' />
                </div>
                
                <button className='mt-1 mb-1' >
                        Summarize
                </button>
                <div className='text-center  m-3'>
                    <textarea 
                        rows={10}
                        cols={60}
                        readOnly
                        className="w-full"
                    />
                </div>
                {/* Save and Discard buttons */}
            {summarizedText && (
                <div>
                    <button className='m-1'>Save</button>
                    <button className='m-1'>Discard</button>
                </div>
            )}
                </>
                : <Auth />
            )}
        </div>
  )
}

export default Home

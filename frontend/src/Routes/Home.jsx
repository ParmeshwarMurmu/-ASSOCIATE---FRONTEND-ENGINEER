import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navigation from '../Components/Navigation'
import InboxContent from '../Components/InboxContent';
import { useParams } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';


const Home = ({children}) => {
  let { onebox } = useParams();
  

  console.log(onebox, "onebox")
  

    // State to hold the token
    const [token, setToken] = useState('');
    
    let authToken = JSON.parse(localStorage.getItem('onebox'));

    const { theme } = useSelector((store) => {
      return {
          theme: store.ThemeReducer.theme,
      }
  }, shallowEqual)

    useEffect(() => {
      // Function to extract token from URL
      const getTokenFromUrl = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = searchParams.get('token');
        if(tokenFromUrl){
          localStorage.setItem('onebox', JSON.stringify(tokenFromUrl))
          setToken(tokenFromUrl);
        }
        

      };
  
      // Call the function to extract token from URL when component mounts
      getTokenFromUrl();
    }, []);

    console.log("token", token);
    console.log("authToken", authToken);

  return (
    <div className='flex'>

      {/* sidebar */}
      <div className={`w-56 h-760 bg-sideBarBackgroundColor border-r-8 border-red-600`}>
        <Sidebar />
      </div>

      {/* main */}

      <div className='h-760 '>

        <div className={`w-1383 h-64 ${theme==='darkTheme' ? 'bg-navigationBackgroundColor' : 'bg-white' }  pt-21 pb-21 pl-33 `}>
          <Navigation />
        </div>

        {/* <div className={`w-1383`}>
          <InboxContent />
        </div> */}
      </div>
    </div>
  )
}

export default Home

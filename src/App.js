import React, {useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Context from './context/Context';
import APIEndPoints from './common/APIEndPoints';
import axios from 'axios';

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/login', '/signup'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);


//   const fetchUserDetails = async () => {
//     try {
//         const response = await axios.get(APIEndPoints.currentUser.url, {
//          withCredentials: "include"
//         });
//         const data = response.data;
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error("Error fetching user details:", error);
//         throw error; // rethrow the error so the calling code can handle it
//     }
// };


  // useEffect(()=>{
  //   /**user Details */
  //   fetchUserDetails()

  // },[]);

  return (
    <>
      {/* <Context.Provider value={{fetchUserDetails}}> */}

        <Toaster />
        {shouldShowHeaderFooter && <Header />}
        <main>

          <Outlet />
        </main>

        {shouldShowHeaderFooter && <Footer />}
      {/* </Context.Provider> */}


    </>

  );
}

export default App;

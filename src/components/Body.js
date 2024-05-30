import React, { useEffect } from 'react'
import LoginAuth from "./LoginAuth"
import Browse from "./Browse";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";  
import { addUser, removeUser } from '../redux/userSlice';

export const Body = () => {

  const dispatch=useDispatch(null);

  const appRouter=createBrowserRouter([
    { 
      path:"/",
      element:<LoginAuth/>
    },
    {
      path:"/browse",
      element:<Browse/>

    }

  ])

  useEffect(()=>{

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    // User is signed in, 
         const {uid,email,displayName} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
       // User is signed out
          dispatch(removeUser());
      }
      });

  },[])
  

  return (
    <>  
        {/* <h1>Unlimited movies, TV shows and more</h1> */}
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body;

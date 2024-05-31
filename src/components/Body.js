import React from 'react'
import LoginAuth from "./LoginAuth"
import Browse from "./Browse";
import {RouterProvider, createBrowserRouter} from "react-router-dom"

export const Body = () => {
  
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

 
  

  return (
    <>  
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body;

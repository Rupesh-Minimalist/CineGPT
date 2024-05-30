import React from 'react'
import logo from "../images/logo.png"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Browse = () => {

  const navigate=useNavigate();

  const handleSignout=()=>{
    
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
      }).catch((error) => {
        // An error happened.
        navigate("/Error")
      });
  }
  return (
    <>      

            <div className="text-white flex items-start justify-around  w-full gap-[700px] bg-black">
                <img src={logo} alt="logo" className="w-32 pt-5"></img>
                <div className='flex items-center'>
                  <img className='px-3 py-1 mt-10' src='https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='userLOGO'>
                  </img>
                  <button onClick={handleSignout} className="rounded bg-red-600 px-3 py-1 hover:bg-red-700 mt-10 ml-4">Sign out</button>
                </div>
                
            </div>   

            <div className='bg-black h-screen w-full'></div>
    
    </>
  )
}

export default Browse
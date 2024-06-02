import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../images/logo.png"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { userLOGO } from "../utils/constant";
const Header=()=>{

    const dispatch=useDispatch(null);
    const navigate=useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignout=()=>{
    
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          // navigate("/")
        }).catch((error) => {
          // An error happened.
          // navigate("/Error")
        });
    }

    useEffect(()=>{

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, 
             const {uid,email,displayName} = user;
             dispatch(addUser({uid:uid,email:email,displayName:displayName}));
             navigate("/Browse")
          } else {
            // User is signed out
              dispatch(removeUser());
              navigate("/")
          }
          });
    
      },[])

    return(
        <> 
            <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black  z-20 flex flex-col md:flex-row justify-between">
                 <img src={logo} alt="logo" className="w-32 pt-5"></img>
                {user && <div className='flex items-center'>
                 <img className='px-3 py-1 mt-10' src={userLOGO} alt='userLOGO'></img>
                 <button onClick={handleSignout} className="rounded bg-red-600 px-3 py-1 hover:bg-red-700 mt-10 ml-4 text-white">Sign out</button>
                </div>}
            </div>     
        </>
    );

}

export default Header;
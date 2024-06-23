import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../images/logo.png"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES, userLOGO } from "../utils/constant";
import { toggleGPTbtn } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header=()=>{

    const dispatch=useDispatch(null);
    const navigate=useNavigate();
    const user = useSelector(store=>store.user);
    const gptView=useSelector(store=>store.gpt.showGPTsearch)

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

    const HandleGPT=()=>{
      dispatch(toggleGPTbtn())
    }

    const HandleLangChange=(evt)=>{
      dispatch(changeLanguage(evt.target.value))
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
                 <button className="rounded-3xl bg-gray-700 bg-opacity-50 px-28 py-2 hover:bg-opacity-60 hover:bg-red-500 hover: mt-10  text-white font-bold text-xl mr-40 shadow-2xl" onClick={HandleGPT}>{gptView? "Search Browse" :"Search GPT"}</button> 

                 <select className="bg-transparent text-white text-lg px-3 py-1 mt-10 " onChange={HandleLangChange}>
                   {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>{lang.name}
                        </option>
                     ))}
                 </select>

                 <img className='px-3 py-1 mt-10 ml-4' src={userLOGO} alt='userLOGO'></img>
                 <button onClick={handleSignout} className="rounded bg-red-600 px-3 py-1 hover:bg-red-700 mt-10 ml-4 text-white">Sign out</button>
                </div>}
            </div>     
        </>
    );

}

export default Header;
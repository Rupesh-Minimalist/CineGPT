import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES, userLOGO } from "../utils/constant";
import { toggleGPTbtn } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.showGPTsearch);
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/Error");
      });
  };

  const HandleGPT = () => {
    dispatch(toggleGPTbtn());
  };

  const HandleLangChange = (evt) => {
    dispatch(changeLanguage(evt.target.value));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  return (
    <>
      <div className={`fixed w-full px-8 flex flex-col md:justify-between md:flex-row z-50 ${isScrolled && user ? "bg-gray-900" : "bg-gradient-to-b from-black"} pb-5`}>
        <div>
           <img src={logo} alt="logo" className="w-32 pt-5 mx-auto md:mr-28" onClick={HandleGPT} />
        </div>

        {user && (
          <div className="-mt-3 md:m-0 hover:scale-105 duration-300">
            <button
              className="rounded-3xl bg-animated-gradient mt-10 px-28 py-2 text-white font-bold text-xl shadow-2xl"
              onClick={HandleGPT}
            >
              {gptView ? "Search Browse" : "Search GPT AI"}
            </button>
          </div>
        )}

        {user && (
          <div className="flex items-center justify-around -mt-7 md:-mt-2">
            <select
              className="rounded-md bg-gray-700 bg-opacity-50 hover:bg-gray-600 text-white text-lg px-3 py-1 mt-10"
              onChange={HandleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <img
              className="px-3 py-1 mt-10 ml-4 hidden md:inline-block"
              src={userLOGO}
              alt="userLOGO"
            />
            <button
              onClick={handleSignout}
              className="rounded bg-red-600 px-3 py-1 hover:bg-red-700 mt-10 ml-4 text-white"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

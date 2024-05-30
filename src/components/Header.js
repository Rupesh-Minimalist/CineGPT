import logo from "../images/logo.png"
const Header=()=>{

    return(
        <> 
            <div className="text-white flex items-start justify-around absolute w-full gap-[700px] bg-gradient-to-b from-black to-transparent h-56 z-10">
                <img src={logo} alt="logo" className="w-32 pt-5"></img>
                <button className="rounded bg-red-600 px-3 py-1 hover:bg-red-700 mt-10">Sign in</button>
            </div>     
        </>
    );

}

export default Header;
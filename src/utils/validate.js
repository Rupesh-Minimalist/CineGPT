export const validate=(email,password)=>{
     
    const isemailvalid=(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
    const ispasswordvalid=(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password));
    // const isnamevalid=(/[a-zA-Z0-9_\s]+/.test(name))

    if(!isemailvalid) return "Invalid Email address";
    if(!ispasswordvalid) return "Invalid Password";
    
    
    return null;
      
}
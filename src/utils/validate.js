export const validate=(email,password)=>{
     
    const isemailvalid=(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
    const ispasswordvalid=(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password));

    if(!isemailvalid) return "Invalid Email address";
    if(!ispasswordvalid) return "Weak Password";
    
    return null;  
}
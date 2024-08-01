import { useState } from "react";
import AuthContext from "./authContext"

const AuthState=(props)=>{
    const [newUser, setNewUser] = useState("frege")

    //create user
    // const newUser=()=>{

    // }

    return(
    <AuthContext.Provider value={newUser}>
       { props.children}
    </AuthContext.Provider>
    )
}

export default AuthState;

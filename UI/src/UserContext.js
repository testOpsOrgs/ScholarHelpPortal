import { createContext, useState } from "react";

export const UserContext = createContext({})

const UserContextProvider = ({children})=>{
    const [adminInfo, setAdminInfo] = useState({})
    return(
        <UserContext.Provider value={ {adminInfo, setAdminInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
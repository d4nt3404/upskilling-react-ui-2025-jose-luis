import { type JSX, ReactNode, useState } from "react";
import { UserContext } from "../context/UserContext";

function UserProvider({children}: {children: ReactNode}): JSX.Element {

    const [username] = useState("Luis Flores");

    return(
        <UserContext.Provider value={{username}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 
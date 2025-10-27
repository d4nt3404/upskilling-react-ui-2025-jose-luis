import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import type { UserContextType } from "../types/user";

function useUser(): UserContextType{
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser should be used inside provider")
    }
    return context;
}

export default useUser
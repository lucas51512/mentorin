import { createContext, ReactNode, useState } from "react";
import { User } from 'firebase/auth'
import { useNavigate } from "react-router";

interface UserContextProvidersProp {
    children: ReactNode
}

interface UserContextType {
    userData: User,
    createNewUser: (data?: User) => void
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProvidersProp) {

    const navigate = useNavigate()

    const [userData, setUserData] = useState<User>({} as User)

    function createNewUser(data?: User){
        setUserData(data!)
        navigate("/home")
    }

    console.log(userData)

    return (
        <UserContext.Provider value={{userData, createNewUser}}>
            {children}
        </UserContext.Provider>
    )
}
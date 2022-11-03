import { createContext, ReactNode, useState } from "react";
import { User } from 'firebase/auth'
import { useNavigate } from "react-router";
import { api } from "../lib/axios";

interface SignInCredentials{
    emailUsuario: string,
    senha: string
}

interface UserContextProvidersProp {
    children: ReactNode
}

interface UserContextType {
    userData: User,
    createNewUser: (data?: User) => void
    signIn(credentials: SignInCredentials): Promise<void>
    isAuthenticated: boolean
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProvidersProp) {

    const navigate = useNavigate()
    const isAuthenticated = false;

    async function signIn({ emailUsuario, senha }: SignInCredentials){
        try {
            const response = await api.post('/api/v1/auth/signin', {
                emailUsuario, 
                senha
            })
    
            console.log(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    const [userData, setUserData] = useState<User>({} as User)

    function createNewUser(data?: User){
        setUserData(data!)
        navigate("/home")
    }

    console.log(userData)

    return (
        <UserContext.Provider value={{userData, createNewUser, signIn, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}
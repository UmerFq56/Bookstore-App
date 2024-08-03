const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loggedIn,SetLoggedIn] = useState(null)

    const login =() => SetLoggedIn(true)

    return(
        <AuthContext.Provider value={{loggedIn,login}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
} 
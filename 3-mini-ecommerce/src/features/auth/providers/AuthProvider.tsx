
import { CredentialsType } from "@/schemas/CredentialsSchema";
import React, { useContext, useEffect } from "react";

type AuthContextType = {
  isLoggedIn: boolean,
  login: (credentials: CredentialsType) => void,
}

export const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {}
});


// TODO: complete
export const useAuth = () => useContext(AuthContext);

function AuthProvider({children} : {children: React.ReactNode}) {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  
  const login = (credentials: CredentialsType) => {
    console.log('Login called with credentials:', credentials);
    if(credentials) {
        // Simulate an API call to authenticate the user
        console.log('Logging in with credentials:', credentials);
        setIsLoggedIn(true); // Set the user as logged in
        // store in localStorage or sessionStorage  (better if cookie secure :) 
        localStorage.setItem('isLoggedIn', 'true'); // Example of storing login state
    } 
  };

  const initSession = () => {
    // Check if the user is already logged in
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  } 

  useEffect(() => {
    console.log('Init auth state..');  
    initSession();
  }, []);

  return(
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children} 
    </AuthContext.Provider>
  );
}

export default AuthProvider;
import { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../db/firebase-config'

const authContext = createContext();

const useAuthContext = () => useContext(authContext);

const AuthProvider = ({ children }) => {

  // SIGN UP
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // SIGN IN
  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // SIGN OUT
  const signout = () => signOut(auth);

  // GET CURRENT USER
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser)
    })
  }, []);

  return (
    <authContext.Provider value={{ signup, signin, signout, user }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuthContext, AuthProvider };

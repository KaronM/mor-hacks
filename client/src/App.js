import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/Dashboard';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsAuthenticated(true);
      } else {
        setAuthUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthenticationChange = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'lightblue' }}>
          <div style={{ textAlign: 'center', color: 'black' }}> 
            <SignIn onAuthenticationChange={handleAuthenticationChange} />
            <SignUp onAuthenticationChange={handleAuthenticationChange} />
          </div>
        </div>
      ) : (
        <Dashboard user={authUser} onAuthenticationChange={handleAuthenticationChange} onSignOut={handleSignOut} />
      )}
    </div>
  );
  
};

export default App;

